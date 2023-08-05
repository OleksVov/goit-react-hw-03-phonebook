import React from "react";
import { useState} from "react";
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import './DataPicker.css';

// import { format, isToday } from 'date-fns';


const DateCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const locales = 'en-Us';
    // const options = {weekday: 'long'};

    // const formatDate = date => {
    //     if (isToday(date)) {
    //       return `Today, ${format(date, 'MMMM d')}`;
    //     }
    //     return format(date, 'EEEE, MMMM d');
    //   };

    const onChange = date => {
        setStartDate(date);
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
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        calendarStartDay={1}
       
       
       
        // popperPlacement='right-end'

      />
        </div>
    )
}

export default DateCalendar;