import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import './Button.css';

const Deletebutton = (variation) => {
    if (Object.entries(variation).length === 0) {
        
        return( 
                <Button  onClick={() => {variation.fun(variation.index, variation.index2)}} style={styles.btn} >
                <img style={styles.icon} src='./../../../../../../delete.png' />
            </Button>
        );
    }
    else {
        let tempstyle = styles.btn;
        if (variation.shape !== undefined && variation.shape === 'rounded') {
            tempstyle = ({...styles.btn, borderRadius: '100%'} );
        }
        if( variation.shape !== undefined && variation.color !== null)
        {
            tempstyle = ({...tempstyle, backgroundColor: variation.color})
        }
    return( 
        <Button onClick={() => {variation.fun(variation.index,  variation.index2)}} style={tempstyle} className='Button'>
        <img style={styles.icon} src='./../../../../../../delete.png' />
    </Button> )

    }

    
};

let styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        // padding: '1em',
        borderRadius: '2em'
    },
    icon: {
        height: '1.3em',
        width: '1.1em'
    }
}

export default Deletebutton;