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

api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/signup", methods=["POST"])
def postSignup():
    request_body_credentials = request.get_json(force=True)
    emailExists = bool(User.query.filter_by(email=request_body_credentials["email"]).first())

    if emailExists:
        return jsonify("Email is already in use.")
    else:
        userCredential = User(email=request_body_credentials["email"], password=request_body_credentials["password"])
        db.session.add(userCredential)
        db.session.commit()

        return jsonify("Success!")


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()
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

@api.route("/accounts", methods=["GET"])
def getAccounts():
    accounts = User.query.all()
    all_accounts = list(map(lambda x: x.serialize(), accounts))
    return jsonify(all_accounts)


if __name__ == "__main__":
    app.run()