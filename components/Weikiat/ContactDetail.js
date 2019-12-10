import React, { Component } from "react"


function ContactDetail(props){
    return(
        <div className="contact-detail container">
            <div className="row">
                <div className="contact-detail-image">
                    {/* using require() in img src throws unknown error */}
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="contact-detail-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail