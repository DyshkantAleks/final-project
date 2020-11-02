import Axios from 'axios'

export const BASE_URL = 'https://dg-shop.herokuapp.com/api'

export const server = Axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTA0NzQ1ODBkNDE3MDAxNzg4NWU2YSIsImZpcnN0TmFtZSI6IlRlc3QiLCJsYXN0TmFtZSI6InVzZXIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MDMyOTEyNDcsImV4cCI6MTYwMzMyNzI0N30.Y6OGbtdHIDqtL-y7Yzm7yfJza8pbcsjqY5LsWNsoIBg' }
})
