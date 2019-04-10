import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';
import './Event.scss';
import Moment from 'react-moment';

const Event = props => {
    let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hc3i2u9RuBDNbNjQq_oCharh_furF1DHBsXIJeRbP8AtkOkD"
    // Helsinki image
    // let image = "https://werklig.com/wp-content/uploads/2018/11/HELSINKI_thumbnail-544x306.jpg";
    if (props.event.images[0]) {
        image = props.event.images[0].url;
    }
    let info_url = "";
    if (props.event.info_url) {
        info_url = props.event.info_url.fi;
    }
    let start_time = "";
    if (props.event.start_time) {
        start_time = props.event.start_time;
    }

    let name = "";
    let location_name = "";
    let street_address = "";
    let short_description = "";
    let linkText = "";

    const lang = props.language;
    switch (lang) {
        case '':
        case 'fi':
            if (props.event.name) {
                name = props.event.name.fi || props.event.name.en
            }
            if (props.event.location && props.event.location.name) {
                location_name = props.event.location.name.fi || props.event.location.name.sv || props.event.location.name.en;
            }
            if (props.event.location && props.event.location.street_address) {
                street_address = props.event.location.street_address.fi || props.event.location.street_address.sv || props.event.location.street_address.en;
            }
            if (props.event.short_description) {
                short_description = props.event.short_description.fi || props.event.short_description.en || props.event.short_description.sv;
            }
            if (info_url) {
                linkText = "Tapahtuman sivuille"
            }
            break;
        case 'sv':
            if (props.event.name) {
                name = props.event.name.sv || props.event.name.fi || props.event.name.en
            }
            if (props.event.location && props.event.location.name) {
                location_name = props.event.location.name.sv || props.event.location.name.fi || props.event.location.name.en;
            }
            if (props.event.location && props.event.location.street_address) {
                street_address = props.event.location.street_address.sv || props.event.location.street_address.fi || props.event.location.street_address.en;
            }
            if (props.event.short_description) {
                short_description = props.event.short_description.sv || props.event.short_description.fi || props.event.short_description.en;
            }
            if (info_url) {
                linkText = "Till webbsidan"
            }

            break;
        case 'en':
            if (props.event.name) {
                name = props.event.name.en || props.event.name.fi
            }
            if (props.event.location && props.event.location.name) {
                location_name = props.event.location.name.en || props.event.location.name.fi || props.event.location.name.sv;
            }
            if (props.event.location && props.event.location.street_address) {
                street_address = props.event.location.street_address.en || props.event.location.street_address.fi || props.event.location.street_address.sv;
            }
            if (props.event.short_description) {
                short_description = props.event.short_description.en || props.event.short_description.fi;
            }
            if (info_url) {
                linkText = "Link to website"
            }
            break;
        default: break;
    }


    return (
        < div >
            <Card className="event">
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle><h5>{name}</h5></CardTitle>
                    <CardText> <Moment format="D.M.YYYY H.mm">
                        {start_time}
                    </Moment> </CardText>
                    <CardText className="location">{location_name}<br /> {street_address}</CardText>
                    <CardText>{short_description}</CardText>
                    <CardLink href={info_url} target="_blank">{linkText}</CardLink>
                </CardBody>
            </Card>
        </div >
    );
};


export default Event;