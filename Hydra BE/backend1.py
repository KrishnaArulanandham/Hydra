import os
from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/dbname'

db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    # Add other columns as per your database schema

@app.route('/api/data', methods=['GET'])
def fetch_data():
    products = Product.query.all()
    return jsonify([product.name for product in products])


# MySQL Database configuration
db_config = {
    'host': 'localhost',  # Replace with your DB server IP if needed
    'user': 'Sillicon singam',  # Your MySQL username
    'password': 'krishna2324',  # Your MySQL password
    'database': 'BLUENUAL'  # The database you want to access
}

# Create MySQL connection
def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

# Sample route to fetch data
@app.route('/api/data', methods=['GET'])
def fetch_data():
    # Get the MySQL connection
    conn = get_db_connection()
    if conn is None:
        return jsonify({'error': 'Failed to connect to the database'}), 500
    
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM PRODUCT")  # Replace 'PRODUCT' with your table name
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(rows)  # Return the fetched data as JSON

    

