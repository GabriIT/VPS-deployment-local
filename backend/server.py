from flask import Flask, request, jsonify
from flask_cors import CORS

from dotenv import load_dotenv

import os

load_dotenv()

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/multiply", methods=["POST"])
def multiply():
    data = request.get_json()
    num1 = data["num1"]
    num2 = data["num2"]
    result = int(num1) * int(num2)  # Perform the multiplication
    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=os.environ.get("PORT", 8080),
        debug=os.environ.get("CURRENT_ENVIRONMENT") == "dev",
    )
    # app.run(debug=True)
