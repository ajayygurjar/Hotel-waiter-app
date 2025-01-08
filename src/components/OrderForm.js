
import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({ orderId, price, dish, table });
    setOrderId('');
    setPrice('');
    setDish('');
    setTable('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='uniqueOrderId'>Unique Order Id</label>
      <input type='number' id='uniqueOrderId' value={orderId} onChange={(e) => setOrderId(e.target.value)} required />
      
      <label htmlFor='choosePrice'>Choose Price</label>
      <input type='number' id='choosePrice' value={price} onChange={(e) => setPrice(e.target.value)} required />
      
      <label htmlFor='chooseDish'>Choose Dish</label>
      <input type='text' id='chooseDish' value={dish} onChange={(e) => setDish(e.target.value)} required />
      
      <select id='table' value={table} onChange={(e) => setTable(e.target.value)} required>
        <option value="">Select Table</option>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      
      <button type='submit'>Add To Bill</button>
    </form>
  );
};

export default OrderForm;
