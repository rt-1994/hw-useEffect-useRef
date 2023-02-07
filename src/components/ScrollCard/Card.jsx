import React, {useState, useEffect, useRef} from "react";
import styles from "./Card.scss";
import cn from "classnames";

const Card = () => {
    const [value, setValue] = useState(0)
    const circleRef = useRef(null)

    useEffect(() => {
        const bar = circleRef.current;
        const style = getComputedStyle(bar).strokeDasharray;
        const range = /^([1-9]?\d|100)$/;
        if (range.test(value)) {
            let styleNew = parseFloat(style) * (1 - parseFloat(value / 100));
            bar.style.strokeDashoffset = styleNew;
        }
    },[value])

    return (
        <div className={styles.content}>
            <h1>Home work(useState, useEffect, useRef)</h1>
            <div className={styles.contentBlock}>
                <div className={styles.card}
                     onScroll={(event) => setValue(Math.floor(event.target.scrollTop * 100 / 420))}>
                    <div className={styles.cardContent}>
                        <p>$</p>
                        <p>#</p>
                        <p>!</p>
                    </div>
                    <div className={styles.statusBar}>
                        <svg className={styles.progress}>
                            <circle
                                className={styles.bar}
                                r="47.5%"
                                cx="50%"
                                cy="50%"
                            ></circle>

                            <circle
                                className={cn(styles.bar, styles.progress__circle)}
                                ref={circleRef}
                                r="47.5%"
                                cx="50%"
                                cy="50%"
                            ></circle>
                        </svg>
                        <p className={styles.procent}>{value} %</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;