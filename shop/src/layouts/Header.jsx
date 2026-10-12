import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to='/'> home</Link>
            <Link to='/products'>상품목록</Link>
        </div>
    )
}

export default Header;