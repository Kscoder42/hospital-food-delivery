# Hospital Food Delivery Management System

A full-stack web application for managing hospital food delivery operations, built with NestJS (backend) and React (frontend).

## Features

- **Hospital Food Manager Dashboard**
  - Manage patient details and food/diet charts
  - Assign tasks to pantry staff
  - Track meal preparation and delivery status

- **Inner Pantry Dashboard**
  - Manage food preparation tasks
  - Assign meal boxes to delivery personnel
  - Track delivery statuses

- **Delivery Personnel Portal**
  - Mark deliveries as completed
  - View assigned meal boxes
  - Add delivery notes

## Technologies

- **Backend**
  - NestJS
  - Prisma
  - PostgreSQL
  - JWT Authentication

- **Frontend**
  - React.js
  - Material UI
  - Axios

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hospital-food-delivery.git
   cd hospital-food-delivery
   ```

2. Install dependencies:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with the following content:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/hospital_food_delivery"
   JWT_SECRET="your_jwt_secret_key"
   ```

4. Run database migrations:
   ```bash
   cd backend
   npx prisma migrate dev --name init
   ```

5. Start the development servers:
   ```bash
   # Backend
   cd backend
   npm run start:dev

   # Frontend
   cd ../frontend
   npm start
   ```

## API Documentation

The API documentation is available at `http://localhost:3000/api` when the backend server is running.

## Deployment

The application can be deployed using:

1. **Vercel** for frontend
2. **Render** or **Railway** for backend

See the respective platform documentation for deployment instructions.

## Testing Credentials

Use the following credentials for testing:

| Role                  | Email                        | Password     |
|-----------------------|------------------------------|--------------|
| Hospital Food Manager | hospital_manager@xyz.com     | Password@2025 |
| Inner Pantry Staff    | hospital_pantry@xyz.com      | Password@2025 |
| Delivery Personnel    | hospital_delivery@xyz.com    | Password@2025 |

## License

MIT License
