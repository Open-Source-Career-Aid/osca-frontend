import React from 'react'
import {Button}  from 'react-bootstrap';
import './Button.css';

const Deletebutton = (variation) => {
    if (Object.entries(variation).length === 0) {
        
        return( 
                <Button  onClick={() => {variation.fun(variation.index)}} style={styles.btn} >
                <img style={styles.icon} src='./../../../../../../ok.png' />
            </Button>
        );
    }
    else {
        let tempstyle = styles.btn;
        if ( variation.shape !== undefined && variation.shape === 'rounded') {
            tempstyle = ({...styles.btn, borderRadius: '100%'} );
        }
        if( variation.shape !== undefined && variation.color !== null)
        {
            tempstyle = ({...tempstyle, backgroundColor: variation.color})
        }
    return( 
        <Button  onClick={() => {variation.fun(variation.index)}} style={tempstyle} className='Button'>
        <img style={styles.icon} src='./../../../../../../ok.png' />
    </Button> )

    }


};

let styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    icon: {
        height: '1em',
        width: '1.2em'
    }
}

export default Deletebutton;