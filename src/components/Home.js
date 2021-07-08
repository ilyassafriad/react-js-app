import React from 'react';
import './Layout.css' ;


class Home extends React.Component{

    render(){
        return(
            <div className="home_container">
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
                <h1 id="title1" className="title">Welcome To Our Website</h1>
                <h3 id="name">FreeBusinessBooks</h3>
                <h1 id="title2" className="title">choose one of our books and get it</h1>
                <a href="/book1"><button className="start" style={{verticalAlign: 'middle'}}><span>Get Started</span> </button></a>
            </div>
        )
    }
}



export default Home ;