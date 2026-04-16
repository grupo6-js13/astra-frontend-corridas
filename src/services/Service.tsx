import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://corrida-compartilhada-backend.onrender.com'
})