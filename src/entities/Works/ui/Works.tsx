import classes from './Works.module.css'
import imgDesigning from './../../../app/img/featuredWorks/Rectangle 30.svg'
import imgVibrant from './../../../app/img/featuredWorks/Rectangle 32.svg'
import img36Days from './../../../app/img/featuredWorks/Rectangle 34.svg'
import imgComponents from './../../../app/img/featuredWorks/Rectangle 40.svg'
import { Link } from 'react-router-dom'

const Works = () => {
  return (
    <section>
      <div className={classes.main_body}>
        <div className={classes.container}>
          <h1 className={classes.header}>Work</h1>
          <div className={classes.box_items}>
            <div className={classes.item}>
              <img className={classes.img} src={imgDesigning} />
              <div className={classes.item_content}>
                <p className={classes.item_content_header}>
                  <Link className={classes.item_content_header_text} to='/works/1'>
                    Designing Dashboards
                  </Link>
                </p>
                <div className={classes.item_content_description}>
                  <p className={classes.item_content_description_date}>2020</p>
                  <p className={classes.item_content_description_name}>Dashboard</p>
                </div>
                <p className={classes.item_content_main_text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
              </div>
            </div>
            <hr className={classes.under_line} />
            <div className={classes.item}>
              <img className={classes.img} src={imgVibrant} />
              <div className={classes.item_content}>
                <p className={classes.item_content_header}>
                  <Link className={classes.item_content_header_text} to='/works/1'>
                    Vibrant Portraits of 2020
                  </Link>
                </p>
                <div className={classes.item_content_description}>
                  <p className={classes.item_content_description_date}>2018</p>
                  <p className={classes.item_content_description_name}>Illustration</p>
                </div>
                <p className={classes.item_content_main_text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
              </div>
            </div>
            <hr className={classes.under_line} />
            <div className={classes.item}>
              <img className={classes.img} src={img36Days} />
              <div className={classes.item_content}>
                <p className={classes.item_content_header}>
                  <Link className={classes.item_content_header_text} to='/works/1'>
                    36 Days of Malayalam type
                  </Link>
                </p>
                <div className={classes.item_content_description}>
                  <p className={classes.item_content_description_date}>2018</p>
                  <p className={classes.item_content_description_name}>Typography</p>
                </div>
                <p className={classes.item_content_main_text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
              </div>
            </div>
            <hr className={classes.under_line} />
            <div className={classes.item}>
              <img className={classes.img} src={imgComponents} />
              <div className={classes.item_content}>
                <p className={classes.item_content_header}>
                  <Link className={classes.item_content_header_text} to='/works/1'>
                    Components
                  </Link>
                </p>
                <div className={classes.item_content_description}>
                  <p className={classes.item_content_description_date}>2018</p>
                  <p className={classes.item_content_description_name}>Components, Design</p>
                </div>
                <p className={classes.item_content_main_text}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </p>
              </div>
            </div>
            <hr className={classes.under_line} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
