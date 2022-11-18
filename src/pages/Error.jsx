import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../images/404.jpg'


const Error = () => {
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
          <img className='errorPic' src={pic} alt="404" />
        </div>
      </div>
      <div className="container content">
        <p>Page not found...</p>
        <Link to='/' className='btn btn-primary'>Go Back to Homepage</Link>
      </div>
    </main>
  )
}

export default Error