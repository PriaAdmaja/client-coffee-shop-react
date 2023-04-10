import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userInfoAction } from "../../redux/slices/userInfo";

const CheckToken = ({ children }) => {
    const [data, setData] = useState();
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();
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
        }).then(res => setData(res))
        .catch(err => {
            console.log(err.message);
            dispatch(userInfoAction.clearData());
            navigate('/login');
        }) 
    }, [token])
    if(data) {
        return (<>{children}</>)
    }
}

export default CheckToken