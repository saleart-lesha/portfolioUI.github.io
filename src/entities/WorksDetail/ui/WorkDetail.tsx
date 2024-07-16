import classes from './WorkDetail.module.css'
import imgFirstBlock from './../../../app/img/worksDetail/Rectangle 4.svg'
import imgSecondBlock1 from './../../../app/img/worksDetail/Rectangle 5.svg'
import imgSecondBlock2 from './../../../app/img/worksDetail/Rectangle 6.svg'
const WorkDetail = () => {
  return (
    <section className={classes.main_body}>
      <div className={classes.container}>
        <article className={classes.firs_block}>
          <header className={classes.firs_block_header}>
            <h1 className={classes.firs_block_header_text}>
              Designing Dashboards with usability in mind
            </h1>
          </header>
          <div className={classes.firs_block_description}>
            <p className={classes.firs_block_description_date}>2020</p>
            <p className={classes.firs_block_description_name}>Dashboard, User Experience Design</p>
          </div>
          <p className={classes.firs_block_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <img className={classes.img} src={imgFirstBlock} alt='' />
        </article>
        <article className={classes.second_block}>
          <header className={classes.second_block_header}>
            <h1 className={classes.second_block_header_text}>Heading 1</h1>
            <h2 className={classes.second_block_description_text}>Heading 2</h2>
          </header>
          <p className={classes.second_block_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <img className={`${classes.img} ${classes.img_margin}`} src={imgSecondBlock1} alt='' />
          <img className={classes.img} src={imgSecondBlock2} alt='' />
        </article>
      </div>
    </section>
  )
}

export default WorkDetail
