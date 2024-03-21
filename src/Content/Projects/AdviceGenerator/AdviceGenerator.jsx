import s from './AdviceGenerator.module.css'

const AdviceGenerator = (props) => {
    debugger;
    let adviceGeneratorProjectSkills = props.adviceGenerator.adviceGeneratorSkills
    .map( a => <li className={s.project__list}>{a.skill}</li> ) 

    return (
        <section className={s.first__section}>
            <div className={s.first__project}>
                <div className={s.adviceGenerator}></div>
            </div>
            <article className={s.adviceGenerator__project}>
                <h2 className={s.project__title}>{props.adviceGenerator.adviceGeneratorDescription.title}</h2>
                <p>{props.adviceGenerator.adviceGeneratorDescription.article}</p>
                <ul>
                    {adviceGeneratorProjectSkills}
                </ul>
                <button className={s.project__button}>
                    <a href='https://tsar-86.github.io/Advice-generator-app-main/' className={s.link}>Visit website</a>
                </button>   
            </article>
        </section>
    )
}

export default AdviceGenerator