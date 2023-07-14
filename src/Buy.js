import React, { useEffect, useState } from 'react';

function Buy() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Sample apartment data (replace with actual data)
    const sampleApartments = [
      { id: 1, name: "Apartment A", price: 100000 },
      { id: 2, name: "Apartment B", price: 150000 },
      { id: 3, name: "Apartment C", price: 200000 }
    ];

    setApartments(sampleApartments);
  }, []);

  return (
    <div>
      <h2>Listed Apartment</h2>
      <p>Available Apartments:</p>
      <ul>
        {apartments.map(apartment => (
          <li key={apartment.id}>{apartment.name} - ${apartment.price}</li>
        ))}
      </ul>
      <form action="purchase.php" method="post">
        {/* Your purchase form fields go here */}
        <input type="submit" value="Buy" />
      </form>
    </div>
  );
}

export default Buy;
