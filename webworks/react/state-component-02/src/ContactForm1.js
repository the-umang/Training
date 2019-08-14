import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        name : "",
        email : "",
        phone : "",
        picture : ""
      }
   onTyping = (event) =>{
       this.setState({[event.target.name]:event.target.value})
   }

   submit = (event)=>{
       alert('Name '+this.state.name + ' Email is  '+ this.state.email + ' Phone number ' + this.state.phone + ' picture ' + this.state.picture);
   }
    render() { 
        return ( 

                <div className="container">
            
                    <h3>Add New Contact</h3>
                    {/* //http://somesite.com/contact */}
                    <form className="form" onSubmit={this.submit}>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Name :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" name="name" value={this.state.name} onChange={this.onTyping} ref="name"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Email Address :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" name="email" value={this.state.email} onChange={this.onTyping} ref="email"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Phone Number :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" name="phone" value={this.state.phone} onChange={this.onTyping} ref="phone"/>
                            </div>
                        
                        </div>

                        <div className="form-group row">
                            <label className="control-label col-md-4">
                                    Picture :
                            </label>
                            <div className = "col-md-8">
                                    <input type = "text" className ="form-control" name="picture" value={this.state.picture} onChange={this.onTyping} ref="picture"/>
                            </div>
                        
                        </div>

                            <button className="btn btn-danger">Save Kar Le</button>
                    </form>
                 </div>

         );
    }
}
 
export default ContactForm;