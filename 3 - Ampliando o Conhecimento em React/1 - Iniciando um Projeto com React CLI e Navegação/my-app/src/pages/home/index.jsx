import {Link} from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <Link to="/login"><button>Fazer login</button></Link>
        </>
    )
}

export default Home;