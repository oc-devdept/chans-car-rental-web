import React, { Component } from "react"
import ContactDetail from "./ContactDetail"

function ContactInfo(){
	return(
		<div className="contact-info">
			{/* Need to figure out how to put newline in this text without dangerouslySetInnerHTML */}
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="address" 
				text="363 Sembawang Road
				Goodlink Park
				Singapore 758379"
			/>
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="phone number" 
				text="+65 6753 2536"
			/>
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="whatsapp" 
				text="+65 9772 5363"
			/>
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="email" 
				text="sales@chans.com.sg"
			/>
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="facebook" 
				text="facebook.com/Chans-Car-Rental"
			/>
			<ContactDetail 
				image="https://via.placeholder.com/25"
				alt="instagram" 
				text="chanscarrental"
			/>
		</div>
	)
}

export default ContactInfo