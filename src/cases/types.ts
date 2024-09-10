import type { RowDataPacket } from "mysql2"
import databaseClient from "../lib/dbClient/databaseClient"

export type defaultResponse = {
  success: boolean
  data?: any
  message?: string
}

export class Repository {
  protected async procedure<T>(
    name: string,
    ...values: any[]
  ): Promise<T | null> {
    try {
      const [QueryResult] = await databaseClient.execute<RowDataPacket[]>(
        `CALL ${name}(${values})`
      )

      if (!QueryResult[0][0]) return null

      return QueryResult[0][0] as T
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  protected async many<T>(name: string, ...values: any[]): Promise<T[]> {
    try {
      const [QueryResult] = await databaseClient.execute<RowDataPacket[]>(
        `CALL ${name}(${values})`
      )

      if (!QueryResult[0]) return []

      return QueryResult[0] as T[]
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export class Provider {}
