import React from "react"

import Button from "react-bootstrap/Button"

import "../../assets/styles/call-to-action.css"

function CtaLayout(props) {
  return(
    <div className="call-to-action">
      <h2>{props.title}</h2>
      <Button 
        href={props.mainHref}
      >
        <i className={props.mainBtnIcon}></i>
        {props.mainBtnText}
      </Button>
      <Button 
        variant="outline-primary"
        href={props.secondaryHref}
      >
        <i className={props.secondaryBtnIcon}></i>
        {props.secondaryBtnText}
      </Button>
    </div>
  )
}

export default CtaLayout