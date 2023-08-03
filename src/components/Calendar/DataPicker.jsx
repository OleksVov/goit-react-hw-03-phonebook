import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './DataPicker.css';
// import {formatDate} from "react-calendar/dist/cjs/index.js";



const DataPicker = () => {
    const [date, setDate] = useState(new Date());
    // const locales = 'en-Us';
    // const options = {weekday: 'long'};

    const onChange = date => {
        setDate(date);
    };


    return (
        <div>
            <Calendar  
            onChange={onChange} 
            value={date}
            minDate={new Date()}
            locale="en-EN"
            // next2Label=""
            // prev2Label=""
            // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
            // formatShortWeekday={(date) => new Intl.DateTimeFormat(locales, options).format(date)}
            />
        </div>
    )
}

export default DataPicker;