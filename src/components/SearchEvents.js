import React from "react";
import axios from "axios";
import List from './EventList';

class SearchEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            language: "",
            area: "",
            filter: ""
        };
    }

    componentDidMount() {
        console.log(this.state.language, this.state.area, this.state.filter);
        this.getData(this.state.language, this.state.area, this.state.filter);
    }

    componentWillReceiveProps({ language, area, filter }) {
        console.log(language, area, filter);
        let lang = '';
        let areaValue = '';
        let filterValue = '';
        if (language) {
            lang = "&language=" + language;
        }
        if (area) {
            areaValue = '&division=' + area;
        }
        if (filter) {
            const words = filter.split(" ");
            const wordString = words.join('+');
            filterValue = '&text=' + wordString;
        }
        this.setState({ language: language, area: area, filter: filter })
        console.log(this.state);
        this.getData(lang, areaValue, filterValue);
        this.render();
    }

    getData = (lang, area, filter) => {
        console.log(lang, area, filter);
        axios.get("https://api.hel.fi/linkedevents/v1/event/?format=json&start=today&include=location&sort=end_time" + lang + area + filter)
            .then(response => {
                this.setState({ events: response.data.data });
                // console.log(response.data.data);
                console.log("https://api.hel.fi/linkedevents/v1/event/?format=json&start=today&include=location&sort=end_time" + lang + area + filter);
            });
    }

    render() {
        const events = this.state.events;
        // console.log(events);
        return (
            <div>
                <List
                    events={events}
                    language={this.state.language}
                />
            </div>
        );
    }
}

export default SearchEvents;
