import React from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
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
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            listGirdPlugin,
                            googleCalendarPlugin,
                        ]}
                        initialView="listMonth"
                        headerToolbar={{
                            left: "listMonth,dayGridMonth,timeGridWeek,timeGridDay",
                            center: "title",
                            right: "prev,next today",
                        }}
                        buttonText={{
                            today: "Today",
                            month: "Month",
                            week: "Week",
                            list: "List",
                            day: "Day",
                        }}
                        googleCalendarApiKey="AIzaSyDCOXhfhMw7mu-1Y1jcwEKkkC4UkYZum4U"
                        events={{
                            googleCalendarId:
                                "c_2b3a8a0daa415d3bdd4bfb242717e271bd2850780fb51822ba3ecf7618275b5e@group.calendar.google.com",
                        }}
                        eventColor="var(--primary)"
                        select={this.handleDateSelect}
                        eventClick={this.handleEventClick}
                    />
                </div>
            </div>
        );
    }

    handleEventClick = (clickInfo) => {
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
