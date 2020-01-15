import React from "react"
import CtaLayout from "Components/CallToAction/CtaLayout"

function CtaIndex() {
    return(
        <CtaLayout 
            title="Contact us for your car rental needs today"
            mainBtnIcon="fab fa-wpforms"
            mainBtnText="Enquire"
            mainHref="/contact-us"
            secondaryBtnIcon="fab fa-whatsapp"
            secondaryBtnText="+65 9772 5363"
            secondaryHref="https://api.whatsapp.com/send?phone=6597725363"
        />
    )
}

export default CtaIndex