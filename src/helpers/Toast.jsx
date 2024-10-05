import React, { useState, useEffect } from 'react';

const Toast = ({type, message, status}) => {
  const [toastStatus, setToastStatus] = useState('');
  
  useEffect(() => {
    if(status) {
      setToastStatus('active')
    }
    setInterval(() => {
      setToastStatus('')
    }, 3000)
  }, [status])
  return (
    <div className='toast-container' data-scroll data-scroll-sticky data-scroll-target='#scroll-container'>
      <div className={`toast toast-${toastStatus}`} >
        <div className={`toast-wrap toast-${type}`}>
          <h4 className='toast-message'>
            {message}
          </h4>
        </div>
        
          
      </div>
    </div>
  )
}

export default Toast;