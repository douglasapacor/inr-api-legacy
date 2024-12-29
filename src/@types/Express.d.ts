declare namespace Express {
  export interface Request {
    meta: {
      date: Date
      method: string
      start: number
      finish?: number
    }
    user: {
      idcliente: number
      idusuario: number
      idgrupo_site: number
      admin: string
      autorizacao_trabalhista: string
    }
  }
}
