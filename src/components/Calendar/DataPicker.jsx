import React from "react";
import { useState } from "react";
// import Calendar from "react-calendar";
import DatePicker from "react-date-picker";

import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import './DataPicker.css';
// import {formatDate} from "react-calendar/dist/cjs/index.js";
import { format, isToday } from 'date-fns';


const DateCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const locales = 'en-Us';
    // const options = {weekday: 'long'};

    const formatDate = date => {
        if (isToday(date)) {
          return `Today, ${format(date, 'MMMM d')}`;
        }
        return format(date, 'EEEE, MMMM d');
      };

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
            format="d/MM/y"
            calendarIcon="w"
            minDetail="month"
            
            // next2Label=""
            // prev2Label=""
            // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
            // formatShortWeekday={(data) => format(new Date(), 'EEEEEE')}
            />
        </div>
    )
}

export default DateCalendar;