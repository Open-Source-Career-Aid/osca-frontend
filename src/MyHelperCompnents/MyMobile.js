import React, { useState, useLayoutEffect } from 'react'

const MyMobile = (props) => {
    const [windowSize, setWindowSize] = useState(0);

    useLayoutEffect(() => {
        function UpdateSize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", UpdateSize);
        UpdateSize();
    }, [])

    return (
        <React.Fragment> {windowSize <= 750 ? props.children : null} </React.Fragment>)
}

export default MyMobile;