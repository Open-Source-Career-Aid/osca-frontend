import React, { useState, useLayoutEffect } from 'react'

const MyMobile = (props) => {
    const [windowSize, setWindowSize] = useState(0);

    useLayoutEffect(() => {
        function UpdateSize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", UpdateSize);
        UpdateSize();
        return () => {
            cleanup
        };
    }, [])

    return (
        <React.Fragment>
            {windowSize >= 550 ? props.chaildren : null}
        </React.Fragment>
    )
}

export default MyMobile
