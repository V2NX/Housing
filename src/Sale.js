import React, { useState } from 'react';

function Sale() {
  const [specifications, setSpecifications] = useState({
    title: '',
    location: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    area: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSpecifications(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the submitted specifications (e.g., save to a database)
    console.log(specifications);
    // Reset the form
    setSpecifications({
      title: '',
      location: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      area: ''
    });
  };

  return (
    <div>
      <h2>Sale Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={specifications.title} onChange={handleInputChange} required /><br />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={specifications.location} onChange={handleInputChange} required /><br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={specifications.price} onChange={handleInputChange} required /><br />

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input type="number" id="bedrooms" name="bedrooms" value={specifications.bedrooms} onChange={handleInputChange} required /><br />

        <label htmlFor="bathrooms">Bathrooms:</label>
        <input type="number" id="bathrooms" name="bathrooms" value={specifications.bathrooms} onChange={handleInputChange} required /><br />

        <label htmlFor="area">Area:</label>
        <input type="text" id="area" name="area" value={specifications.area} onChange={handleInputChange} required /><br />

        <button type="submit">Add Specification</button>
      </form>
    </div>
  );
}

export default Sale;
