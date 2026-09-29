import React from 'react'

const FooterLengthLimit = ({noteDescription}) => {
  return (
    <div>
        <p><span>{noteDescription.length}</span>/<span>200</span> characters</p>
    </div>
  )
}

export default FooterLengthLimit