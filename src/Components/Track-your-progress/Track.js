import React from 'react'
import styles from "./Track.module.css"

import large_wheel from "../../Images/large_wheel.png"
import small_wheel from "../../Images/small_wheel.png"

export const Track = () => {
    return (
        <div className={styles.track__body}>
            <div className={styles.contain}>
                <div className={styles.wheels}>
                    <div className={styles.Large__Wheel}>
                        <img className={styles.large} src={large_wheel} alt="" />
                    </div>
                    <div className={styles.small__wheel}>
                        <img className={styles.small} src={small_wheel} alt="" />
                    </div>
                </div>
                <h4>Coming soon...</h4>
            </div>
        </div>
    )
}
