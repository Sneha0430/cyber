from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/save_prompt', methods=['POST'])
def save_prompt():
    data = request.json
    prompt_text = data.get('promptText')
    parameters = data.get('parameters')
    # Here you would typically save the prompt to a database
    print(f"Received prompt: {prompt_text} with parameters: {parameters}")
    return jsonify({"message": "Prompt saved successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)