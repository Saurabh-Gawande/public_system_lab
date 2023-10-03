import pymongo
from flask import Flask, request, jsonify
from flask_cors import CORS 
# Allow requests from http://localhost:3001
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3001"}})



# Configuration for MongoDB connection
app.config['MONGO_URI'] = "mongodb://localhost:27017"
mongo = pymongo.MongoClient(app.config['MONGO_URI'])
db = mongo["fci"]  # Replace "fci" with your database name
collection = db["Users"]  # Replace "Users" with your collection name

@app.route('/')
def hello():
    return "Hi, Saurabh!"

@app.route('/home')
def home():
    return "Hey, welcome to home!"

@app.route('/page')
def pageNotFound():
    return "Page Not Found"

@app.route('/add_user', methods=['POST'])
def add_user():
    if request.method == 'POST':
        # Get user data from the request
        user_data = request.get_json()

        # Insert the user data into the MongoDB collection
        result = collection.insert_one(user_data)

        if result.inserted_id:
            return jsonify({"message": "User added successfully", "user_id": str(result.inserted_id)}), 201
        else:
            return jsonify({"message": "Failed to add user"}), 400
    else:
        return jsonify({"message": "Invalid request method"}), 405

@app.route('/get_users', methods=['GET'])
def get_users():
    if request.method == 'GET':
        # Retrieve all user documents from the MongoDB collection
        users = list(collection.find({}))

        # Convert the MongoDB documents to a list of dictionaries
        user_list = []
        for user in users:
            user_dict = {
                "_id": str(user["_id"]),
                "name": user.get("name", ""),
                "password": user.get("password", ""),
                # Add more fields as needed
            }
            user_list.append(user_dict)

        return jsonify({"users": user_list}), 200
    else:
        return jsonify({"message": "Invalid request method"}), 405

if __name__ == '__main__':
    app.run(debug=True)

# Close the MongoDB connection when the Flask app is shutting down
@app.teardown_appcontext
def close_mongo_connection(exception=None):
    mongo.close()
