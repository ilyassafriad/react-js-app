import React from 'react';
import './Layout.css' ;
import myimg from './images/my_image.jpg' ;
import {FontAwesome} from 'react-icons/fa';
import {FaCommentMedical} from 'react-icons/fa' ;
import {FaPhoneAlt} from 'react-icons/fa' ;
import {FiMail} from 'react-icons/fi' ;
import {GoLocation} from 'react-icons/go' ;


class Contact extends React.Component{

    handleClick=()=>{
        alert("your message has been sending thank you");
    }
    render(){
        return(
            <div className="container_contact">
                <div className="inputs">
                    <h1 className="contact_title">Contact Use</h1>
                    <input type="text" className="name" placeholder="enter your name" />
                    <p><input type="text" className="email" placeholder="enter your email"/></p>
                    <p><textarea className="message" placeholder="enter your message" /></p>
                    <a href="mailto:ilyass.techno.afriad@gmail.com"><button onClick={this.handleClick}  className="contact_button"><span>Submit</span>  <FaCommentMedical/></button></a>
                </div>
                <div className="about">
                    <h1 className="about_title">About me</h1>
                    <div className="tooltip_container">
                        <img src={myimg} className="my_img" style={{width:'100px', height:'100px', borderRadius:'50%'}} />
                        <div className="tooltip">hello im Ilyass Afriad and im a front-end developer and a freelancer</div>
                    </div>

                    <ul className="outils">
                        <li><FaPhoneAlt/> +212 649880469</li>
                        <p><li className="top"><FiMail/> ilyass.2006.afriad.com@gmail.com</li></p>
                        <p><li className="top"><GoLocation/> Morocco Agadir-Souss Massa</li></p>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Contact ;