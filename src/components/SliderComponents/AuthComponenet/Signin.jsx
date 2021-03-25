import React, { Component, Fragment } from 'react'
import {toast} from 'react-toastify';
import firebase from '../../../firebase';
import {withRouter, Link} from 'react-router-dom';

class SignIn extends Component {
    state = { 
        email:"",
        password:""
     }
  handleChange= e=>{
      this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=async e=>{
      let {email ,password} =this.state;
      let {history,match,location}=this.props;
      e.preventDefault();
      try {
          var userData= await firebase.auth().signInWithEmailAndPassword(email,password);
          if(userData.user.emailVerified === true){
              toast.success(`successfully ${email} is verified`);
              history.push('/');
          }
          else{
              toast.error(`${email} is not  verified`);
              history.push('/signIn');
          }
      } catch (err) {
          toast.error(err.message)
      }
  }

    render() { 
        let {email,password} =this.state;
        return (
        <Fragment>
<section id="authSection" className=" col-md-4 mx-auto my-2 card">
    <article className="card-body">
        <h4>
   To continue, login into spotify
        </h4>
        <p style={{
            padding:"10px",
            width:"100%",
            border:"1px solid #111",
            borderRadius:"20px",
            textAlign:"center",
            margin:"10px auto"
        }}>
            <Link to="/PhoneAuth" style={{textDecoration:"none",color:"#555"}}>
                to continue with phonenumber
            </Link>
        </p>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <lable htmlfor="email">email</lable>
                <input type="email" name="email" id="email" value={email} name="email" onChange={this.handleChange} className="form-control" placeholder="Enter your Email"/>
            </div>
            <div className="form-group">
                <lable htmlfor="password">Password</lable>
                <input type="password" name="password" id= "password" placeholder="Password" value={password} name="password"onChange={this.handleChange} className="form-control"/>
            </div>
            <p>
                <Link to="/PasswordReset">forgot password</Link>
            </p>

            <div className="form-group">
             &nbsp;   <input type="checkbox" name="" id=""/>&nbsp;&nbsp;Remember me
             <br/>
                <button className="btn btn-success btn-block my-3">login</button>
            </div>
        </form>
    </article>
</section>
        </Fragment>
          );
    }
}
 
export default withRouter(SignIn);