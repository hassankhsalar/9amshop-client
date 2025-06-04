# 🛍️ 9am Shop - Frontend

This is the frontend for the **9am Shop** web application, built with **React** and **Tailwind CSS**. Users can sign up, sign in, and manage globally unique shop names. Authentication is handled with **Firebase Auth** and secured using **JWT tokens** from the backend.

### 🔗 Live Site

➡️ [https://steady-dolphin-3350d4.netlify.app](https://steady-dolphin-3350d4.netlify.app)

---

## 🚀 Features

- 🔐 Firebase Authentication
- 🧾 JWT token-based API access
- 🛒 Unique global shop name creation
- 🧑 Dashboard with avatar, shop list, and links
- ⚡ Tailwind CSS styling

---

## 🧰 Tech Stack

- React
- Tailwind CSS
- Firebase Authentication
- Axios
- React Router
- JWT

---

## ⚙️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/hassankhsalar/9amshop-client.git



## Installation


npm install

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

VITE_apiKey=AIzaSyClCdHSrLeqBpofzlP6xJZbnRDRH1SLGjw
VITE_authDomain=amshop-1051e.firebaseapp.com
VITE_projectId=amshop-1051e
VITE_storageBucket=amshop-1051e.firebasestorage.app
VITE_messagingSenderId=357268122591
VITE_appId=1:357268122591:web:8c744af312a110d6d0b26a


## Running Tests

To run tests, run the following command

```bash
  npm run dev

```



🔒 Authentication Flow
On login, user credentials are authenticated via Firebase.

After Firebase login, a POST request is made to the backend /jwt endpoint with the user’s email.

The server returns a JWT token, which is stored in localStorage or sessionStorage based on the “Remember Me” setting.