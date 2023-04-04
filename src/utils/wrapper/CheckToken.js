import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckToken = ({ children }) => {
    const [data, setData] = useState()
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.userInfo);
    useEffect(() => {
        if (!token) {
            return navigate('/login', {
                replace: true
            })
        }
        const url = `${process.env.REACT_APP_BACKENDAPI}/auth/private`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res => setData(res)).catch(err => console.log(err)) 
    }, [token])
    console.log(data);
    if(data) {
        return (<>{children}</>)
    }
}

export default CheckToken