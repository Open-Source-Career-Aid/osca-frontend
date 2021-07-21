import React from 'react'
import { Button } from 'react-bootstrap';
import './Button.css';

const Editbutton = (/*variation*/{ touch }) => {

    /*if (Object.entries(variation).length === 0) {

        return (
            <Button onClick={() => { variation.fun(variation.index) }} style={styles.btn} >
                <img style={styles.icon} src='./../../../../../../edit.png' />
            </Button>
        );
    }
    else {
        let tempstyle = styles.btn;
        if (variation.shape !== undefined && variation.shape === 'rounded') {
            tempstyle = ({ ...styles.btn, borderRadius: '100%' });
        }
        if (variation.shape !== undefined && variation.color !== null) {
            tempstyle = ({ ...tempstyle, backgroundColor: variation.color })
        }
        return (
            <Button onClick={() => { variation.fun(variation.index) }} style={tempstyle} className='Button'>
                <img style={styles.icon} src='./../../../../../../edit.png' />
            </Button>)

    }*/

    return (
        <Button onClick={touch} style={styles.btn} >
            <img style={styles.icon} src='./../../../../../../edit.png' />
        </Button>
    );


};

let styles = {
    btn: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        // padding: '.3em',
    },
    icon: {
        height: '1em',
        width: '1em'
    }
}

export default Editbutton;