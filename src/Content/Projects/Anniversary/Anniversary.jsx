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
                    <a href='https://tsar-86.github.io/Anniversary-project' className={s.link}>Visit website</a>
                </button>   
            </article>
        </section>
    )
}

export default Anniversary