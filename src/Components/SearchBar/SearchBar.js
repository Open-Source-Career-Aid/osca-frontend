import React, { useState } from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import MyDesktop from "../../MyHelperCompnents/MyDesktop";
import { makeStyles } from '@material-ui/styles';
import "../../Styles/Search.css"
const SearchBar = (props) => {
    const [typed, setTyped] = useState('');

    const useStyle = makeStyles({
        black: {
            color: '#586060',
        }
    });

    const classes = useStyle();

    const url = `http://osca-api.herokuapp.com/form/learn-skill/?searchData=${typed}`;

    const fetchData = async () => {
        const requestData = await fetch(url);
        const data = requestData.json();
        console.log(data)
        props.handleSearch(data);
        return data;
    };

    return (
        <Row className="top-pad">
            <MyDesktop>
                <Col className="learn-txt center" md={{ span: 1, offset: 2 }}>

                </Col>
            </MyDesktop>
            <Col md={{ span: 3, offset: 4 }} xs={{ span: 8, offset: 2 }} >
                <InputGroup className="SearchField">
                    <Form.Control
                        type="text"
                        className="Search"
                        placeholder="Search a Skill"
                        onChange={(e) => setTyped(e.target.value)}
                    />
                    <InputGroup.Append className="search-btn">
                        <IconButton aria-label="Search" size="small" onClick={() => fetchData()}>
                            <SearchIcon className={classes.black} />
                        </IconButton>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default SearchBar
