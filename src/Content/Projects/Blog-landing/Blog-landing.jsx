import s from './Blog-landing.module.css'

const BlogLanding = (props) => {

    let blogLandingProjectSkills = props.blogLanding.blogLandingSkills.map( blog => <li className={s.project__list}>{blog.skill}</li> );
    
    return (
        <section className={s.second__section}>
            <article className={s.blog__landing__project}>
                <h2 className={s.project__title}>{props.blogLanding.blogLandingDescription.title}</h2>
                <p>{props.blogLanding.blogLandingDescription.article}</p>
                <ul>
                    {blogLandingProjectSkills}
                </ul>
                <button className={s.project__button}>
                    <a href='https://tsar-86.github.io/blog-landing-page/' className={s.link}>Visit website</a>
                </button>
            </article>
            <div className={s.second__project}>
                <div className={s.blog__landing}></div>
            </div>
        </section>
    )
}

export default BlogLanding