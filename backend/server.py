from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
# CORS(app) 
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/multiply', methods=['POST'])
def multiply():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    result = int(num1) * int(num2)  # Perform the multiplication
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0')   # to run in container at port 5000
    # app.run(debug=True)
