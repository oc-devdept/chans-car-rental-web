import React from "react";

function ContactDetail(props) {
  return (
    <div className="contact-detail container">
      <div className="row" style={{ marginBottom: 10 }}>
        <div
          className="icon"
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            height: 30,
            width: 30
          }}
        >
          <i
            className={props.icon}
            style={{ fontSize: 16, verticalAlign: "middle" }}
          />
        </div>
        <div className="contact-detail-text">
          <a href={true && props.href} target="_blank">
            <p>{props.text}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
