import React from "react";
import ReactDOM from "react-dom/client";

//Icon Import
import { IoIosArrowUp , IoIosArrowDown } from 'react-icons/io';

const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const render_date = () =>{
    date.setDate(1)

    const lastDayOfCurrentMonth = new Date( date.getFullYear() , date.getMonth() + 1 , 0).getDate()
    
    const lastDayOfPrevMonth = new Date( date.getFullYear() , date.getMonth() , 0).getDate()
    
    const firstDayIndex = date.getDay()

    const lastDayIndex = new Date( date.getFullYear() , date.getMonth() + 1 , 0).getDay()

    const nextDays = 7 - lastDayIndex - 1

    const current_year = date.getFullYear()
    const current_month = months[date.getMonth()]
    // console.log(current_month);

    let days = []
    
    for(let x = firstDayIndex; x > 0 ; x--){
        days.push(<span className="prev-date date-button">{lastDayOfPrevMonth - x + 1}</span>)
    }  //prev month dates

    for(let x = 1; x <= lastDayOfCurrentMonth; x++){
        if(x === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){
            days.push(<span className="today date-button">{x}</span>)
        } else {
            days.push(<span className="date-button">{x}</span>)
        }
    } //current month dates

    for(let x = 1; x <= nextDays; x++){
        days.push(<span className="next-date date-button">{x}</span>)
    }

    return({
        month:current_month,
        year:current_year,
        days:days
    })
}

const Calendar = () => {
    const { month , year , days} = render_date()    
    console.log(month , year);
    return(
    <>
        <div className="wrapper">
            <div className="month">
                <h2>{month} , {year}</h2>
                <div className="arrow-wrapper">
                    <div className="arrow prev">
                        <IoIosArrowUp/>
                    </div>
                    <div className="arrow next">
                        <IoIosArrowDown/>
                    </div>
                </div>
            </div>

            <div className="weekdays">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
            </div>

            <div className="days text-center">{days.map(day => {return day})}</div>
        </div>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Calendar/>)
