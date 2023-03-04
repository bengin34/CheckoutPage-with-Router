import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const UpdateProduct = () => {
  const url = process.env.REACT_APP_API_URL;
  const { state: item } = useLocation();
  const [formData, setFormData] = useState(item);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/${item.id}`, formData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(item);
  return (
    <div className="container">
      <ProductForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        text="New"
      />
    </div>
  );
};

export default UpdateProduct;
