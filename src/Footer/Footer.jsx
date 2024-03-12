import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <button className={s.social__button}>
                <a href='https://github.com/Tsar-86' className={`${s.social} ${s.github__logo}`}></a>
            </button>
        </div>
    )
}

export default Footer