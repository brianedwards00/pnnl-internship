import React from 'react';
import './App.css';

import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    const firstName = "Bob"
    const lastName = "Ziroll"

    const date = new Date()
    const hours = date.getHours()
    let timeofDay
    const styles = {
        fontSize: 30
    }

    if (hours < 12) {
        timeofDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17) {
        timeofDay = "afternoon"
        styles.color = "#2E0"
    } else {
        timeofDay = "night"
        styles.color = "#D90000"
    }



    return (
      //Starting here, it is JSX. Before it was JS
        //For MainContent, you can create an object instead
        <div>
            <Header />
            <h1 style ={styles}>Good {timeofDay}!</h1>
            <h1>Hello {firstName + " "+ lastName}!</h1>
            <MainContent
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone = "(212) 555-1234"
                email="mr.whiskaz@catnap.meow"/>
            <Footer />
         </div>
    )
}

export default App;
