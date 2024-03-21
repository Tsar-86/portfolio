import AdviceGenerator from './AdviceGenerator/AdviceGenerator';
import BlogLanding from './Blog-landing/Blog-landing';
import s from './Projects.module.css';


const Projects = (props) => {
    return (
        <div className={s.projects}>
            <AdviceGenerator adviceGenerator={props.adviceGenerator} />
            <BlogLanding blogLanding={props.blogLanding} />
        </div>
    )
}

export default Projects