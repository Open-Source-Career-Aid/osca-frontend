import React from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import MyDesktop from "../../MyHelperCompnents/MyDesktop";
import { makeStyles } from '@material-ui/styles';
import Style from "../../Styles/Search.css"
const SearchBar = () => {

    const useStyle = makeStyles({
        black: {
            color: '#586060',
        }
    });

    const classes = useStyle();

    return (
        <Row className="top-pad">
            <MyDesktop>
                <Col className="learn-txt center" md={{ span: 1, offset: 2 }}>
                    Skillset
                </Col>
            </MyDesktop>
            <Col md={{ span: 3, offset: 4 }} xs={{ span: 8, offset: 2 }} >
                <InputGroup className="SearchField">
                    <Form.Control
                        type="text"
                        className="Search"
                        placeholder="Search a Skill"
                    />
                    <InputGroup.Append className="search-btn">
                        <IconButton aria-label="Search" size="small">
                            <SearchIcon className={classes.black} />
                        </IconButton>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default SearchBar
