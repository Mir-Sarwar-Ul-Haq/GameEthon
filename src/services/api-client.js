import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'a2cf3061216a4ab9bed0ec7bd533c95d'
    }
})


export const getAll = async (endpoint, config) => {
    const res = await axiosInstance.get(endpoint, config);
    return res.data
};
// class APIClient{

//     constructor(endpoint){
//         this.endpoint = endpoint
//     }

//     getAll= async (config)=>{
//         const res = await axiosInstance.get(this.endpoint, config)
//         return res.data
//     }
// }

// export default APIClient;