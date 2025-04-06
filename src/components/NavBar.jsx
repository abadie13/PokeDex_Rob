import { NavLink } from "react-router"
export const NavBar = (
    {isOpen = false}
)=>{
    return (
        <nav className={isOpen ? "open": ""}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/my-collection">My Collection</NavLink></li>
                    <li><NavLink to="/about-me">About</NavLink></li>
                </ul>
        </nav>
    )
}

export const HamburgerBtn = (
    {
        onClickHandler = ()=>{}
    }
)=>{
    return (
        <button
            className="btnHamburger"
            onClick={onClickHandler}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}