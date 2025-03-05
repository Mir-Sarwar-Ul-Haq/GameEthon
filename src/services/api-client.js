import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'a2cf3061216a4ab9bed0ec7bd533c95d'
    }
})