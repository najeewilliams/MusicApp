import React, { Component } from 'react';

import {ButtonConfig} from '../CssFiles_/ButtonConfig.module.css';

class login extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <button class={ButtonConfig.button_basic}>enter here</button>
                this is the login
            </div>
         );
    }
}
 
export default login;