import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { eventClass, eventID, eventDayCount, eventDate, eventStartTime, eventEndTime, eventTitle, eventBtnText, eventLocation } = props;
    return React.createElement(
        'div',
        { className: eventClass ? eventClass : 'event__card' },
        React.createElement(
            'div',
            { className: "event__card--content" },
            React.createElement(
                'div',
                { className: "event__card--content-area" },
                React.createElement(
                    'div',
                    { className: "event__card--date" },
                    React.createElement('em', null, eventDayCount ? eventDayCount : '10'),
                    ' ',
                    eventDate ? eventDate : 'April, 2022'
                ),
                React.createElement(
                    'div',
                    { className: "event_time" },
                    `${eventStartTime ? eventStartTime : '10:30 AM'} - ${eventEndTime ? eventEndTime : '12:30PM'}`
                ),
                React.createElement(
                    'h3',
                    { className: "event__card--title" },
                    React.createElement(
                        Link,
                        { to: `/event/${eventID}` },
                        eventTitle ? eventTitle : 'A Better Alternative To Grading Student Writing'
                    )
                ),
                React.createElement(
                    'div',
                    { className: "event_location" },
                    React.createElement(
                        'svg',
                        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-map-pin" },
                        React.createElement('path', { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
                        React.createElement('circle', { cx: "12", cy: "10", r: "3" })
                    ),
                    ' ',
                    eventLocation ? eventLocation : 'New York, USA'
                ),
                React.createElement(
                    Link,
                    { to: `/event/${eventID}`, className: "event__card--link" },
                    eventBtnText ? eventBtnText : 'Find Out More',
                    ' ',
                    React.createElement(
                        'svg',
                        { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-arrow-right" },
                        React.createElement('line', { x1: "5", y1: "12", x2: "19", y2: "12" }),
                        React.createElement('polyline', { points: "12 5 19 12 12 19" })
                    )
                )
            )
        )
    );
}

export default SingleEvent;