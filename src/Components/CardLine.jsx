import React from "react";
import rates from '../rates.json';
import Card from "./Card";
import styles from './cardLine.module.scss'

function CardLine(props) {
    return (<div className={styles.container}>
        {rates.map((item, index) => {
            return <Card name={`${item.name} ${item.price}`} price={item.price} speed={item.speed} topColor={item.topColor} color={item.color} info={"Объем включенного трафика не ограничен"} key={index} />
        })}
    </div>
    )
}
export default CardLine