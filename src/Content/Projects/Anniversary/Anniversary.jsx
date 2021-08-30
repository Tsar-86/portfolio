import { Link } from 'react-router-dom'
import s from './Anniversary.module.css'

const Anniversary = (props) => {
    debugger;
    let anniversaryProjectSkills = props.anniversary.anniversarySkills
    .map( a => <li className={s.project__list}>{a.skill}</li> ) 

    return (
        <section className={s.first__section}>
            <div className={s.first__project}>
                <div className={s.anniversary}></div>
            </div>
            <article className={s.anniversary__project}>
                <h2 className={s.project__title}>{props.anniversary.anniversaryDescription.title}</h2>
                <p>{props.anniversary.anniversaryDescription.article}</p>
                <ul>
                    {anniversaryProjectSkills}
                </ul>
                <button className={s.project__button}>
                    <Link to='/anniversary' className={s.link}>Visit website</Link>
                </button>   
            </article>
        </section>
    )
}

export default Anniversary