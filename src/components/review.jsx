import React, { useState } from 'react'

function Review({ review  }) {
  const { author, content } = review
  const [show, setShow] = useState(false)

  const toggleReview = () => {
    setShow(prevShow => !prevShow)
  }

  const style= {
    color: "#F6EBA2",
    cursor: "pointer"
  }
  return (
    <div style={{margin: "1em"}}>
      <h4>{author} says</h4>
      <p>{show ? content : content.substr(0, 250)}   
        <span aria-label='toggle reading more or less of review' style={style}  onClick={toggleReview}>
          {show ? "   ...read less" : "   ...read more"}
        </span>
      </p>
    </div>
  )
}

export default Review