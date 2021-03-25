import React, { Component, Fragment } from 'react'
import "./Auth.css"
import firebase from '../../../firebase';
import {toast} from 'react-toastify';
import md5 from 'md5'
class Signup extends Component {
    state = { 
        email:"",
        confirmemail:"",
        password:"",
        profile:"",
        dob:"",
        gender:"",

    } ;
    handleChange =(e)=> {
       
        this.setState({[e.target.name]:e.target.value});
        
    };
   
     handleSubmit = async(e)=> {
          e.preventDefault()
          try {
                      let {email,confirmemail,password,profile,dob,gender}=this.state;

                    console.log({email,confirmemail,password,profile,dob,gender})
                   
                    let userData = await firebase.auth().createUserWithEmailAndPassword(email,password);
                    userData.user.sendEmailVerification();
                    let message = `verification mail has been sent to ${email} please verify ...it`;
        
                    toast.success(message)
                    console.log(userData)
                    await userData.user.updateProfile({
                        displayName:profile, 
                         photoURL:`http://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
                    });
                    await firebase.database().ref()("user"+userData.user.uid).set({
                        email:userData.user.email,
                        photoURL:userData.user.photoURL,
                        profile:userData.user.displayName,
                        date:new Date().toLocaleDateString(),

                    });
              
          } catch (err) {
              console.log(err)
              toast.error(err.message);
          }
     };

    render() { 
        let {email,confirmemail,password,profile,dob,gender}=this.state;
        return ( 
            <Fragment>
                <section className="authSection  col-md-4 mx-auto my-2 card">

                   <article className="card-body">
                     <h4>
                         sign up with your email adress
                     </h4>
                     <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <lable>what's your email</lable>
                       <input type="text" className ="form-control" placeholder="enter your emails" name="email"
                       value={email}
                       onChange={this.handleChange}


                       />
                    </div>
                      {/* ends mail */}
                    <div className="form-group">
                        <lable>confirm your mail</lable>
                       <input type="email" className ="form-control" placeholder="confirm your email" name="confirmemail"
                       value={confirmemail}  onChange={this.handleChange}
/>
                    </div>

                    {/* ends conform mail */}


                     <div className="form-group">
                        <lable>enter your pass word</lable>
                       <input type="password" className ="form-control" placeholder="confirm your password" name="password" value={password}  onChange={this.handleChange}
/>
                    </div>
                    {/* ends password */}

                   <div className="form-group">
                        <lable>
                      What should we call you?  </lable>
                       <input type="password" className ="form-control" placeholder="enter a profile name" name="profile" value={profile}  onChange={this.handleChange}
/>
                    </div>
                    {/* ends profile */}
                    
<div className="form-group">
                        <lable>What's your date of birth?</lable>
                       <input type="datetime-local" className ="form-control" placeholder="confirm your password" name="dob" value={dob}  onChange={this.handleChange}
/>
                    </div>


                    {/* ends dob */}

                    <div className="form-group "name="gender" value="gender">
                        <label>whats your gender</label>
                        <input type="radio" name="gender" value="male" onChange={this.handleChange}
 />
                        Male
                        <input type="radio" name="gender"value="Female"  onChange={this.handleChange} 
/>
                        Female
                        <input type="radio" name="gender"value="Non-binary"  onChange={this.handleChange}
/>
                        Non-binary
                    </div>

                    {/* ends gender */}
                    <div className="form-group">
                        <input type="checkbox" name="checkdata"/>
               Share my registration data with Spotify's content providers for marketing purposes.
                    </div>
                    <p>
                        By clicking on Sign up, you agree to Spotify's
                        <a href="/">
                            Terms and Conditions of Use.
                        </a>
                    </p>
                    <p>
                        To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's
                        <a href="">
                            Privacy Policy.
                        </a>
                    </p>

                    <div className="form-group">
                        <button className="btn btn-success btn-block">login</button>
                    </div>
                     </form>
                   </article>
                </section>
            </Fragment>
         );
    }
}
 
export default Signup;