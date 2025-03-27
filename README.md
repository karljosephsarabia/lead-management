## Project Overview
This project is a simple Lead Management System built using a TurboRepo. It demonstrates core skills in Next.js, Node.js, database handling, and API development. The goal is to create a fully functional Lead Manager with both backend and frontend components.

## Technologies Used
- **Frontend**: Next.js
- **Backend**: Node.js/Express + TypeScript
- **Database**: MongoDB

## How to Run the Project Locally

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **TurboRepo** (if not installed, run `npm install turbo` or `yarn add turbo`)

### 1. Clone the Repository
```bash
git clone https://github.com/karljosephsarabia/lead-management.git
cd lead-management
```

### 2. Install Dependencies
Navigate to the root directory and install all dependencies.

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables
Create an account in **MongoDB Atlas** and create a `.env` file in the `apps/api` directory with the following variables:

```env
DB_ACCOUNT=your_account
DB_PASSWORD=your_password
DB_CLUSTER=your_cluster
DB_NAME=your_db_name
```

### 4. Run the Application
Use TurboRepo to run both API and Web applications concurrently.

```bash
npx turbo run dev
```

Alternatively, you can run each service individually.

#### Run API
```bash
cd apps/api
npm run dev
# or
yarn dev
```

#### Run Web
```bash
cd apps/web
npm run dev
# or
yarn dev
```

### 5. Open in Browser
The web application will typically run on:

```
http://localhost:3000
```

The API server will typically run on:

```
http://localhost:4000
```

## Live Site
- **Web:** [https://lead-management-web.vercel.app/](https://lead-management-web.vercel.app/)
- **API:** [https://lead-management-0z1r.onrender.com](https://lead-management-0z1r.onrender.com)  
(Note: Inactive project for free users can cause a request delay by 50 seconds or more.)


**Thank you for reviewing this project!**