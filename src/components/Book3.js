import React from 'react' ;
import img3 from './images/img3.PNG';
import {FontAwesome} from 'react-icons/fa' ;
import {FaDollarSign} from 'react-icons/fa' ;
import './Layout.css' ;


class Book3 extends React.Component{

    render(){
        return(
            <div className="book1_container">
                <h1 className="title_book1">Awaken the Giant Within</h1>
                <h2 className="creator_book1">For: Tony Robbins</h2>
                <div className="script">
                    Wake up and take control of your life! From the bestselling author of Inner Strength, 
                    <p>Unlimited Power, and MONEY Master the Game, Anthony Robbins, </p>
                    <p>the nation's leader in the science of peak performance, </p>
                    <p>shows you his most effective strategies and techniques for mastering your emotions,</p> 
                    <p>your body, your relationships, your finances, and your life.</p>
                </div>
                <img className="image1" src={img3} style={{width :'330px', height: '430px'}} />
                <button className="button_book1"><span>Buy Now 10<FaDollarSign/></span></button>
                <a href="/book4"><button className="next_book1"><span>Next Book</span></button></a>
            </div>
        )
    }
}


export default Book3;