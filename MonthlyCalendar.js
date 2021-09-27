import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, Switch} from 'react-native';
// @ts-expect-error
import {Calendar} from 'react-native-calendars';


const INITIAL_DATE = '2021-08-08';

const CalendarsScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);

  const toggleSwitch = () => {
    setShowMarkedDatesExamples(!showMarkedDatesExamples);
  };

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Select the month</Text>
        <Calendar
          current={INITIAL_DATE}
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#48D1CC',
              selectedTextColor: 'black'
            }
          }}
        />
      </Fragment>
    );
  };




  const renderCalendarWithInactiveDays = () => {
    return (
      <Fragment>
        <Text style={styles.text}>Calendar with inactive days</Text>
        <Calendar
          style={styles.calendar}
          disableAllTouchEventsForInactiveDays
          current={INITIAL_DATE}
          markedDates={{
            '2020-02-10': {
              inactive: true
            },
            '2020-02-11': {
              inactive: true
            }
          }}
        />
      </Fragment>
    );
  };

  const renderMarkedDatesExamples = () => {
    return (
      <Fragment>
        {renderCalendarWithMarkedDatesAndHiddenArrows()}
        {renderCalendarWithMultiDotMarking()}
        {renderCalendarWithPeriodMarkingAndSpinner()}
        {renderCalendarWithPeriodMarkingAndDotMarking()}
        {renderCalendarWithMultiPeriodMarking()}
        {renderCalendarWithCustomMarkingType()}
      </Fragment>
    );
  };

  const renderExamples = () => {
    return (
      <Fragment>
        {renderCalendarWithSelectableDate()}
        {/* {renderCalendarWithWeekNumbers()}
        {renderCalendarWithMinAndMaxDates()}
        {renderCalendarWithCustomDay()}
        {renderCalendarWithCustomHeader()}
        {renderCalendarWithInactiveDays()} */}
      </Fragment>
    );
  };

  const renderSwitch = () => {
    // Workaround for Detox 18 migration bug
    return (
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: '#d9e1e8', true: '#48D1CC'}}
          onValueChange={toggleSwitch}
          value={showMarkedDatesExamples}
        />
        <Text style={styles.switchText}>Show markings examples</Text>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      {renderSwitch()}
      {showMarkedDatesExamples && renderMarkedDatesExamples()}
      {!showMarkedDatesExamples && renderExamples()}
    </ScrollView>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  switchText: {
    margin: 10,
    fontSize: 16
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#48D1CC',
    fontSize: 16
  },
  disabledText: {
    color: 'grey'
  },
  defaultText: {
    color: '#48D1CC'
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  customDay: {
    textAlign: 'center'
  },
  customHeader: {
    backgroundColor: '#48D1CC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8
  }
});
