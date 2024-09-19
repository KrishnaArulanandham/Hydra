import os
from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from flask import Flask, render_template

app = Flask(__name__)
CORS(app)  # Enable CORS for the frontend to communicate with the backend

# MySQL Database configuration
db_config = {
    'host': 'localhost',  # Replace with your DB server IP if needed
    'user': 'username',  # Your MySQL username
    'password': 'password',  # Your MySQL password
    'database': 'database_name'  # The database you want to access
}

# Create MySQL connection
def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

# Sample route to fetch data
@app.route('/api/data', methods=['GET'])
def fetch_data():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM your_table")  # Replace 'your_table' with your actual table
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(rows)

if __name__ == '__main__':
    app.run(debug=True)
    

