import { useEffect } from 'react';

const API_URL = 'http://www.omdbadi.com?apikey=eba88d20';

const App = () => {

  const seachMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  }

  useEffect(() => {


  }, []);

  return (
      <h1>App </h1>
  );
}

export default App;
