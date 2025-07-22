# 🛒 Perseverance Global Store Application

A full-stack e-commerce webshop built using Angular, Node.js, and Stripe. The application allows users to browse products, add items to their cart, and complete purchases using a secure Stripe checkout.

## 🚀 Features

- 🧾 Product listing with categories and filters
- 🛍️ Add to cart & update quantities
- 💳 Secure checkout with Stripe integration
- 🛒 Order summary and confirmation
- 🛠️ Admin dashboard (basic)
- 📦 Backend product and order management (Express.js)

## 🛠️ Technologies

- **Angular** – Frontend framework
- **TypeScript** – Strictly typed JavaScript
- **Node.js + Express** – Backend REST API
- **Stripe API** – Payment integration
- **MongoDB** – (Optional) Product & order storage
- **RxJS, Angular Forms, Angular Router** – Frontend utilities

## 🎬 Demo

You can try a live demo of the app here:  
👉 [https://perseverance-store.onrender.com](https://perseverance-store.onrender.com)

## 📦 Installation

### 🔧 Backend

```bash
cd server
npm install
npm run dev
```

### 🌐 Frontend

```bash
cd client
npm install
npm start
```

Then open `http://localhost:4200` in your browser.

## 📁 Project Structure

```
/client  → Angular client  
/server  → Node.js + Express server  
```

## 🧪 Development Tips

* Use `ng generate component` for new Angular components
* Store API keys like Stripe secret key in `.env`
* Use `Postman` or `curl` to test backend endpoints