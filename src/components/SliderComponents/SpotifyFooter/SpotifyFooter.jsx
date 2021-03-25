import React, { Component,Fragment } from 'react'
import SpotifyLogo from '../../../HeaderComponents/LogoComponent/SpotifyLogo';
import "./SpotifyFooter.css";

const SpotifyFooter = () => {
    return (
        <Fragment>
           <section id ="FooterBlock">
                <article>
                    <div>
                        logo
                        </div>
                    <div>
                        <ul>
                            <li><a href="">company</a> </li>
                            <li><a href="">communities</a> </li>
                            <li><a href="">useful links</a> </li>
                        </ul>
                    </div>
                    <div>
                        hyper links
                    </div>

        
                </article>
               </section> 
        </Fragment>
    )
}

export default SpotifyFooter;
