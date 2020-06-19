import React from "react"

function MainContent(props) {
    return (
        <main>
            <img src={props.imgUrl} alt={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </main>
    )
}

export default MainContent