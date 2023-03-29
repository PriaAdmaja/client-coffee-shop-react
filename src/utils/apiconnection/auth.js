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

export const logout = async () => {
    try {
        const url = `${process.env.REACT_APP_BACKENDAPI}/auth/logout`;
        const userId = localStorage.getItem("userId")
        await axios.post(url, {userId}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("cs-token")}`
            }
        })
        localStorage.removeItem('cs-token');
        localStorage.removeItem('profpict');
        window.location.reload();
    } catch (error) {
        console.log(error.message);
    }

}