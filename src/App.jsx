import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchCatImage =() => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => { 
        console.log(data)
        setImage(data[0].url); // Set the image URL from the response
        setLoading(false); // Set loading to false after fetching
      })
      .catch(error => {
        console.error("Error fetching the cat image:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }


  useEffect(() => {
    fetchCatImage();
  }, [])

  return (
    <div className="App">
      <h1>Random Cat Image</h1>
      
      <div>
      {
        loading ? (<p>Loading...</p>): (<img src={image} alt='A Random Cat Image' style={{width: '300px', height: 'auto'}}/>)
      }
      </div>

      <button onClick={fetchCatImage}>Get a random cat image</button>
    </div>
  );
}

export default App;
