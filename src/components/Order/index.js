import React from 'react';
import style from "./Order.module.css";

const Order = ({ order }) => {

    const qtd = order.items.reduce((sum, e) => sum += e.qtd, 0);

    return (
        (order.items?.length > 0 || order.customer) &&
        <div id={order.customer + `${Math.random()}`}>
            <div class={style.ticket}>
                <p className={style.total}><strong>Total:</strong> {qtd} x {qtd > 1 ? "Pastéis" : "Pastel"}</p>
                <ul>
                    {order.items.map((item, index) =>
                        <li key={item.product + index}><strong>{item.qtd}</strong> x {item.product}</li>
                    )}
                </ul>
                <p className={style.name}> {order.customer}</p>
            </div>
            <div class={style.ticketBorder}>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
                <span class={style.ticketShape}></span>
            </div>
        </div>
    );
}

export default Order;