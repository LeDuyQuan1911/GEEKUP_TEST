# 🍎 GEEKUP E-Commerce Backend (Node.js + MySQL)

> A backend API system built for an e-commerce ordering flow, designed using RESTful standards and Sequelize ORM.

---

## 🚀 Technologies Used

* **Node.js** – JavaScript runtime for server-side logic
* **Express.js** – Minimalist web framework for building APIs
* **MySQL** – Relational database management system
* **Sequelize** – Promise-based ORM for MySQL
* **dotenv** – Load environment variables from `.env` file
* **Postman** – Tool for testing HTTP APIs

---

## 📁 Project Structure (`/src`)

```bash
src/
├── config/         # Database connection setup
│   └── db.js
├── controller/     # API business logic
│   └── *.js
├── model/          # Sequelize model definitions
│   └── *.js
├── routes/         # API route definitions
│   └── api.js
└── app.js          # Application entry point
```

---

## 🔁 Application Flow

```text
app.js
 ├── config/db.js         → Initialize Sequelize connection
 ├── routes/api.js        → Route definitions
     ├── controller/*.js  → Handle requests
         └── model/*.js   → Interact with the database
```

---

## 📦 Available API Endpoints



### 📄 GET `/v1/api/categories`

> **Description:** Get all categories

* **Example:** `/v1/api/categories`

**Response:**

```json
[
    {
        "id": 1,
        "name": "Shoes"
    }
]
```

### 📄 GET `/v1/api/categories/:id/products`

> **Description:** Get all products belonging to a specific category.

* **Path Param:** `id` — ID of the category
* **Example:** `/v1/api/categories/1/products`

**Response:**

```json
[
    {
        "id": 1,
        "name": "KAPPA Women's Sneakers",
        "price": 980000,
        "size": 36,
        "color": "yellow",
        "category_id": 1
    }
]
```

---

### 🔍 GET `/v1/api/products/search?keyword=giay`

> **Description:** Search products by full-text keyword.

* **Query Param:** `keyword` — search term
* **Example:** `http://localhost:3000/v1/api/products/search?keyword=sneaker`

**Response:**

```json
[
    {
        "id": 1,
        "name": "KAPPA Women's Sneakers",
        "price": 980000,
        "size": 36,
        "color": "yellow",
        "category_id": 1
    }
]
```

---

### 🧾 POST `/v1/api/orders`

> **Description:** Create a new order.

**Request Body:**

```json
{
  "user_id": 1,
  "store_id": 1,
  "address_id": 1,
  "total_price": 200000,
  "items": [
    {
      "product_id": 1,
      "quantity": 2,
      "unit_price": 100000
    }
  ],
  "voucher_ids": [1]
}

```

**Response:**

```json
{
    "order_id": 7,
    "status": "created"
}
```

---

### ✅ POST `/v1/api/orders/:id/confirm`

> **Description:** Confirm an order and optionally simulate sending a confirmation email.

* **Path Param:** `id` — ID of the order
* **Example:** `/v1/api/orders/5/confirm`

**Response:**

```json
{
    "message": "Order 5 confirmed."
}
```

---

## 📌 Notes

* Ensure you have a `.env` file with your DB credentials and config.
* Run `npm install` to install all dependencies.
* Use `nodemon app.js` to start the server.

---

## 🔮 API Testing with Postman

1. Open Postman and create a new collection.
2. Set base URL to `http://localhost:<port>/v1/api/...`
3. Test each endpoint above with real data and monitor the responses.

# GEEKUP_TEST
