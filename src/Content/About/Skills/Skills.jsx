import s from './Skills.module.css'

const Skills = (props) => {

    let skillListItems = props.skills.map(s => <li>{s.skill}</li>);
    
    return (
        <div className={s.skills}>
            <div className={s.skill__container}>
                <h2>Skills</h2>
                <ul>
                    {skillListItems}
                </ul>
            </div>
            <div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.html} ${s.first}`}></div>
                </div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.javascript}`}></div>
                </div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.react}`}></div>
                </div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.git}`}></div>
                </div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.php}`}></div>
                </div>
                <div className={s.progress}>
                    <div className={`${s.bar__chart} ${s.english}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Skills