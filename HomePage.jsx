import { Link } from "react-router-dom";
import '/src/styles/home.css';
function Homepage() {
    return (
        <div>
            <h1>Hello this is the homepage</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="shop">Store</Link>
                    </li>
                    <li>
                        <Link to="cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Homepage;