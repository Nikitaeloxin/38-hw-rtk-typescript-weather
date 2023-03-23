import React, {useState} from 'react';
import Form from "./Form";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constants";

const Data = () => {

    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );
}

export default Data;