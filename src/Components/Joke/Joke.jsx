import React from "react";

export const Joke = (props) => {

    return (
        <div>
            
            { props.setup && <h3>Setup: {props.setup}</h3>}
            
            <div style={{ display: "flex" }}>
                <small 
                style={{ display: props.upvotes ? "block": "none", color: 'green', fontWeight: 700 }}>
                    Upvotes: {props.upvotes}
                </small>
                
                <small
                style={{ display: props.downvotes ? "block": "none", marginLeft: '10px', color: 'red', fontWeight: 700 }}>
                    Downvotes: {props.downvotes}
                </small>
            </div>
            
            <p>Punchline: {props.punchline}</p>
        </div>
    ); 
}