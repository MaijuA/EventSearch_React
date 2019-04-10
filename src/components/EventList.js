import React from "react";
import Event from "./Event";

const EventList = props =>
    props.events.map(event => (
        <Event
            key={event.id + event.start_time}
            event={event}
            language={props.language}
        />
    ));

export default EventList;