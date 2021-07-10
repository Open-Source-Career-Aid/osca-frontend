import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './Button.css';

const Deletebutton = (variation) => {
    console.log(variation, 'mayank');
    if (variation === null) {
            return( 
                <Button style={styles.btn} className='Button'>
                <img style={styles.icon} src='./../../../../../../edit.png' />
            </Button>
        );
    }
    else {
        if (variation.shape === 'rounded') {
            styles.btn = ({...styles.btn, borderRadius: '100%'} );
        }
        if(variation.color !== null)
        {
            styles.btn = ({...styles.btn, backgroundColor: variation.color})
        }
    return( 
        <Button style={styles.btn} className='Button'>
        <img style={styles.icon} src='./../../../../../../edit.png' />
    </Button> )
    }


};

let styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        // padding: '',
    },
    icon: {
        height: '1em',
        width: '1em'
    }
}

export default Deletebutton;