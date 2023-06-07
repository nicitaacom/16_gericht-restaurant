import './footer.css'

export function Footer () {
return (
<div className="footer">
 
  
<div className="footer-bottom footerTop">
<p className="subTitle">2021 Gericht. All Rights reserved.</p>
</div>

 <div className="footer-top">
  

<div className="footer-top_info">
<h1 className="footer-title">Contact us</h1>
<p className="footer-subTitle">9 W 53rd St, New York, NY 10019, USA</p>
<ul className='footer-subTitle'>
  <li><a href="tel:+1 212-344-1230">+1 212-344-1230</a></li>
  <li><a href="tel:+1 212-555-1230">+1 212-555-1230</a></li>
</ul>
</div>

<div className="footer-top_center">
  <h1 className="footer-logo-text">Gericht</h1>

  <p className='footer-description'>"The best way to find yourself is to lose yourself in the service of others."</p>

  <svg className='spoon-svg mb-[0.8rem]'>
  <use xlinkHref='./sprite.svg#spoon'/>
  </svg>

 <div className='socials'>
 <svg className='social-svg'>
  <use xlinkHref='./sprite.svg#facebook'/>
  </svg>

  <svg className='social-svg'>
  <use xlinkHref='./sprite.svg#twitter'/>
  </svg>

  <svg className='social-svg'>
  <use xlinkHref='./sprite.svg#instagram'/>
  </svg>

 </div>

</div>

  <div className="footer-top_info">
<h1 className="footer-title">Working Hours</h1>
  <p className="footer-subTitle">Monday-Friday<br/>
    08:00 am - 12:00 am
  </p>
  <p className="footer-subTitle">Saturday-Sunday<br/>
    07:00 am - 11:00 am
  </p>
  </div>

 </div>



<div className="footer-bottom">
<p className="subTitle">2021 Gericht. All Rights reserved.</p>
</div>

</div>
)
}