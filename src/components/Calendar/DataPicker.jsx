import React from "react";
import { useState } from "react";
// import Calendar from "react-calendar";
import DatePicker from "react-date-picker";

import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import './DataPicker.css';
// import {formatDate} from "react-calendar/dist/cjs/index.js";



const DateCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const locales = 'en-Us';
    // const options = {weekday: 'long'};

    const onChange = date => {
        setDate(date);
    };


    return (
        <div>
            <DatePicker  
            onChange={onChange} 
            value={date}
            minDate={new Date()}
            locale="en-US"
            // format="MMMM-d"
            // calendarIcon=""
            // next2Label=""
            // prev2Label=""
            // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
            // formatShortWeekday={(date) => new Intl.DateTimeFormat(locales, options).format(date)}
            />
        </div>
    )
}

export default DateCalendar;