import React from "react"

import Button from "react-bootstrap/Button"

function CtaLayout(props) {
  return(
    <div className="call-to-action text-center">
      <h2 className="py-3 text-white">{props.title}</h2>
      <Button
        variant="secondary" 
        href={props.mainHref}
        className="mx-3"
        style={{
          fontSize: 14
        }}
      >
        <i className={`${props.mainBtnIcon} mr-1`} ></i>
        {props.mainBtnText}
      </Button>
      <Button 
        variant="outline-secondary"
        href={props.secondaryHref}
        className="mx-3"
        style={{
          fontSize: 14
        }}
      >
        <i className={`${props.secondaryBtnIcon} mr-1`}></i>
        {props.secondaryBtnText}
      </Button>
    </div>
  )
}

export default CtaLayout