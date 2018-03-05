import React from 'react'

const validation = (props) => {
    return(
        <p>{props.length === null ? "" : props.minLength >= props.length ? "to short" : "text long enough"}</p>
    )
}

export default validation