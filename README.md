# Bidding System

![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green?style=for-the-badge&logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Bidding System](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

A modern web application for managing bidding services and offers between companies. The system facilitates the interaction between bidding companies and offer providers in a secure, organized environment.

## Table of Contents

- [Bidding System](#bidding-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [API Routes](#api-routes)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Features

- **User Authentication & Authorization**

  - Secure login and registration
  - Role-based access control (Bidding companies, Offer companies, Admins)
  - Email verification
  - Password reset functionality

- **Bidding Management**

  - Create and manage bids
  - Track bid status (pending, won, lost)
  - Dashboard with analytics and statistics

- **Offer Management**

  - Create and publish service offers
  - Manage offer status and visibility
  - Track offer performance

- **Company Profiles**
  - Detailed company profiles for both bidding and offer companies
  - Service catalogues
  - Performance metrics

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, DaisyUI
- **State Management**: Redux Toolkit, React Query
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Form Handling**: Formik with Yup validation

## Prerequisites

- Node.js 18.x or later
- MongoDB database
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bidding-system.git
   cd bidding-system
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_SERVICE=your_email_service
   EMAIL_USER=your_email_username
   EMAIL_PASS=your_email_password
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js app directory with routes and API endpoints
- `/components`: Reusable UI components
- `/database`: MongoDB models and schemas
- `/lib`: Utility functions and shared libraries
- `/modules`: Business logic modules
- `/providers`: Context providers (Redux, etc.)
- `/utils`: Helper functions and utilities
- `/@types`: TypeScript type definitions

## API Routes

- `/api/auth/*`: Authentication-related endpoints
- `/api/bidding-dashboard/*`: Bidding management endpoints
- `/api/user/*`: User management endpoints
- `/api/add-bidding/*`: Bid creation endpoints

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b B-[Number of branch]`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin B-[Number of branch]`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - Gaza Sky Geeks 2024 Next.js Course - NextFrontiers Team - see the LICENSE file for details.

## Acknowledgments

- Next.js for the amazing framework
- MongoDB for the flexible database solution
- All contributors who have helped shape this project

---

<div align="center">
  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="300" alt="Business Meeting">
  
  <p>Built with ❤️ by NextFrontiers Team</p>
</div>