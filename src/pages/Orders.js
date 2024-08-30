import React, { useState, useEffect } from 'react';
import style from '../styles/Orders.module.css';
import data from '../data.json';
import Order from '../components/Order';

const Orders = () => {
    const [order, setOrder] = useState({ items: [], customer: "" });
    const [errors, setErrors] = useState([]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleAddItem(itemSelected) {
        const itemIndex = order.items?.findIndex(element => element.product == itemSelected);
        let aux;

        console.log(itemIndex);

        if (itemIndex >= 0) {
            aux = [...order.items];
            aux[itemIndex].qtd += 1;
        }
        else {
            aux = [...order.items, { product: itemSelected, qtd: 1 }];
        }

        setOrder({ ...order, items: aux });
    }

    function handleSend(e) {
        e.preventDefault();

        const nameValid = (!!order.customer?.split(" ")[1]) && order.customer?.split(" ")[1] != "";

        if (!nameValid) setErrors([...errors, "Coloque nome e sobrenome"]);
        if (!order.customer) setErrors([...errors, "Colocar nome do cliente"]); else
            if (order.items.length == 0) setErrors([...errors, "Não tem nenhum pastel no pedido"]);

        if (!order.customer || order.items.length == 0 || !nameValid) {
            alert("Preencha o pedido corretamente.");
            return;
        }
        else {
            setErrors([]);
        }

        //console.clear();
        console.log(order);
    }

    useEffect(() => {
        // Função para atualizar o estado com a largura da tela
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Adiciona o listener de redimensionamento
        window.addEventListener('resize', handleResize);

        // Limpa o listener quando o componente é desmontado
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1>Balcão</h1>

                <form>
                    <input type='text' placeholder='Fulano da Silva'
                        value={order.customer}
                        onChange={(e) => setOrder({ ...order, customer: e.target.value })}
                    />
                    <div className={style.products}>
                        {
                            data.produtos.pasteis.map((pastel, index) => (
                                <div id={index} className={style.option} onClick={() => handleAddItem(pastel)}>{pastel}</div>
                            ))
                        }
                    </div>
                    {errors.length > 0 &&
                        <ul className={style.errors}>
                            {errors.map((err, idx) => <li id={idx}>{err}</li>)}
                        </ul>
                    }

                    {windowWidth < 990 &&
                        <>
                            <h2>Resumo do pedido</h2>
                            <Order order={order} />
                        </>
                    }

                    <button onClick={(e) => handleSend(e)}>Enviar para cozinha</button>
                    <button onClick={() => setOrder({ items: [], customer: "" })}>Cancelar</button>
                </form>
            </div>

            <div className={style.right}>
                {windowWidth >= 1000 &&
                    <>
                        <h2>Resumo do pedido</h2>
                        <div className={style.resume}>
                            <Order order={order} />
                        </div>
                    </>}

                <hr />

                <div className={style.orders}>
                    Fila aqui
                </div>
            </div>

        </div >
    );
}

export default Orders;