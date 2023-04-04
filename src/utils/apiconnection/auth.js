import axios from "axios";

export const register = (email, password, phoneNumber, controller) => {
    const body = {
        email,
        password,
        phoneNumber
    };
    const url = `${process.env.REACT_APP_BACKENDAPI}/auth/register`;
    return axios.post(url, body, {
        signal: controller.signal,
    });
};

// export const login = async() => {
//     const controller = new AbortController()
//     try {
//         const result = await axios.post(url, body, {
//             signal: controller.signal,
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//             }
//         });
//     } catch (error) {
        
//     }
    
// }