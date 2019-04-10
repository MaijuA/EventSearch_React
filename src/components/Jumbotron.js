import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Form from './Form';
import './Jumbotron.scss';

const EventJumbotron = (props) => (
    <div>
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">{props.title}</h1>
                <p className="lead">{props.text}</p>
                <Form
                    languageChangeHandler={props.languageChangeHandler}
                    areaChangeHandler={props.areaChangeHandler}
                    filterChangeHandler={props.filterChangeHandler}
                    onSubmit={props.onSubmit}
                />
            </Container>
        </Jumbotron>
    </div>
);

export default EventJumbotron;