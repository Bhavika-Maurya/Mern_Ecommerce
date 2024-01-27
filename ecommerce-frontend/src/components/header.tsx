import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  return <nav>

<Link to={"/"}>Home</Link>
<Link to={"/search"}><FaSearch/></Link>
<Link to={"/cart"}>Cart</Link>
  </nav>
}

export default Header