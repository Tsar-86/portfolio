import Anniversary from './Anniversary/Anniversary';
import BlogLanding from './Blog-landing/Blog-landing';
import s from './Projects.module.css';


const Projects = (props) => {
    return (
        <div className={s.projects}>
            <Anniversary 
                anniversary={props.anniversary} 
                anniversaryDescription={props.anniversaryDescription} />
            <BlogLanding 
                blogLanding={props.blogLanding} 
                blogLandingDescription={props.blogLandingDescription}/>
        </div>
    )
}

export default Projects