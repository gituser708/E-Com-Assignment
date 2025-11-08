# 🛒 E-Com Cart Assignment

A simple full-stack shopping cart built with **React (Vite)**, **Express.js**, **MongoDB (Atlas)**, and **Axios**.  
Products are fetched from the [Fake Store API](https://fakestoreapi.com/products), and cart data is stored in your MongoDB Atlas database.

---

## ⚙️ Tech Stack

| Layer | Technology |
|:--|:--|
| Frontend | React (Vite), Axios, React Hot Toast, React Router DOM, TailwindCSS |
| Backend | Node.js, Express.js, Mongoose |
| Database | MongoDB Atlas |
| API Source | FakeStoreAPI |

---

## 📦 Project Structure

```
E-Com-Assignment/
│
├── backend/
│   ├── models/
│   │   └── cartModel.js
│   ├── routes/
│   │   └── cartRoute.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── API/cartAPI.js
│   │   ├── Components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Cart.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 📸 Screenshots

### 🏠 Home Page  
[Home Page](./screenshots/homePage.png)

### 🛒 Cart Page  
[Cart Page](./screenshots/cartPage.png)

### 💻 Terminal (Project Running)  
 [React Rinning](./screenshots/reactTerminl.png)
[Server Running](./screenshots/nodeterminal.png)

## 🎥 Demo Video
[▶️ Watch on Loom](https://www.loom.com/share/e4c8989055974e6486f140ae7040804f)


---

## 🚀 Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/gituser708/E-Com-Assignment.git
cd E-Com-Assignment
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

#### Create a `.env` file:
```env
MONGO_URI=<your-mongodb-atlas-uri>
PORT=5000
```

#### Example MONGO_URI:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/E-Com-Assignment
```

---

### 3️⃣ Start the Backend

```bash
npm start
```

If successful, you should see:
```
Server is running on PORT: 5000
Mongo DB Connected to: E-Com-Assignment
```

---

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
```

#### Start the React app:
```bash
npm run dev
```

Then open:  
👉 http://localhost:5173

---

## 🧩 Features

### 🛍 Product List
- Products fetched from **https://fakestoreapi.com/products**  
- Displayed in a responsive grid layout  
- Each card shows title, image, and price  

### 🛒 Add to Cart
- Click “Add to Cart” button → item gets added to MongoDB via Express API  
- Toast notifications using `react-hot-toast`  
- Cart count updates instantly in Navbar  

### 🧺 Cart Page
- Displays all added items with:
  - Image, title, price, and total
  - Increment / decrement quantity
  - Remove item button  
- Shows total items and total cost  

### 🔗 Navigation
- Navbar with cart icon & count badge  
- Click cart icon → navigates to `/cart`  

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|:--|:--|:--|
| **GET** | `/api/cart` | Get all cart items |
| **POST** | `/api/cart/add` | Add a product to cart (`{ productId }`) |
| **PUT** | `/api/cart/update/:id` | Update quantity of a cart item |
| **DELETE** | `/api/cart/remove/:id` | Remove a product from cart |

---

## 🧱 MongoDB Schema (cartModel.js)

```js
const cartSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  title: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
  totalPrice: { type: Number, default: 0 },
});
```

---

## 💻 How It Works

1. React fetches product data from FakeStoreAPI  
2. User clicks **Add to Cart** → sends `productId` to backend  
3. Backend fetches product details via API → saves to MongoDB  
4. Cart page retrieves all items from MongoDB and calculates total cost  





