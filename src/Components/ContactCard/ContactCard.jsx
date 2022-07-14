import React from "react"
import './contact-card.css';

export const ContactCard = (props) => {

    return (
        <div className="contact-card">
            <img src={props.avatar}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="/images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="/images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}