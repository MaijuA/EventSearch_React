import React from 'react';
import { CustomInput, Form, FormGroup, Input, Button } from 'reactstrap';
import './Form.scss';
import Areas from './area';

class SearchForm extends React.Component {

    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <FormGroup>
                    <Input type="text" name="search" id="search" placeholder="Kirjoita hakusana..." />
                    <CustomInput type="select" id="areaCustomSelect" name="areaCustomSelect" className="customSelect" >
                        <option value="">Kaupunginosa</option>
                        {Areas.map(area => <option key={area} value={area}>{area}</option>)}
                    </CustomInput>
                    <CustomInput type="select" id="languageCustomSelect" name="LanguageCustomSelect" className="customSelect" >
                        <option value="">Kieli</option>
                        <option value="fi">Suomi</option>
                        <option value="sv">Ruotsi</option>
                        <option value="en">Englanti</option>
                    </CustomInput>
                    <Button className="submit" type="onSubmit">Hae</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default SearchForm;
