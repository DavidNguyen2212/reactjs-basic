import { Link } from "react-router-dom"

export const Navbar = () => {
    // Component Link sẽ tạo ra đường dẫn tuyệt đối
    // Routes so sánh đường dẫn này với các path trong các lựa chọn và nhảy đến pageComponent tương ứng
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}