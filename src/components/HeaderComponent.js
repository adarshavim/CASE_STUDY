import React from 'react'

function Header(props){
    return(
        <div className=" row-header navbar-dark">

            <h2>Analysis Tab-{props.tabNo}</h2>
        </div>
    )
}

export default Header