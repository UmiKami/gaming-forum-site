import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ForumThread = () => {
  return (
      <div className="bg-dark text-light tw-flex tw-justify-between tw-items-center py-2 mb-3 px-3 rounded">
          <div className="thread-headers tw-flex tw-flex-col tw-w-[85%]">
              <Link className="tw-text-xl tw-font-semibold tw-w-fit">
                  Example post
              </Link>
              <p className="tw-font-light tw-mask-gradient-180-60">
                  Example summary of the post, it shouldn't show all the text
                  here, that's why I am writing a long long line hahaha
              </p>
          </div>
          <div className="thread-actions tw-cursor-pointer">
              <FontAwesomeIcon icon={faEllipsis} />
          </div>
      </div>
  );
}

export default ForumThread