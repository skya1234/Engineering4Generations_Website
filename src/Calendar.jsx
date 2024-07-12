import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzOS96sjCmcnFYG2QrastPfA3sO9V8EUNJkhUrQMlMgOmnw0OFE3j3EzQtBpvd56lZI/exec');
        const data = await response.json();

        // Convert fetched data to FullCalendar events format
       
        const formattedEvents = convertToFullCalendarEvents(data);
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Run once on component mount

  function convertToFullCalendarEvents(data) {
    const events = [];

    // Start from index 1 to skip the header row
    for (let i = 1; i < data.length; i++) {
      const [activity, startTime, endTime, date] = data[i];
      

      // Check if date is empty (assuming it's always the last column)
      if (!date) {
        continue; // Skip rows with empty dates
      }

      // Construct event object
      const event = {
        id: i.toString(), // Convert ID to string
        title: activity,
        start: date + "T" + startTime,
        end: date + "T" + endTime,
        allDay: false // Assuming events have specific times
      };

      events.push(event);
    }

    return events;
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay'
        }}
        events={events} // Pass events array to FullCalendar
        editable={false}
      />
    </>
  );
}

export default Calendar;
