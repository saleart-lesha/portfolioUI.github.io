import { Link } from 'react-router-dom'
import classes from './RecentPosts.module.css'

const RecentPosts = () => {
  return (
    <section className={classes.main_body}>
      <header className={classes.header}>
        <h1 className={classes.header_text}>Recent posts</h1>
        <nav>
          <Link className={classes.link} to='/blog'>
            View all
          </Link>
        </nav>
      </header>
      <div className={classes.card_box}>
        <article className={`${classes.box} ${classes.box_margin}`}>
          <h2 className={classes.box_header}>Making a design system from scratch</h2>
          <p className={classes.date}>12 Feb 2020 | Deign, Pattern</p>
          <p className={classes.content_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </article>
        <article className={classes.box}>
          <h2 className={classes.box_header}>Creating pixel perfect icons in Figma</h2>
          <p className={classes.date}>12 Feb 2020 | Figma, Icon Design</p>
          <p className={classes.content_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </article>
      </div>
    </section>
  )
}

export default RecentPosts
