// src/components/DigitalClock.js
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const DigitalClock = () => {
  const [time, setTime] = useState(dayjs());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <div className="text-3xl font-bold">
        {time.format('HH:mm:ss')}
      </div>
      <div className="text-xl mt-2">
        {time.format('dddd, MMMM D, YYYY')}
      </div>
    </div>
  );
};

export default DigitalClock;
