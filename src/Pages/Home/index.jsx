import { Link, Links } from 'react-router-dom'
import './style.css'

function Home() {

    return (

        <>

            <h2>Bem-Vindo(a) ao meu sitema</h2>

            <Link to="/about">

                <button>navegar para about</button>

            </Link>

        </>

    )

}
export default Home