import classes from './FeaturedWorks.module.css'
import imgDesigning from './../../../app/img/featuredWorks/Rectangle 30.svg'
import imgVibrant from './../../../app/img/featuredWorks/Rectangle 32.svg'
import img36Days from './../../../app/img/featuredWorks/Rectangle 34.svg'
import { Link } from 'react-router-dom'

const FeaturedWorks = () => {
  return (
    <section className={classes.main_body}>
      <header className={classes.header}>
        <h1 className={classes.header_text}>Featured works</h1>
      </header>
      <div className={classes.box}>
        <article className={classes.box_item}>
          <img className={classes.img} src={imgDesigning} alt='' />
          <div className={classes.text_content}>
            <header className={classes.content_header}>
              <h2>
                <Link className={classes.content_header_text} to='/works/1'>
                  Designing Dashboards
                </Link>
              </h2>
            </header>
            <div className={classes.text_content_description}>
              <p className={classes.text_content_description_date}>2020</p>
              <p className={classes.text_content_description_name}>Dashboard</p>
            </div>
            <p className={classes.text_content_main_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </article>
        <hr className={classes.under_line} />
        <article className={classes.box_item}>
          <img className={classes.img} src={imgVibrant} alt='' />
          <div className={classes.text_content}>
            <header className={classes.content_header}>
              <h2>
                <Link className={classes.content_header_text} to='/works/1'>
                  Vibrant Portraits of 2020
                </Link>
              </h2>
            </header>
            <div className={classes.text_content_description}>
              <p className={classes.text_content_description_date}>2018</p>
              <p className={classes.text_content_description_name}>Illustration</p>
            </div>
            <p className={classes.text_content_main_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </article>
        <hr className={classes.under_line} />
        <article className={classes.box_item}>
          <img className={classes.img} src={img36Days} alt='' />
          <div className={classes.text_content}>
            <header className={classes.content_header}>
              <h2>
                <Link className={classes.content_header_text} to='/works/1'>
                  36 Days of Malayalam type
                </Link>
              </h2>
            </header>
            <div className={classes.text_content_description}>
              <p className={classes.text_content_description_date}>2018</p>
              <p className={classes.text_content_description_name}>Typography</p>
            </div>
            <p className={classes.text_content_main_text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
        </article>
        <hr className={classes.under_line} />
      </div>
    </section>
  )
}

export default FeaturedWorks
