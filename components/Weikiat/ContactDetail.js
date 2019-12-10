import React, { Component } from "react"


function ContactDetail(props){
    return(
        <div class="contact-detail container">
            <div class="row">
                <div class="contact-detail-image">
                    {/* using require() in img src throws unknown error */}
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div class="contact-detail-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail