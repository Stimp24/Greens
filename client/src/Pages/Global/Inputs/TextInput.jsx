import React, { Component } from "react";
import PropTypes from "prop-types";

function TextInput (props){
  const renderError=()=> {
    if (props.error) {
      return (
        <div id="name-err" className="err-text" aria-live="asseritive">
          {props.error}
        </div>
      );
    }
    //else
    return;
  }

 const renderLabel=()=> {
    let label = props.labelName;
    if (props.required) {
      label += "*";
    }
    return label;
  }

    return (
      <div className="container">
        <label htmlFor={props.id}>{renderLabel()}</label>
        <input
          id={props.id}
          value={props.value ? props.value : ""}
          type={props.type}
          onChange={props.onChange}
          className="form-control"
          onBlur={props.handleBlur}
        />
        {renderError()}
      </div>
    );

}

export default TextInput; 