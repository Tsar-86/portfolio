import s from './Footer.module.css';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className={s.footer}>
            <button className={s.social__button}>
                <Link to='/git' className={`${s.social} ${s.github__logo}`}></Link>
            </button>
        </div>
    )
}

export default Footer