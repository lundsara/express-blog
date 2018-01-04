const options = {
  query: (e) => {
    console.log(e.query);
  }
};

//require pg promise dependency for the app
const pgp = require('pg-promise')(options);
const DATABASE_URL = postgres://nlacyfoedjcjnv:64179f02a6ffb79ce63824a61867de2d036e1c1d8a3a6c915d2de4469815b9a9@ec2-107-22-183-40.compute-1.amazonaws.com:5432/d5lqcn3m8ob61b

let db;
//require pg promise dependency for the app
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'blogs_dev',
    port: 5432,
    host: 'localhost',
  });
  //if the node environment is in production then request the db url
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}
//export the database
module.exports = db;
