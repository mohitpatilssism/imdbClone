import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pro(props) {
    const { Cmp } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (!login) {
            navigate('/login')
        }
    })
    return (
        <>
            <Cmp />
        </>

    )
}
export default Pro;