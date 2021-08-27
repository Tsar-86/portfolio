import logo from './fountain.jpg'
import cat from './bonnya_cat.jpg'
import s from './About.module.css'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'

const About = (props) => {
        
    return (
        <div className={s.about}>
            <div className={s.photoes}>
                <div className={s.logo}>
                    <img src={logo} alt='fountain' width='350' height='450' />
                </div>
                <div className={s.logo}>
                    <img src={cat} alt='cat' width='350' height='450' />
                </div>
            </div>
            <section>
                <div className={s.section}>
                    <h2>{props.about.eng.name}</h2>
                    <p>{props.about.eng.job}</p>
                    <p></p>
                </div>
                <Skills skills={props.skills} />
                <Experience experience={props.experience} />
                <Education education={props.education} />
            </section>
        </div>
    )
}

export default About