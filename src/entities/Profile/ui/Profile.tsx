import classes from './Profile.module.css'
import photo from './../../../app/img/profilePhoto/Ellipse 1.svg'

const Profile = () => {
  return (
    <section className={classes.main_body}>
      <div className={classes.description}>
        <header className={classes.header_description}>
          <h1 className={classes.header_description_text}>Hi, I am John, Creative Technologist</h1>
        </header>
        <p className={classes.content_description}>
          <span className={classes.content_description_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </span>
        </p>
        <button
          onClick={() => console.log('Скачалось резюме')}
          className={classes.download_resume_btn}
        >
          <span className={classes.download_resume_btn_text}>Download Resume</span>
        </button>
      </div>
      <div>
        <img src={photo} alt='Фото не загрузилось' />
      </div>
    </section>
  )
}

export default Profile
