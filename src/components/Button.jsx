import React, {useState} from "react";

const Button = (props) => {
    
    return (
        <div>
            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="button"
                aria-pressed="false"
                autocomplete="off"
                onClick={props.operation}
            >
               {props.title}
            </button>
        </div>
    );
}
export default Button;