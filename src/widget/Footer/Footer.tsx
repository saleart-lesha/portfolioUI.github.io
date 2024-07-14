import classes from './Footer.module.css'
import facebook from '../../app/img/footer/fb.svg'
import instagram from '../../app/img/footer/insta.svg'
import twitter from '../../app/img/footer/Group.svg'
import linkedin from '../../app/img/footer/Linkedin.svg'

const Footer = () => {
  return (
    <footer className={classes.main_body}>
      <div className={classes.images_box}>
        <img className={classes.img} src={facebook} alt='' />
        <img className={classes.img} src={instagram} alt='' />
        <img className={classes.img} src={twitter} alt='' />
        <img className={classes.img} src={linkedin} alt='' />
      </div>
      <p className={classes.footer_text}>Copyright ©2020 All rights reserved</p>
    </footer>
  )
}

export default Footer
