import { NavLink } from 'react-router-dom'
import s from'./Home.module.css'



const Home = (props) => {
    return (
        <div className={s.home}>
            <h5>{props.home.eng.title}</h5>
            <h1>{props.home.eng.name} <br/> {props.home.eng.article}</h1>
            <p className={s.article}>I am open to interesting and challenging offers. 
                Last couple of years I study Web development, HTML5, CSS3 (CSS Flexbox),  
                JavaScript including React and Redux libraries, PHP. I am deeply interested 
                in the field of information technologies and strive to develop professionally in it every day.
            </p>
            <div className={s.cv}>
                <p className={s.cv__title}>Check out my CV -&gt;</p> 
                <button className={s.cv__button}>
                    <NavLink to='/About' className={s.link}>About</NavLink>
                </button>
                <p className={s.cv__project__title}>And some of my projects -&gt;</p>
                <button className={s.cv__button}> 
                    <NavLink to='/Projects' className={s.link}>Projects</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Home