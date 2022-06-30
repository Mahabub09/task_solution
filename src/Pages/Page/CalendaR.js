import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const CalendaR = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className=' text-center mx-auto w-6/12 mt-10'>
            <Calendar className="mx-auto" onChange={onChange} value={value} />
        </div>
    );
};

export default CalendaR;