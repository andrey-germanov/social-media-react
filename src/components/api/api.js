import * as axios from 'axios';


const getUsers = (currentPage,pageSize) =>{
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredetials: true
        })
        .then(response => response.data)
}

export default getUsers;