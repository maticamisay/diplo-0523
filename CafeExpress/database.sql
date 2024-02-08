CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    sale_price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    product_image BLOB,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories (category_id)
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    is_admin TINYINT NOT NULL DEFAULT 0,
    creation_date DATETIME,
    modification_date DATETIME
);

CREATE TABLE sales_orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATETIME NOT NULL,
    total_order DECIMAL(10, 2) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE order_details (
    detail_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES sales_orders (order_id),
    FOREIGN KEY (product_id) REFERENCES products (product_id)
);