import React from "react";
import "./Button.css"
import { Link } from 'react-router-dom';

function Button__color(props) {
    return (
        <React.Fragment>
            <div className="main__button">
                <div className="button">
                    <Link to={props.proVisit} className='button__btn'>{props.btnName}</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

function Button__white(props) {
    return (
        <React.Fragment>
            <div className="button__white main__button">
                <Link to= { props.proVisit } className="button__btn-white"> {props.btnNameWhite} </Link>
            </div>
        </React.Fragment>
    )
}


export {
    Button__color,
    Button__white,
}


// <div className="button">
// <Link to= {props.proVisit} className="button__btn-white">{props.btnNameWhite}</Link>
// </div>
//  {/* <button className="button__btn">{props.btnName}</button> */}