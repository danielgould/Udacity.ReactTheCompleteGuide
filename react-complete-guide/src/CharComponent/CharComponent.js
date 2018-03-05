import React from 'react'

const style = {
    display :"inline-block",
    padding:"16px",
    margin:"16px",
    border:"solid 1px black"
  }

const charComponent = (props) => {
 return (
     <div style={style} onClick={props.click}>{props.letter}</div>
 )
}

export default charComponent;