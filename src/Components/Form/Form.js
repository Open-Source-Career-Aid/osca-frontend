import React ,{useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';

import './../../Styles/Form.css';



const Form = () => {
   
 return (
    <div className="headingRow">
        <Col className="backarrow" xs={12} sm={12} md={1}  lg={1} xl={1}>
              <img style={styles.buttonIcon} src='./../../../../../Vector.png' />
        </Col>
        <Col xs={12} sm={12} md={11}  lg={11} xl={11}>

            {/* Your code goes Here */}
            <h1>write Here</h1>
        </Col>
    </div>
 );   

}


const styles = {
  
    buttonIcon: {
        height: '3vh',
        width: '3vh',
        filter: 'grayscale(100%)'
    }
}

export default Form;