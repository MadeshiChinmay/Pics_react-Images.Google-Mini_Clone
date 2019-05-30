import axios from 'axios'
//created customised axios client with defaulted values
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID 8227db06d7035282f06500617e451e5637b0158c02deecbeb462e43927ce47e6'

    }
})