import s from './Contact.module.css'

const Contact = () => {
    return (
        <div className={s.contact}>
            <h2>Want to get in touch? <br />Drop me a line!</h2>
            <div className={s.forms}>
                <div className={s.name__form}>
                    <h4 className={s.form__title}>Name</h4>
                    <input type='text' placeholder='Enter your name'/>
                </div>
                <div className={s.email__form}>
                    <h4 className={s.form__title}>Email</h4>
                    <input type='email' placeholder='Enter your email'/>
                </div>
            </div>
            <div className={s.message__form}>
                <h4 className={s.form__title}>Lable Form</h4>
                <textarea className={s.message__textarea} type='text' placeholder='Enter your message'/> 
            </div>
            <div className={s.contact__button}>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Contact