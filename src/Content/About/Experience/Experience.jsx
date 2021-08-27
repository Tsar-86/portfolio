import s from './Experience.module.css'

const Experience = (props) => {
    
    let experienceDateElement = props.experience
    .map( exp =>  <li className={s.experience__list}>{`${exp.beginDate + exp.endDate}`}</li>);
    
    let experienceDescription = props.experience.map( exp => {
        return (
            <li className={s.experience__description}>
                <h3>{exp.job}</h3>
                <p>{exp.place}</p>
            </li>
        )
    });
    
    return (
        <div className={s.experience}>
            <h2>Work Experience</h2>
            <div className={s.experience__container}>
                <div className={s.experience__dates}>
                    <ul>
                        {experienceDateElement}
                    </ul>
                </div>
                <div className={s.experience__places}>
                    <ul>
                        {experienceDescription}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience