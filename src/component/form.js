// import React from "react";

import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    text: "",
    time: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      // Display alert with filled data
      alert(
        `Form submitted:\nText: ${formData.text}\nTime: ${formData.time}\nEmail: ${formData.email}\nDate: ${formData.date}`
      );
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="form-container">
      <h2>Beautiful Form</h2>
      <form onSubmit={handleSubmit} className="styled-form">
        <label>
          Text:
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
