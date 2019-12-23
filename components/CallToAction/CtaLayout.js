import React from "react"

import Button from "react-bootstrap/Button"

function CtaLayout(props) {
    return(
        <div className="call-to-action text-center">
            <h2 className="py-3 text-white">{props.title}</h2>
            <Button 
                href={props.mainHref}
                className="mx-2"
            >
                <i className={props.mainBtnIcon + " mr-1"}></i>
                {props.mainBtnText}
            </Button>
            <Button 
                variant="outline-primary"
                href={props.secondaryHref}
                className="mx-2 border-primary"
            >
                <i className={props.secondaryBtnIcon + " mr-1"}></i>
                {props.secondaryBtnText}
            </Button>
        </div>
    )
}

export default CtaLayout