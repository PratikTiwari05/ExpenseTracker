Got it 👍
Main **same content** ko **clean, professional README format** me rewrite kar raha hoon:

* ✅ Proper **headings**
* ✅ Clean **bullet points**
* ✅ **Links added**
* ❌ No emojis
* ❌ No extra fluff

You can **directly replace** your README with this.

---

# Expense Sharing Application (Splitwise-like Backend)

A simplified expense sharing backend system inspired by Splitwise, built using **Node.js, Express, and MySQL**.
The application supports group-based expense sharing, multiple split types, balance tracking, and balance simplification.

This project focuses on **correct system design, database modeling, and balance calculation logic**, rather than UI polish.

---

## Features

* Create users
* Create groups and add users to groups
* Add shared expenses
* Supported split types:

  * Equal split
  * Exact amount split
  * Percentage split
* Track balances:

  * Who owes whom
  * How much a user owes
  * How much others owe a user
* Balance simplification to minimize transactions
* Simple HTML/CSS UI for testing APIs
* Fully testable via Postman

---

## Project Structure

```
ExpenseTracker/
│
├── controllers/
│   ├── user_controller.js
│   ├── group_controller.js
│   ├── expense_controller.js
│   └── balance_controller.js
│
├── routes/
│   ├── user.js
│   ├── group.js
│   ├── expense.js
│   └── balance.js
│
├── utils/
│   └── balanceSimplify.js
│
├── config/
│   └── db.js
│
├── ui/
│   └── index.html
│
├── index.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

## Database Schema (Core Tables)

* **users**
  Stores user details

* **expense_groups**
  Stores group information

* **group_members**
  Maps users to groups (many-to-many relationship)

* **expenses**
  Stores expense details such as payer, amount, and split type

* **expense_splits**
  Stores individual user shares for each expense

This separation ensures accurate balance calculation and scalability.

---

## Setup Instructions (Local)

### 1. Clone the Repository

```
git clone https://github.com/PratikTiwari05/ExpenseTracker.git
cd ExpenseTracker
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=expensetracker
```

Make sure MySQL is running locally and the database exists.

---

### 4. Start the Server

```
node index.js
```

Expected output:

```
Server running on http://localhost:3000
```

---

## API Testing

* All APIs can be tested using **Postman**
* A simple HTML/CSS UI is provided in the `ui` folder to manually test:

  * User creation
  * Group creation
  * Expense addition
  * Balance tracking

---

## Repository and Links

* GitHub Repository:
  [https://github.com/PratikTiwari05/ExpenseTracker](https://github.com/PratikTiwari05/ExpenseTracker)

* LinkedIn:
  [https://www.linkedin.com/in/pratik-tiwari05/](https://www.linkedin.com/in/pratik-tiwari05/)

---

## Author

**Pratik Tiwari**

---

If you want next:

* Shorter README (assignment-specific)
* README with API examples
* Interview walkthrough using README

Just say the word.
