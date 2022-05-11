"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.admin import setup_admin
from api.models import db, User
from api.utils import generate_sitemap, APIException


# JWT
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

import hashlib
import random
import requests
# from sendgrid import SendGridAPIClient
# from sendgrid.helpers.mail import Mail


api = Blueprint('api', __name__)

salt = "X#34!Asdft3["
codeG = -1;

@api.route("/signup", methods=["POST"])
def postSignup():
    request_body_credentials = request.get_json(force=True)
    emailExists = bool(User.query.filter_by(email=request_body_credentials["email"]).first())

    if emailExists:
        return jsonify("Email is already in use.")
    else:
        password = request_body_credentials["password"] + salt
        hashedPassword = hashlib.sha224(password.encode('utf-8')).hexdigest()
        userCredential = User(first_name=request_body_credentials["first_name"], last_name=request_body_credentials["last_name"],email=request_body_credentials["email"], password=hashedPassword)
        db.session.add(userCredential)
        db.session.commit()

        return jsonify("Success!")


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None) + salt
    hashedPassword = hashlib.sha224(password.encode('utf-8')).hexdigest()

    # Query your database for email and password
    user = User.query.filter_by(email=email, password=hashedPassword).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@api.route("/change-profile", methods=["PUT"])
def updateProfileInfo():
    request_body_credentials = request.get_json(force=True)
    emailExists = bool(User.query.filter_by(email=request_body_credentials["email"]).first())

    if emailExists:
        return jsonify("Email is already in use.")
    else:
        user = User.query.get(request_body_credentials["id"])

        email = request_body_credentials["email"]
        first_name = request_body_credentials["first_name"]
        last_name = request_body_credentials["last_name"]
        password = request_body_credentials["password"] + salt
        hashedPassword = hashlib.sha224(password.encode('utf-8')).hexdigest()


        if(email):
            user.email = email
            db.session.commit()
        if(first_name and len(first_name) != 0):
            user.first_name = first_name
            db.session.commit()
        if(last_name and len(last_name) != 0):
            user.last_name = last_name
            db.session.commit()
        if(password and len(password) != 0):
            user.password = hashedPassword
            db.session.commit()


        return jsonify("Success!")

@api.route("/change-password", methods=["PUT"])
def updatePassword():
    global codeG
    request_body_credentials = request.get_json(force=True)
    emailExists = bool(User.query.filter_by(email=request_body_credentials["email"]).first())

    if emailExists and int(codeG) == int(request_body_credentials["code"]):
        user = User.query.filter_by(email=request_body_credentials["email"]).first()

        password = request_body_credentials["password"] + salt
        hashedPassword = hashlib.sha224(password.encode('utf-8')).hexdigest()

        if(password and len(password) != 0):
            user.password = hashedPassword
            db.session.commit()
            return jsonify("Success!")

    elif(int(codeG) != int(request_body_credentials["code"])):
        return jsonify("Wrong code!")
        #  Actual Code: " + str(codeG) + "\nReceived Code: " + str(request_body_credentials["code"])
    else:
        return jsonify("Email is already in use.")

@api.route("/forgot-password", methods=["POST"])
def sendResetEmail():
    global codeG
    request_body_credentials = request.get_json(force=True)
    emailExists = bool(User.query.filter_by(email=request_body_credentials["email"]).first())

    if emailExists:
        reset_code = random.randrange(1000, 9999)
        response = requests.post(
		    "https://api.mailgun.net/v3/customer-service.sercbot.com/messages",
		    auth=("api", os.getenv('MAILGUN_KEY')),
		    data={"from": "SERC-BOT <password-reset@customer-service.sercbot.com>",
			"to": request_body_credentials["email"],
			"subject": "password reset | SERC-BOT",
			"text": "Here's your password reset code: " +str(reset_code)})
        data = response.text
        codeG = reset_code
        print(data)

        return jsonify({
            "Status": "Success",
            "reset_code": reset_code
        })
    else:
        return jsonify("No account with such email.")

@api.route("/accounts", methods=["GET"])
def getAccounts():
    accounts = User.query.all()
    all_accounts = list(map(lambda x: x.serialize(), accounts))
    return jsonify(all_accounts)


if __name__ == "__main__":
    app.run()