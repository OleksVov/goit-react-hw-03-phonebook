import React from "react";
import { useState} from "react";
import DatePicker from "react-date-picker";

import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import './DataPicker.css';

// import { format, isToday } from 'date-fns';


const DateCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const locales = 'en-Us';
    // const options = {weekday: 'long'};

    // const formatDate = date => {
    //     if (isToday(date)) {
    //       return `Today, ${format(date, 'MMMM d')}`;
    //     }
    //     return format(date, 'EEEE, MMMM d');
    //   };

    const onChange = date => {
        setDate(date);
    };
    // const InputOutputBtn = forwardRef(({ _, onClick }, ref) => (
    //     <button
    //       type="button"
    //       className="input-output-date-btn"
    //       onClick={onClick}
    //       ref={ref}
    //     >
    //       <span className="date-button-text">{formatDate(date)}</span>
    //       {/* <BsChevronDown className="date-picker-arrow" /> */}
    //     </button>
    //   ));

    return (
        <div>
            <DatePicker  
            onChange={onChange} 
            value={date}
            minDate={new Date()}
            locale="en-US"
            format="dd.MM.y"
            calendarIcon="w"
            minDetail="month"
         
            // clearIcon=""
            // formatDay={(locale, date) => formatDate(date, 'd')}
            
            // next2Label=""
            // prev2Label=""
            // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}
            // formatShortWeekday={(data) => format(new Date(), 'EEEEEE')}
            />
        </div>
    )
}

export default DateCalendar;