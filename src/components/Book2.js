import React from 'react' ;
import './Layout.css' ;
import {FontAwesome} from 'react-icons/fa' ;
import {FaDollarSign} from 'react-icons/fa';
import img2 from './images/img2.png' ;


class Book2 extends React.Component{

    render(){
        return(
            <div className="book1_container">
                <h1 className="title_book1">Secrets of the Millionaire Mind</h1>
                <h2 className="creator_book1">For: T.Harv Eker</h2>
                <div className="script">
                Secrets of the Millionaire Mind reveals the missing <p>link between wanting success and achieving it!</p>

                <p>Have you ever wondered why some people seem to get rich easily,</p> 
                <p>while others are destined for a life of financial struggle?</p> <p>Is the difference found in their education,</p>
                <p>intelligence, skills, timing, work habits, contacts, luck,</p> <p>or their choice of jobs, businesses, or investments?</p>
                <p>The shocking answer is: None of the above!</p>
                </div>
                <img className="image1" src={img2} style={{width :'350px', height: '450px'}} />
                <button className="button_book1"><span>Buy Now 10<FaDollarSign/></span></button>
                <a href="/book3"><button className="next_book1"><span>Next Book</span></button></a>
            </div>
        )
    }
}



export default Book2 ;