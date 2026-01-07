import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img className='footer-image' alt='logo' src={require('../../assets/vanshpic.jpeg')}/>
      </div>
      <div style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <a href='https://github.com/vanshjain137' className='social-link'>Github</a>
        <a href='https://www.linkedin.com/in/vansh-jain-b955a23a1' className='social-link'>Linkedin</a>
      </div>
    </div>
  )
}

export default Footer
