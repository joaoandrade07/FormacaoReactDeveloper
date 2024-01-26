//6 - links entre páginas

import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <h1>Login</h1>
            <Link to="/">
                <button>Voltar para a home</button>
            </Link>
        </>
    )
}

export default Login;