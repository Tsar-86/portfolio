import { Link } from 'react-router-dom'
import s from './Anniversary.module.css'

const Anniversary = (props) => {
    
    let anniversaryProjectSkills = props.anniversary.map( a => <li className={s.project__list}>{a.skill}</li> ) 

    return (
        <section className={s.first__section}>
            <div className={s.first__project}>
                <div className={s.anniversary}></div>
            </div>
            <article className={s.anniversary__project}>
                <h2 className={s.project__title}>{props.anniversaryDescription.title}</h2>
                <p>{props.anniversaryDescription.article}</p>
                <ul>
                    {anniversaryProjectSkills}
                </ul>
                <button className={s.project__button}>
                    <Link to='/anniversary'>Visit website</Link>
                </button>   
            </article>
        </section>
    )
}

export default Anniversary