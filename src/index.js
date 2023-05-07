import React, { useEffect, useState } from "react";
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

    console.log(lastDayIndex , nextDays);
    const current_year = date.getFullYear()
    const current_month = months[date.getMonth()]

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
    }//Next month days

    return({
        month:current_month,
        year:current_year,
        days:days
    })
}

// const render_months = () =>{
   

//     return({
//         years:current_year,
//     })
// }

const Calendar2 = () => {
    const current_year = new Date().getFullYear()

    const current_month = new Date(date.getFullYear() , date.getMonth())

    
    return(
        <>
            <div className="wrapper">
                <div className="year">
                    <h2>{current_year}</h2>
                    <div className="arrow-wrapper">
                        <div className="arrow prev" onClick={()=> {
                            // date.setMonth(date.getMonth() - 1)

                            // setDate_Date(render_date())
                        }}>
                            <IoIosArrowUp />
                        </div>
                        <div className="arrow next" onClick={() => {
                            // date.setMonth(date.getMonth() + 1)

                            // setDate_Date(render_date())
                        }}>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className="months text-center">{months.map((month) => {
                    let short_month = month.substring(0,3)

                    return (
                        <span className="month-button text-center" >{short_month}</span>
                    )
                })}</div>
            </div>
        </>
    )
}
const Calendar = () => {

    const [date_data , setDate_Date] = useState(render_date())
    const { month , year , days} = date_data   
    
    // useEffect(() => {
    //     setDate_Date(render_date())
    // },[date_data])

    // console.log(month , year , days);
    return(
    <>
        <div className="wrapper">
            <div className="month">
                <h2>{month} , {year}</h2>
                <div className="arrow-wrapper">
                    <div className="arrow prev" onClick={()=> {
                            date.setMonth(date.getMonth() - 1)

                            setDate_Date(render_date())
                        }}>
                        <IoIosArrowUp />
                    </div>
                    <div className="arrow next" onClick={() => {
                            date.setMonth(date.getMonth() + 1)

                            setDate_Date(render_date())
                        }}>
                        <IoIosArrowDown />
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

const Applayout = () => {
    return(
        <>
        <Calendar2/>
        <Calendar/>
        {/* <h2>Hello</h2> */}
        </>
    )
    
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Applayout/>)
