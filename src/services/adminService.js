import axios from '../axios';


const handleLogin = async (email, password) => {

    return await axios.post('/login', { email, password });

};


export { handleLogin }