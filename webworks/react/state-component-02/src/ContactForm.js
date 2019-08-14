import React, { Component } from 'react';

class ContactForm extends Component {
    // onclick onsubmit are being passed
   addNewContact = (event)=>{
       console.log("Adding new Contact...");
       const name = this.refs.name.value;
       const email = this.refs.email.value;
       const phone = this.refs.phone.value;
       const picture = this.refs.picture.value;
       
       const contact = {name,email,phone,picture};
       console.log(contact);

       this.refs.name.value = "";
       this.refs.email.value = "";
       this.refs.phone.value = "";
       this.refs.picture.value = "";


       event.preventDefault();
   }
    render() { 
        return ( 

                <div className="container">
            
                    <h3>Add New Contact</h3>
                    {/* //http://somesite.com/contact */}
                    <form className="form" onSubmit={this.addNewContact}>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Name :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" ref="name"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Email Address :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" ref="email"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Phone Number :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" ref="phone"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Picture :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" ref="picture"/>
                            </div>
                        
                        </div>

                            <button className="btn btn-danger">Save Kar Le</button>
                    </form>
                 </div>

         );
    }
}
 
export default ContactForm;