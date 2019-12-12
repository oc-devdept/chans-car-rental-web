import React from "react"
import ContactDetail from "./ContactDetail"

function ContactInfo(){
	const contactDetails = [
		{
			id: 0,
			icon: "fas fa-map-marker-alt",
			// need to figure out how to show newlines on html other than dangerouslySetInnerHTML
			text: `363 Sembawang Road
			Goodlink Park
			Singapore 758379`,
		},
		{
			id: 1,
			icon: "fas fa-phone",
			text: "+65 6753 2536",
			href: "tel: +65 6753 2536"
		},
		{
			id: 2,
			icon: "fab fa-whatsapp",
			text: "+65 9772 5363",
			href: "https://api.whatsapp.com/send?phone=6597725363"
		},
		{
			id: 3,
			icon: "far fa-envelope",
			text: "sales@chans.com.sg",
			href: "mailto: sales@chans.com.sg"
		},
		{
			id: 4,
			icon: "fab fa-facebook-f",
			text: "/Chans-Car-Rental",
			href: "#"
		},
		{
			id: 5,
			icon: "fab fa-instagram",
			text: "chanscarrental",
			href: "#"
		},
	]

	return(
		<div className="contact-info" style={{padding: "20px 0"}}>
			{contactDetails.map( item => (
				<ContactDetail 
					key={item.id}
					icon={item.icon}
					text={item.text}
					href={item.href}
				/>			
			))}
		</div>
	)
}

export default ContactInfo