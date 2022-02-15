import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  let elementToShow;
  if (loading) {
    elementToShow = <Loading />;
  }
  else if (tours.length === 0) {
    elementToShow = (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  else{
    elementToShow = <Tours tours={tours} removeTour={removeTour} />
  }


  return (
    <main>
      {elementToShow}
    </main>
  );
}

export default App;
