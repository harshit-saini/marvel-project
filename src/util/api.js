import axios from 'axios';

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    apikey: process.env.REACT_APP_PUBLIC_KEY,
    ts: process.env.REACT_APP_TS,
    hash: process.env.REACT_APP_HASH
  }
})

export default api;