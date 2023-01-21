import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const ForumThread = () => {
  return (
    <div className='bg-dark text-light'>
        <div className="thread-headers tw-flex tw-flex-column">
            <h5>Example post</h5>
            <h6>Example summary of the post, it shouldn't show all the text here, that's why I am writing a long long line hahaha</h6>
        </div>
        <div className="thread-actions">
            <FontAwesomeIcon icon={faEllipsis}/>
        </div>
    </div>
  )
}

export default ForumThread