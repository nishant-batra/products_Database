# Shopping Cart

A real-time shopping cart app built with React and Firebase Firestore.

## Features

- Add new products
- Increase/decrease item quantity, remove items from the cart
- Cart total updates automatically
- Live sync via Firestore `onSnapshot` — changes reflect instantly across sessions

## Stack

- React 17
- Firebase (Firestore)
- Create React App (react-scripts 5)

## Getting Started

```bash
npm install
cp .env.example .env   # fill in your own Firebase project config
npm start
```

Open [http://localhost:3000](http://localhost:3000).

Firebase config is read from environment variables (`REACT_APP_FIREBASE_*`) — see `.env.example`. You'll need your own Firebase project with a `products` Firestore collection.

## Build

```bash
npm run build
```
