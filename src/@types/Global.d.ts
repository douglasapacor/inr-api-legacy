import mysql from "mysql2/promise"

declare global {
  var databaseClient: mysql.Pool
  interface BigInt {
    toJSON(): Number
  }
}

BigInt.prototype.toJSON = function () {
  return Number(this)
}
