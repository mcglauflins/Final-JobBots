release: pipenv run upgrade
web: gunicorn wsgi --chdir ./src/
worker: python scrapper.py 