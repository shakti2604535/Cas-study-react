import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        const login = localStorage.getItem('name');
        if (!login) {
            navigate('/')
        }
    })
    return (<>
        <Component />
    </>)
}
export default Protected;