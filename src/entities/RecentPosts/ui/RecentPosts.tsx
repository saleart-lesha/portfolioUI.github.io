import classes from './RecentPosts.module.css'

const RecentPosts = () => {
  return (
    <section className={classes.main_body}>
      <div className={classes.header}>
        <p className={classes.header_text}>Recent posts</p>
        <a href='#' className={classes.link}>
          View all
        </a>
      </div>
      <div className={classes.card_box}>
        <div className={`${classes.box} ${classes.box_margin}`}>
          <p className={classes.box_header}>Making a design system from scratch</p>
          <p className={classes.date}>12 Feb 2020 | Deign, Pattern</p>
          <p className={classes.content_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={classes.box}>
          <p className={classes.box_header}>Creating pixel perfect icons in Figma</p>
          <p className={classes.date}>12 Feb 2020 | Figma, Icon Design</p>
          <p className={classes.content_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
