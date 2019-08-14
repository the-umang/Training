import React, { Component , Fragment } from 'react';

class AppHeader extends Component{
    render(){
        console.log(this);

        console.log("-------------");
        // console.log(this.props);
        
        
        //keep our data in <div> and return or in react js we have fragment
        return (
            <Fragment>
                <h1> This is our Header in {this.props.company}</h1>
                <h1> This is was created by {this.props.createdBy}</h1>
                <hr/>
            </Fragment>


        );
    }
}

export default AppHeader;