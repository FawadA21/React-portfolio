import React, { Component } from 'react';

import Form from 'reat-bootstrap/Form';
import Button from 'react-bootstrap/Form';
//


function Form(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }
}

handleChange = (event) => {
    

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState ({
        [name]: value
    });
}
 
 handleSubmit = (event) => {
     event.preventDefault();

     this.setState({
         disabled: true
     });
 }


  return () => {
      return(
          <div>

              <content>

                  <Form>

                      <Form.Group>
                          <Form.Label htmlFor="Full Name">Full Name</Form.Label>
                          <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                          </Form.Group> 
                      
                         
                          <Form.Group>
                          <Form.Label htmlFor="email">Email</Form.Label>
                          <Form.Control id="email" name="email" type="text" value={this.state.name} onChange={this.handleChange}/>
                          </Form.Group> 

                          <Form.Group>
                          <Form.Label htmlFor="message">Message</Form.Label>
                          <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.name} onChange={this.handleChange}/>
                          </Form.Group> 



                 <button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>


                  Send
                 </button>

                 {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                 {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}


                  </Form>

            

              
              </content>
              
          </div>
      );
  }


export default Form;