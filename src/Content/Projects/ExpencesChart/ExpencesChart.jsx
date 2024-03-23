import s from './ExpencesChart.module.css'

const ExpencesChart = (props) => {

    let expencesChartProjectSkills = props.expencesChart.expencesChartSkills.map(chart => <li className={s.project__list}>{chart.skill}</li>);

    return (
        <section className={s.third__section}>
            <div className={s.third__project}>
                <div className={s.expences__chart}></div>
            </div>
            <article className={s.expences__chart__components}>
                <h2 className={s.project__title}>{props.expencesChart.expencesChartDescription.title}</h2>
                <p>{props.expencesChart.expencesChartDescription.article}</p>
                <ul>
                    {expencesChartProjectSkills}
                </ul>
                <button className={s.project__button}>
                    <a href='https://tsar-86.github.io/expenses-chart-component/' className={s.link}>Visit website</a>
                </button>
            </article>

        </section>
    )
}

export default ExpencesChart