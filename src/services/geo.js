import axios from "axios";
const KEY = "/country?apiKey=at_BihSoo7xUtuo49jsqO5B1nITvESjk&ipAddress="
const client = axios.create({
    baseURL: " https://geo.ipify.org/api/v2" 
});

export default {
    getIPInfo(IP) {

        return client.get(`${KEY}${IP}`)
    }
}