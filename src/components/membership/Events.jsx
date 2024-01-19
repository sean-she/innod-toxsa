import DesktopCalendar from "./DesktopCalendar";
import MobileCalendar from "./MobileCalendar";

export default function Events() {
    return (
        <div className="container">
            <div id="event-content" className="content-container">
                <div className="title-container">
                    <h1>Events</h1>
                </div>
                <div className="desktop-calendar">
                    <DesktopCalendar></DesktopCalendar>
                </div>
                <div className="mobile-calendar">
                    <MobileCalendar></MobileCalendar>
                </div>
            </div>
        </div>
    );
}
