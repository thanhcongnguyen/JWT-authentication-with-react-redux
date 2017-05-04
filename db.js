var pg = require('pg')
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'myapp', //env var: PGDATABASE
  password: '112233', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 3600, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config)



function query(sql, cb){
    pool.connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err)
        }
        client.query(sql, function(err, result) {
        done(err)

        if(err) {
            return console.error('error running query', err)
             }
            return cb(result)
        })
    })
}


function checkSignIn(username, password, cb){
    var sql = `SELECT * FROM "users" WHERE username = '${username}' AND password='${password}'`
    query(sql, result => {
    if(result.rowCount == 1){
      return cb(result)
    }
  })
}


module.exports = {query,checkSignIn }