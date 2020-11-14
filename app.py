import moviedb 
import os
from flask import Flask, json
from flask_cors import CORS
from flask_restful import Api
from dotenv import load_dotenv

# Load Environment variables
load_dotenv()

app = Flask(__name__)
# Allow cross domain apps to access API
CORS(app)

# Vanilla Flask route
@app.route("/", methods=["GET"])
def index():
    return "Welcome to my ZotHacks 2020 project!"

@app.route("/api/<genre>", methods=["GET"])
def movies(genre):
    return moviedb.run_api(genre)
    
# Handles validation errors and returns JSON Object
@app.errorhandler(422)
@app.errorhandler(400)
def handle_error(err):
    messages = err.data.get("messages", ["Invalid request."])
    return json.jsonify({"errors": messages}), err.code


if __name__ == "__main__":
    app.run(debug=True)
