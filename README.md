# postgres-sequelize-demo

## Steps to run the project

### Clone the repository

```bash
git clone https://github.com/irahuldutta02/postgres-sequelize-demo.git
cd postgres-sequelize-demo
```

### install the dependencies and start the server

```bash
npm install
npm run dev
```

### Create a .env file in the root directory and add the following content

```
PORT=3000
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgresSequelizeDemoDb"
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=postgresSequelizeDemoDb
```
