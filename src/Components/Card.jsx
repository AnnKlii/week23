import React from "react";
import styles from '../Components/card.module.css';

function Card(props) {

    let transform;
    if (props.price == 550) {
        transform = 'scale(1.1)'
    }


    return (
        <div className={styles.card} style={{ transform: transform }}>
            <div >
                <h4 className={styles.card_header} style={{ backgroundColor: props.topColor }}>{props.name}</h4>
            </div>
            <div >
                <p className={styles.card_price} style={{ backgroundColor: props.color }}><span>руб </span>{props.price}<span>/мес</span></p>
                <p className={styles.card_speed}> до {props.speed} Мбит/сек</p>
                <p className={styles.card_info}> {props.info}</p>
            </div>
        </div >
    );
}

export default Card