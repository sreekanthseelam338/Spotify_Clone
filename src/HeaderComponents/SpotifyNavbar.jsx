import React, { Component, Fragment } from "react";
import SpotifyLogo from "./LogoComponent/SpotifyLogo";
import firebase from "../firebase"
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./SpotifyNavbar.css";
class SpotifyNavbar extends Component {
  signOut = _ => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("successfully logged out from this app");
        this.props.history.push("/signin");
      })
      .catch(err => toast.error(err.message));
  };

  render() {
      let{displayName,photoURL}=this.props.user;
    let IsAnonymousUser = () => (
      <Fragment>
        <li>
          <Link to="/signup"> Signup</Link>
        </li>
        <li>
          <Link to="/signin"> Login</Link>
        </li>
      </Fragment>
    );
    let IsAuthenticatedUser = () => (
        <Fragment>
         <li>
             <a href="/">{displayName}</a>
        
         </li>
         <li>
             <a href="/"><img src={photoURL} alt={displayName}/></a>
        
         </li>
        <li>
            <a onClick={this.signOut}>logout</a>
        </li>
      <li>
        <button className="btn btn-primary" onClick={this.signOut}>
          Logout
        </button>
      </li>
      </Fragment>
    );

    return (
      <Fragment>
        <section id="spotifyNavbar-Block">
          <article>
            <div className="logoBlock">
              <Link to="/">
                <SpotifyLogo />
              </Link>
            </div>
            <div className="menuBlock">
              <Fragment>
                <nav>
                  <ul>
                    <li>
                      <Link to="/"> premium</Link>
                    </li>
                    <li>
                      <Link to="/"> Support</Link>
                    </li>
                    <li>
                      <Link to="/"> Download</Link>
                    </li>
                    {this.props.user.emailVerified === true ||
                    this.props.user.isAnonymous === false ? (
                      <IsAuthenticatedUser />
                    ) : (
                      <IsAnonymousUser />
                    )}
                  </ul>
                </nav>
              </Fragment>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(SpotifyNavbar);