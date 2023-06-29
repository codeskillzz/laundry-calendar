require('dotenv').config();

const {PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE} = process.env;

module.exports = {
  "development": {
    "username": PG_USER,
    "password": PG_PASSWORD,
    "database": PG_DATABASE,
    "host": PG_HOST,
    "dialect": "postgres",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


