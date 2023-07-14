import React from 'react';
import { useParams } from 'react-router-dom';

function Apartment() {
  const { id } = useParams();

  // Sample apartment data (replace with actual data)
  const apartments = [
    {
      id: '1',
      title: 'Modern Studio Apartment',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRt7xpT1PREv7b8ITTyy15sqUnl883DUlTQ&usqp=CAU',
      rating: 4.5,
      address: '123 Main Street, City',
      details:
        'This modern studio apartment is located in the heart of the city. It features a spacious living area, a fully equipped kitchen, and a stylish bathroom. Ideal for individuals or couples looking for a comfortable and convenient living space.',
      contactEmail: 'contact@example.com',
    },
    // Add more apartments as needed
  ];

  const apartment = apartments.find((apt) => apt.id == id);

  if (!apartment) {
    return <div>Apartment not found.</div>;
  }

  const handleContactClick = () => {
    // Handle contact button click (e.g., open contact form, send email)
    console.log(`Contact button clicked for apartment ${apartment.id}`);
  };

  return (
    <div>
      <h2>{apartment.title}</h2>
      <img src={apartment.image} alt={apartment.title} />
      <div>Rating: {apartment.rating}</div>
      <div>Address: {apartment.address}</div>
      <div>Details: {apartment.details}</div>
      <button onClick={handleContactClick}>Contact</button>
    </div>
  );
}

export default Apartment;
