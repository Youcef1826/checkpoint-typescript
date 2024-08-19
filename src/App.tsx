import React, { useState, useEffect } from "react";
import { Car } from "./types/Car";

function App() {
  const [message, setMessage] = useState<string>('');
  const [carDetails, setCarDetails] = useState<{ make: string, model: string, year: number } | null>(null);

  useEffect(() => {
    const myCar = new Car("Ferrari", "F40", 1990);
    myCar.start();
    setMessage("Car engine started");

    setCarDetails({
      make: myCar.make,
      model: myCar.model,
      year: myCar.year
    });
  }, []);

  return (
    <div>
      <h1>Vehicle Example</h1>
      <p>{message}</p>
      {carDetails && (
        <div>
          <h2>Car Details</h2>
          <p><strong>Make:</strong> {carDetails.make}</p>
          <p><strong>Model:</strong> {carDetails.model}</p>
          <p><strong>Year:</strong> {carDetails.year}</p>
        </div>
      )}
    </div>
  );
}

export default App;
