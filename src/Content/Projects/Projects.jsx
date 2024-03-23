import AdviceGenerator from './AdviceGenerator/AdviceGenerator';
import BlogLanding from './BlogLanding/BlogLanding';
import ExpencesChart from './ExpencesChart/ExpencesChart';
import s from './Projects.module.css';


const Projects = (props) => {
    return (
        <div className={s.projects}>
            <AdviceGenerator adviceGenerator={props.adviceGenerator} />
            <BlogLanding blogLanding={props.blogLanding} />
            <ExpencesChart expencesChart={props.expencesChart} />
        </div>
    )
}

export default Projects