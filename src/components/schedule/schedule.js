import React, { Component } from 'react';

import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
  render() {
    return(
      <div className="schedule">
        <h1 className='schedule_title'>My Schedule</h1>
        <ScheduleCourse title={'Problem Solving'}/>
        <ScheduleCourse title={'Problem Solving'}/>
        <ScheduleCourse title={'Problem Solving'}/>
        <ProgressTracker/>
      </div>
    )
  }
}

export default Schedule;
