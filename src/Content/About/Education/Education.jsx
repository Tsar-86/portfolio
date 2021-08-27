import s from './Education.module.css'

const Education = (props) => {
    let educationDateElement = props.education
        .map( edu => <li className={s.education__list}>{`${edu.beginDate + edu.endDate}`}</li>);
    let educationDescription = props.education.map( edu => {
        return (
            <li>
                <h3>{edu.education}</h3>
                <p>{edu.place}</p>
            </li>
    )})
    
    return (
        <div className={s.education}>
            <h2>Education</h2>
            <div className={s.education__container}>
                <div className={s.education__dates}>
                    <ul>
                        {educationDateElement}
                    </ul>
                </div>
                <div className={s.education__places}>
                    <ul>
                        {educationDescription}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education