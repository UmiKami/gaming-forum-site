import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
      <div>
          Page not found! <Link className='link' to={"/"}>Go back to home</Link>
      </div>
  );
}

export default PageNotFound