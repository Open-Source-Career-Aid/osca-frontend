import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Button  from '@material-ui/core/Button'
import MyDesktop from "../MyHelperCompnents/MyDesktop";
import './../Styles/Body.css';
import zIndex from '@material-ui/core/styles/zIndex';
  
const Home = () => {
    
        return (
            <MyDesktop>

            <div fluid className="upperBody">
               
            <Col >
                <Row style={{...styles.colorbackground, ...styles.gridRows, height: '50vh'}} xs={12} md={12} lg={12} xl={12}>
                    <Col style={styles.gridCol} xs={12} md={6} lg={6} xl={6} >
                        <h2>Welcome to OSCA!</h2>
                    </Col>
                    <Col style={{...styles.veticalLine, ...styles.gridCol}}  xs={12} md={6} lg={6} xl={6} >
                        <p >A platform of resources; created and and organised by skilled individuals of planet Earth.</p>
                    </Col>
                </Row>
                <Row style={{...styles.gridRows, ...styles.whiteBackground, height: '50vh'}} xs={12} md={12} lg={12} xl={12} >
                    <Col>
                        <h1 style={styles.hedingPar1} >Let's Start </h1>
                        <h1 style={styles.hedingPar2}> Learning! </h1>
                    </Col>
                    <Col style={styles.buttonCol}>
                        
                        <Row>
                            <Button style={styles.button1} size="small" type='submit' variant="contained" color='primary'  >Learn A Skill</Button>
                        </Row>
                        <Row style={{paddingTop: '8%'}} >
                        <Button style={styles.button2} type='submit' variant="contained" size="small" color='secondry'>Track Your Progress</Button>
                        </Row>
                    </Col>
                </Row>
            </Col>
            </div>
            </MyDesktop>
        )
    
}

const styles = {
    veticalLine: {
        borderLeft: '1px solid #FFFFFF',
    },
    gridRows: {
        paddingTop: '8%',
        paddingRight: '8%',
        paddingLeft: '8%',
        paddingBottom: '4%',
       
    },
    gridCol: {
    
        paddingTop: '10vh',
        paddingLeft: '8vw',
        paddingRight: '8vw',
    },

    whiteBackground: {
        backgrondColor: '#F5F5F5',
    },
    colorbackground : {
        background: 'linear-gradient(0deg, #8750A9, #8750A9), #C4C4C4',
       
    },
    hedingPar1: {
        fontWeight: '600',
        fontSize: '5vw',
        color: '#B280D1',
        paddingRight: '10%',
    },
    hedingPar2: {
        fontWeight: '600',
        fontSize: '5vw',
        paddingLeft: '15%',
        color: '#8750A9',
    },
    button1: {
        padding: '4%',
        fontSize: '2vh',
        background: '#8750A9',
        fontWeight: '700',
        border: '1px solid #8750A9',
        boxSizing: 'border-box',
        borderRadius: '2rem',
        zIndex: '-1',
    },
    button2: {
        padding: '4%',
        fontSize: '2vh',
        fontWeight: '600',
        background: '#FFFFFF',
        color: '#8750A9',
        border: '1px solid #8750A9',
        boxSizing: 'border-box',
        borderRadius: '2rem',
        zIndex: '-1',
    },
    buttonCol: {
        marginLeft: '20%',
        marginRight: '2rem',
        maxWidth:'30%'
    }
}

export default Home;