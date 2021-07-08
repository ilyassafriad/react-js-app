import React from 'react' ;
import img4 from './images/img4.png' ;
import {FontAwesome} from 'react-icons/fa' ;
import {FaDollarSign} from 'react-icons/fa' ;
import './Layout.css' ;



class Book4 extends React.Component{


    render(){
        return(
            <div className="book1_container">
                <h1 className="title_book1">The Richest Man in Babylon</h1>
                <h2 className="creator_book1">For: George Clason</h2>
                <div className="script">
                "As a young man, I came across George Samuel Clason's classic book The Richest Man in Babylon, 
                <p>which offered commonsense financial advice told through ancient parables. I recommend it to everyone."</p> 
                <p>--Tony Robbins, Money: Master the Game</p>
                </div>
                <img className="image1" src={img4} style={{width :'350px', height: '450px'}} />
                <button className="button_book1"><span>Buy Now 10<FaDollarSign/></span></button>
                <a href="/contact"><button className="next_book1"><span>Next Page</span></button></a>
            </div>
        )
    }
}



export default Book4 ;