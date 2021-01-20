import React from "react";
import "./scss/input.scss";
import PropTypes from 'prop-types'


const TextInput = ({ error, labelname, required, className, invalid, shouldValidate, touched, outerClassName, id, value, type, onChange, handleBlur, handleValidationError, handleOnSubmitValidationError }) => {
      const renderError = () => {
            if (error) {
                  return (
                        <div id="name-err" className="ta_err-text">
                              {error}
                        </div>
                  );
            }
            return;
      }

      const renderLabel = () => {
            let label = labelname;
            if (required) {
                  return (
                        <div>
                              <span className="labelText">{label}</span>
                              <span className="labelRequired"> (required)</span>
                        </div>
                  );
            }
            return label;
      }

      let validationError = handleValidationError;
      let onSubmitValidationError = handleOnSubmitValidationError;
      let inputClasses = [className];

      if (
            (invalid && shouldValidate && touched) ||
            onSubmitValidationError
      ) {
            inputClasses.push("ta-form--err");
            validationError = renderError();
      }

      return (
            <div
                  className={
                        outerClassName ? outerClassName : "container"
                  }
            >
                  <label htmlFor={id}>{renderLabel()}</label>
                  <input
                        id={id}
                        value={value}
                        type={type}
                        onChange={onChange}
                        className={
                              inputClasses
                                    ? inputClasses.join(" ")
                                    : inputClasses.join(" ") + "form-control"
                        }
                        onBlur={handleBlur}
                  //onBlur={onBlur}
                  />
                  {validationError}
                  {/* {onSubmitValidationError} */}
            </div>
      );
}





TextInput.propTypes = {
      error: PropTypes.string,
      labelname: PropTypes.string,
      required: PropTypes.string,
      handleValidationError: PropTypes.bool,
      handleOnSubmitValidationError: PropTypes.bool,
      className: PropTypes.string,
      invalid: PropTypes.bool,
      shouldValidate: PropTypes.bool,
      touched: PropTypes.bool,
      outerClassName: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
      type: PropTypes.string,
      onChange: PropTypes.func,
      handleBlur: PropTypes.func,
}

export default TextInput