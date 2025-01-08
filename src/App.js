
import React, { useState, useEffect } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import './App.css';

function App() {
  const [orders, setOrders] = useState({
    table1: [],
    table2: [],
    table3: []
  });

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (storedOrders) {
      setOrders(storedOrders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [newOrder.table]: [...prevOrders[newOrder.table], newOrder]
    }));
  };

  const deleteOrder = (table, orderId) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [table]: prevOrders[table].filter(order => order.orderId !== orderId)
    }));
  };

  return (
    <>
      <OrderForm addOrder={addOrder} />
      <h2>Order</h2>
      <OrderList orders={orders} deleteOrder={deleteOrder} />
    </>
  );
}

export default App;
