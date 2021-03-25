import React, { Component, Fragment } from 'react'
import {toast} from 'react-toastify';
import firebase from '../../../firebase';
import {withRouter} from 'react-router-dom';

class PasswordReset extends Component {
    state = { 
        email:"",
     }
  handleChange= e=>{
      this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=async e=>{
      let{email}=this.state
      try {
          e.preventDefault()
          await firebase.auth().sendPasswordResetEmail(email);
           toast.success(`reset password is sent to ${email} please rest password `)
           this.props.history.push("./signIn")
      } catch (err) {
          toast.error(err.message)
          this.props.history.push("/PasswordReset")
      }
  }

    render() { 
        let {email} =this.state;
        return (
        <Fragment>
<section id="authSection" className=" col-md-4 mx-auto my-2 card">
    <article className="card-body">
        <h4>
Password Reset
        </h4>
        <p>
            Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.
        </p>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <lable htmlfor="email">Email address por username</lable>
                <input type="email" name="email" id="email" value={email} name="email" onChange={this.handleChange} className="form-control" placeholder="Enter your Email"/>
            </div>
            
            
            <div className="form-group">

                <button className="btn btn-success btn-block my-3">Reset</button>
            </div>
            <div className="form-group">
                <a href="/signin">login</a>
            </div>
        </form>
    </article>
</section>
        </Fragment>
          );
    }
}
 
export default PasswordReset;