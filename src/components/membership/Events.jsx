import Calendar from "./Calendar";

export default function Events() {
    return (
        <div className="container">
            <div id="event-content" className="content-container">
                <div className="title-container">
                    <h1>Events</h1>
                </div>
                <Calendar></Calendar>
            </div>
        </div>
    );
}
