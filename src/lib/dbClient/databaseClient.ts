import mysql from "mysql2/promise"
import database from "../../config/database"

if (!global.databaseClient) {
  global.databaseClient = mysql.createPool({
    host: database.host,
    user: database.user,
    database: database.database,
    password: database.password,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
  })
}

databaseClient = global.databaseClient

export default databaseClient
