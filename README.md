# frictionless-service
Backend for frictionless streaming app

## Local DB Setup Guide
1. Download and Install [MySQL](https://dev.mysql.com/downloads/mysql/)
2. Run MySQL daemon using `mysqld --console`
3. Download and install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) and connect to the local database using
  - `Hostname = 127.0.0.1`
  - `Port = 3306` 
4. Run the SQL script present in `/scripts/setup.sql`

## Local Node Server Setup Guide
1. Clone this repo. Create a `.env` file in root directly and add the following env variables
  - `HOST='127.0.0.1'`
  - `SCHEMA_NAME='16thcross'`
  - `DB_PORT='3306'`
  - `DB_USER='root'` (default value, actual value in your local env might differ)
  - `DB_PASSWORD='password'` (default value, actual value in your local env might differ)
2. Download and Install [node.JS](https://nodejs.org/en/download/) (v14+)
3. Run `npm install`. This will create a `node_modules` folder and install all the dependencies
4. Run `npm run dev`. This will start the node server on port 6060

You're all set. Happy streaming!
