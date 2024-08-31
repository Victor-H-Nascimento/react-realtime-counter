import react, { useState, useEffect } from "react";
import Order from '../components/Order';
import io from "socket.io-client";
import style from "../styles/Kitchen.module.css";

const socket = io("http://localhost:3001");

const Kitchen = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        socket.on("notify-new-orders", (ordersX) => {
            setOrders(...ordersX);
            console.log("chatice 1", ordersX)
        });

        return () => socket.off("notify-new-orders");
    }, []);

    useEffect(() => { console.log(orders) }, [orders])

    return (
        <div className={style.container}>
            <div className={style.left}>
                <h2>Fila</h2>
                <div className={style.ordersWrapper}>
                    {
                        orders.map(order => <Order order={order} />)
                    }
                </div>
            </div>
            <div className={style.right}></div>
        </div>
    );
}
export default Kitchen;