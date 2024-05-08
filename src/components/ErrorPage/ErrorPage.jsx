import React from 'react'
import "./ErrorPage.scss"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>404 Page not found...!</h1>
      <h3>Try <Link to="/dashboard">Home</Link></h3>
    </div>
  )
}

export default ErrorPage