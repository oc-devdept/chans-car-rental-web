import React from "react"
import CtaLayout from "Components/CallToAction/CtaLayout"

function CtaCarlist() {
    return(
        <CtaLayout 
            title="Rent from us today"
            mainBtnIcon="fab fa-wpforms"
            mainBtnText="Enquire"
            mainHref="/contact-us"
            secondaryBtnIcon="far fa-hand-pointer"
            secondaryBtnText="Rent a car now"
            secondaryHref="/"
        />
    )
}

export default CtaCarlist