import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return ( 
        <nav>
            <div>  
                <Link to={"/"}>FishShop</Link>{' '}
                <Link to={"/wishlist"}>....Wishlist..</Link>
            </div>
            <div className='nav-menu-buttons'>{
                props.token
                ? <>
                    <Link to={"/addProduct"} className="add-product-button">add a fish</Link>
                    <button className="logout-button" onClick={props.logout}>Logout</button>
                </>
                : <Link to={"/login"} className="login-button">Login</Link>
            }</div>
        </nav>
     );
}
 
export default Navigation;