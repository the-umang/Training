import React, { Component } from 'react';


class AppContent extends Component {
   
    // this is just a funition
    btnHandler(){
        console.log("Button Clicked " + this);
        
    }

    constructor(){
        super();  
        console.log("Constructor Called!");
        this.btnHandler = this.btnHandler.bind(this);
    }
    render() { 
        return ( 
            <div>
                    <h3>This is a content area</h3>
                    <button onClick = {this.btnHandler}>Button 1</button>

            </div>

         );
    }
}
 
export default AppContent;