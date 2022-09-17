import React from 'react';

class WorldTimeClock extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.timeZone = props.timeZone;
        this.handleRemoveClock = props.handleRemoveClock;
        this.intervalUpdateClock = null;
        this.state = {
            'date': new Date(),
        };
    }

    /**
     * Метод возвращает текущее время с учетом часового пояса
     */
    getTimeNow() {
        const timezoneOffset = this.state.date.getTimezoneOffset();
        const dateGrinvichToNumberFormat = this.state.date.getTime() + timezoneOffset * 60000;
        const dateClock = new Date(dateGrinvichToNumberFormat + this.timeZone * 3600000); // Дата, введенная пользователем

        return {
            'hours': dateClock.getHours(),
            'minutes': dateClock.getMinutes(),
            'seconds': dateClock.getSeconds(),
        }
    }

    render() {
        this.timeNow = this.getTimeNow();
        const hours = this.timeNow.hours >= 10 ? this.timeNow.hours : '0' + String(this.timeNow.hours);
        const minutes = this.timeNow.minutes >= 10 ? this.timeNow.minutes : '0' + String(this.timeNow.minutes);
        const seconds = this.timeNow.seconds >= 10 ? this.timeNow.seconds : '0' + String(this.timeNow.seconds);

        return (
            <div className='clock'>
                <button type='button' onClick={() => this.handleRemoveClock(this.id)}>x</button>
                <span>{this.title}</span>
                <div>
                    <span>{hours}:</span>
                    <span>{minutes}:</span>
                    <span>{seconds}</span>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.intervalUpdateClock = setInterval(() => {
            this.updateClockState();
        }, 1000);
    }

    updateClockState() {
        this.setState({
            'date': new Date(),
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalUpdateClock);
    }
}

export default WorldTimeClock;