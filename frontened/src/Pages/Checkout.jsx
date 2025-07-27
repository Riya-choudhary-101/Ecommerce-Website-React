import React, { useState } from 'react';
import './CSS/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('🎉 Order Placed Successfully!');

    // Optionally reset the form
    setFormData({
      name: '',
      address: '',
      city: '',
      pincode: '',
      phone: '',
      email: ''
    });

    // You can send formData to backend here
  };

  return (
    <div className="checkout-page">
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
