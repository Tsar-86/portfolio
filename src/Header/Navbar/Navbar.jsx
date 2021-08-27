import { NavLink } from 'react-router-dom'
import s from'./Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink to='/Home' activeClassName={s.active}>Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/About' activeClassName={s.active}>About</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Projects' activeClassName={s.active}>Projects</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Contact' activeClassName={s.active}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar