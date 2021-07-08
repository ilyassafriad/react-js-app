import React from 'react' ;
import './Layout.css' ;
import img1 from './images/img1.png' ;
import {FontAwesome} from 'react-icons/fa' ;
import {FaDollarSign} from 'react-icons/fa';



class Book1 extends React.Component{

    render(){
        return(
            <div className="book1_container">
                <h1 className="title_book1">Rich Dad Poor Dad</h1>
                <h2 className="creator_book1">For: Robert T.Kiyosaki</h2>
                <div className="script">
                Rich Dad Poor Dad is Robert's story of growing up with two dads -- 
                <p>his real father and the father of his best friend, his rich dad -- </p>
                <p>and the ways in which both men shaped his thoughts about money and investing. </p>
                <p>The book explodes the myth that you need to earn a high income to be rich and explains </p>
                <p>the difference between working for money and having your money work for you.</p>
                </div>
                <img className="image1" src={img1} />
                <button className="button_book1"><span>Buy Now 10<FaDollarSign/></span></button>
                <a href="/book2"><button className="next_book1"><span>Next Book</span></button></a>
            </div>
        )
    }
}


export default Book1 ;