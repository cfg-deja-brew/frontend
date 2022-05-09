import './Home.css';

function Home() {
  return (
    <div className="container h-100 py-5 d-flex flex-column justify-content-center align-items-center text-center text-light">
      <h1 className="text-uppercase fw-bold main-heading">Espresso Yourself</h1>
      <h2>Search small independent cafes in East Midlands</h2>
      <br/>
      <br/>
      <br/>
      <h3>Where do you want to go today?</h3>
      <div className="city-buttons">
        <button className="Leicester">Leicester</button>
        <button className="Nottingham">Nottingham</button>
        <button className="Derby">Derby</button>
      </div>
    </div>
    

  )
}

export default Home
