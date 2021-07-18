import React, { useState, useLayoutEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button'
import '../../Styles/Body.css';

const Home = () => {

    const [scroll, setScroll] = useState(0);

    useLayoutEffect(() => {
        function UpdateScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", UpdateScroll);
        UpdateScroll();
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener("scroll", () => {
        let windowwidth = document.documentElement.clientWidth;
        let height = window.pageYOffset;
        let topmargin = -9 + ((height * 0.063) / 2) + (((windowwidth - 2000) * 0.063) / 7) + "rem";
        document.querySelector(".rectangle").style.top = topmargin;
    })

    window.addEventListener("scroll", () => {
        let height = window.pageYOffset;
        let circlemargin = 0.3 + (height * 0.063) / 33 + "rem";
        document.querySelector(".circle").style.top = circlemargin;
    })

    return (
        <>

            <div fluid className="upperBody">

                <Col >
                    <Row style={{ ...styles.colorbackground, ...styles.gridRows, }} xs={12} md={12} lg={12} xl={12}>
                        <Col style={styles.gridCol} xs={12} sm={12} md={6} lg={6} xl={6} >
                            <h2>Welcome to OSCA!</h2>
                        </Col>
                        <Col style={{ ...styles.gridCol }} className="seprator" xs={12} sm={12} md={6} lg={6} xl={6} >
                            <p >A platform of resources; created and and organised by skilled individuals of planet Earth.</p>
                        </Col>
                    </Row>
                    <Row className='center' style={{ ...styles.gridRows, ...styles.whiteBackground, }} xs={12} md={12} lg={12} xl={12} >
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className='headingCol' >
                            <h1 className='headingPart1' >Let's Start</h1>
                            <h1 className='headingPart2' >Learning!</h1>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="buttonCol">

                            <Row>
                                <Button style={styles.button1} size="small" type='submit' variant="contained" color='primary' className='button1' >Learn A Skill </Button>
                            </Row>
                            <Row style={{ paddingTop: '10%' }} >
                                <Button style={styles.button2} type='submit' variant="contained" size="small" color='secondry' className='button2' >Track Your Progress</Button>
                            </Row>
                        </Col>
                    </Row>
                    <div className="rectangle" onClick={scroll < 415 ? scrollToBottom : scrollToTop}>
                        <div className="circle">
                        </div>
                    </div>
                </Col>
            </div>
        </>
    )

}

const styles = {

    gridRows: {
        paddingTop: '7%',
        paddingRight: '8%',
        paddingLeft: '8%',
        paddingBottom: '6%',

    },
    gridCol: {

        paddingTop: '10vh',
        paddingLeft: '8vw',
        paddingRight: '8vw',
    },

    whiteBackground: {
        backgroundColor: '#F5F5F5',
    },
    colorbackground: {
        background: 'linear-gradient(0deg, #8750A9, #8750A9), #C4C4C4',

    },

    button1: {

        fontSize: '1.9vh',
        background: '#8750A9',
        fontWeight: '500',
        border: '1px solid #8750A9',
        boxSizing: 'border-box',
        borderRadius: '2rem',

    },
    button2: {

        fontSize: '1.9vh',
        fontWeight: '500',
        background: '#FFFFFF',
        color: '#8750A9',
        border: '1px solid #8750A9',
        boxSizing: 'border-box',
        borderRadius: '2rem',

    },

}

export default Home;