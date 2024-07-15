import classes from './WorkDetail.module.css'
import imgFirstBlock from './../../../app/img/worksDetail/Rectangle 4.svg'
import imgSecondBlock1 from './../../../app/img/worksDetail/Rectangle 5.svg'
import imgSecondBlock2 from './../../../app/img/worksDetail/Rectangle 6.svg'
const WorkDetail = () => {
  return (
    <section className={classes.main_body}>
      <div className={classes.container}>
        <div className={classes.firs_block}>
          <h1 className={classes.firs_block_header}>Designing Dashboards with usability in mind</h1>
          <div className={classes.firs_block_description}>
            <p className={classes.firs_block_description_date}>2020</p>
            <p className={classes.firs_block_description_name}>Dashboard, User Experience Design</p>
          </div>
          <p className={classes.firs_block_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <img className={classes.img} src={imgFirstBlock} alt='' />
        </div>
        <div className={classes.second_block}>
          <h1 className={classes.second_block_header}>Heading 1</h1>
          <h2 className={classes.second_block_description}>Heading 2</h2>
          <p className={classes.second_block_main_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <img className={`${classes.img} ${classes.img_margin}`} src={imgSecondBlock1} alt='' />
          <img className={classes.img} src={imgSecondBlock2} alt='' />
        </div>
      </div>
    </section>
  )
}

export default WorkDetail
