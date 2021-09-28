import React, {useState} from 'react';
import {CalendarList} from 'react-native-calendars';

const initialDate = new Date();

const Calendar = () => {
  const [selected, setSelected] = useState(initialDate);
  const markedDates = {
    [selected]: {
      selected: true,
      selectedColor: '#48D1CC'
    }
  };

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  return (
    <CalendarList
      
      markedDates={markedDates}
      current={initialDate}
      pastScrollRange={24}
      futureScrollRange={24}
      horizontal
      pagingEnabled
      onDayPress={onDayPress}
    />
  );
};

export default Calendar;