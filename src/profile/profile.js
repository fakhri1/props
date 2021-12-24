import React from 'react'
import proptypes from 'prop-types'
function profile(props) {
    
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h2>{props.profession}</h2>
            <div>{props.children}</div>
             <p>
                 <b>Bio</b>
                 <br/>
                 {props.Bio}
             </p>
            <button
            onClick={()=> props.handleName(`profile User: ${props.fullName}`)}>ClickME
            </button>






        </div>
    )
}

export default profile
