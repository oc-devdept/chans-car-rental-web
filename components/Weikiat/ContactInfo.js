import React from "react"
import ContactDetail from "./ContactDetail"

function ContactInfo(){
	return(
		<div className="contact-info">
			{/* Need to figure out how to put newline in this text without dangerouslySetInnerHTML */}
			<ContactDetail 
				icon="fas fa-map-marker-alt"
				text="363 Sembawang Road
				Goodlink Park
				Singapore 758379"
			/>
			<ContactDetail 
				icon="fas fa-phone"
				text="+65 6753 2536"
				href="tel: +65 6753 2536"
			/>
			<ContactDetail 
				icon="fab fa-whatsapp"
				text="+65 9772 5363"
				href="https://api.whatsapp.com/send?phone=6597725363"
			/>
			<ContactDetail 
				icon="far fa-envelope"
				text="sales@chans.com.sg"
				href="mailto: sales@chans.com.sg"
			/>
			<ContactDetail 
				icon="fab fa-facebook-f"
				text="/Chans-Car-Rental"
				href="#"
			/>
			<ContactDetail 
				icon="fab fa-instagram"
				text="chanscarrental"
				href="#"
			/>
		</div>
	)
}

export default ContactInfo