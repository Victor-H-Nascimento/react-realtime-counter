import React, { useEffect, useState } from "react";
import style from "./Order.module.css";

const Order = ({ order, status }) => {
  const [bgColor, setBgColor] = useState("#fff2d2");
  const qtd = order.items.reduce((sum, e) => (sum += e.qtd), 0);

  useEffect(() => {
    status === "queued"
      ? setBgColor("#fff2d2")
      : status === "new"
      ? setBgColor("#fff")
      : status === "ready"
      ? setBgColor("#90eab8")
      : setBgColor("lightgray");
  }, [status, order.customer]);

  return (
    (order.items?.length > 0 || order.customer) && (
      <div
        class={style.ticket}
        id={order.customer + `${Math.random()}`}
        style={{ background: bgColor }}
      >
        <p className={style.total}>
          <strong>Total:</strong> {qtd} x {qtd > 1 ? "Pastéis" : "Pastel"}
        </p>
        {(status === "new" || status === "queued") && (
          <ul>
            {order.items.map((item, index) => (
              <li key={item.product + index}>
                <strong>{item.qtd}</strong> x {item.product}
              </li>
            ))}
          </ul>
        )}
        <p className={style.name}> {order.customer}</p>
      </div>
    )
  );
};

export default Order;
