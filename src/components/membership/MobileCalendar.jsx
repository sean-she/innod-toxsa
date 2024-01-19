import React from "react";

import FullCalendar from "@fullcalendar/react";
import listGirdPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

export default class Calendar extends React.Component {
    state = {
        weekendsVisible: true,
        currentEvents: [],
    };

    render() {
        return (
            <div className="demo-app">
                <div className="demo-app-main">
                    <FullCalendar
                        plugins={[listGirdPlugin, googleCalendarPlugin]}
                        initialView="listMonth"
                        buttonText={{
                            today: "Today",
                        }}
                        googleCalendarApiKey="AIzaSyDCOXhfhMw7mu-1Y1jcwEKkkC4UkYZum4U"
                        events={{
                            googleCalendarId:
                                "c_2b3a8a0daa415d3bdd4bfb242717e271bd2850780fb51822ba3ecf7618275b5e@group.calendar.google.com",
                        }}
                        eventColor="var(--primary)"
                        select={this.handleDateSelect}
                        eventClick={this.handleEventClick}
                        height={600}
                    />
                </div>
            </div>
        );
    }

    handleEventClick = () => {
        window.open(
            "https://calendar.google.com/calendar/u/1?cid=Y18yYjNhOGEwZGFhNDE1ZDNiZGQ0YmZiMjQyNzE3ZTI3MWJkMjg1MDc4MGZiNTE4MjJiYTNlY2Y3NjE4Mjc1YjVlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
        );
    };

    handleEvents = (events) => {
        this.setState({
            currentEvents: events,
        });
    };
}
