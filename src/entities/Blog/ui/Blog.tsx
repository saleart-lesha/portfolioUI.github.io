import classes from './Blog.module.css'

const Blog = () => {
  return (
    <section className={classes.main_body}>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.header_text}>Blog</h1>
        </header>
        <div className={classes.box_items}>
          <article className={classes.item}>
            <header className={classes.item_header}>
              <h2 className={classes.item_header_text}>UI Interactions of the week</h2>
            </header>
            <div className={classes.item_header_description}>
              <p className={classes.item_header_description_date}>12 Feb 2019</p>
              <p className={classes.item_header_description_separator}>|</p>
              <p className={classes.item_header_description_name}>Express, Handlebars</p>
            </div>
            <p className={classes.item_description_main_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </article>
        </div>
        <hr className={classes.under_line} />
        <div className={classes.item}>
          <header className={classes.item_header}>
            <h2 className={classes.item_header_text}>UI Interactions of the week</h2>
          </header>
          <div className={classes.item_header_description}>
            <p className={classes.item_header_description_date}>12 Feb 2019</p>
            <p className={classes.item_header_description_separator}>|</p>
            <p className={classes.item_header_description_name}>Express, Handlebars</p>
          </div>
          <p className={classes.item_description_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <hr className={classes.under_line} />
        <div className={classes.item}>
          <header className={classes.item_header}>
            <h2 className={classes.item_header_text}>UI Interactions of the week</h2>
          </header>
          <div className={classes.item_header_description}>
            <p className={classes.item_header_description_date}>12 Feb 2019</p>
            <p className={classes.item_header_description_separator}>|</p>
            <p className={classes.item_header_description_name}>Express, Handlebars</p>
          </div>
          <p className={classes.item_description_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <hr className={classes.under_line} />
        <div className={classes.item}>
          <header className={classes.item_header}>
            <h2 className={classes.item_header_text}>UI Interactions of the week</h2>
          </header>
          <div className={classes.item_header_description}>
            <p className={classes.item_header_description_date}>12 Feb 2019</p>
            <p className={classes.item_header_description_separator}>|</p>
            <p className={classes.item_header_description_name}>Express, Handlebars</p>
          </div>
          <p className={classes.item_description_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <hr className={classes.under_line} />
      </div>
    </section>
  )
}

export default Blog
