# SnoozeSpace

SnoozeSpace is a comprehensive booking and management platform designed for educational institutions and coworking spaces. It provides a seamless experience for users to book accommodations, study spaces, access computers, and order food, all through an intuitive web interface.

## Features

### 🏠 Room Booking
- Browse and book hotel-style rooms with detailed descriptions and pricing
- View room availability and book for specific nights
- Secure booking system with payment integration

### 📚 Study Room Reservations
- Reserve group study rooms for collaborative work
- Multiple study room options with different capacities
- Easy booking interface with real-time availability

### 🍽️ Food Ordering
- Order food and beverages directly through the platform
- Track order status and history
- Integrated billing and payment system

### 💻 PC Access
- Book computer access for specific time slots
- Manage PC booking history and schedules
- Admin controls for PC management

### 👤 User Management
- Firebase authentication for secure login/registration
- User profiles with booking history
- Personalized dashboard and preferences

### 💳 Payment & Billing
- Secure payment processing
- Order tracking and status updates
- Comprehensive billing history

### 🎯 Additional Features
- **Feedback System**: Collect user feedback and reviews
- **Loyalty Program**: Reward system for frequent users
- **Admin Panel**: Manage rooms, orders, and user requests
- **FAQ Section**: Help and support information
- **Booking History**: Complete transaction and booking records

## Tech Stack

### Frontend (SnoozeSpace-client)
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Backend Integration**: Axios
- **Authentication & Hosting**: Firebase
- **Routing**: React Router DOM
- **Icons**: FontAwesome
- **Linting**: ESLint
- **Additional Libraries**: React Burger Menu, React SweetAlert2, LocalForage, Match Sorter, Sort By

### Backend (SnoozeSpace-Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Middleware**: CORS
- **Environment**: dotenv
- **Development Tool**: Nodemon
- **Deployment**: Vercel

## Structure

- `SnoozeSpace-client/` - React/Vite frontend application
- `SnoozeSpace-Server/` - Node.js backend API

## Setup

### Client

```powershell
cd "g:\cse 470 project\SnoozeSpace-client"
npm install
npm run dev
```

### Server

```powershell
cd "g:\cse 470 project\SnoozeSpace-Server"
npm install
node index.js
```

## License

This project is licensed under the MIT License. See `LICENSE`.
