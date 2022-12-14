import {React} from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import PetForm from "./components/PetForm"

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li><Link to="/"> All Pets </Link></li>
        <li><Link to="/kittens"> Kittens </Link></li>
        <li><Link to="/puppies"> Puppies </Link></li>
        <li><Link to="/ducklings"> Ducklings </Link></li>
        
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="ducklings" element={<Ducklings />} />
      </Routes>
  </Router>
  );
}

function Home() {
  return <>
          <h1>All Pets</h1>
          <section>This is the page for all your pet needs</section>
          <PetForm /> 
          <img src="imgs/kitten.jpg" alt="Kitten"/>
          <img src="imgs/puppy.jpg" alt="Puppy"/>
          <img src="imgs/duckling.jpg" alt="Duckling"/>
        </>
}

function Kittens() {
  return <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten"/>
    </>
}

function Puppies() {
return <>
<h1>Puppies</h1>
<section>This is the puppies page</section>
<img src="imgs/puppy.jpg"  alt="Puppy"/>
</>
}

function Ducklings() {
  return <>
  <h1>Ducklings</h1>
  <section>This is the ducklings page</section>
  <img src="imgs/duckling.jpg"  alt="Duckling"/>
  </>
  }
  

function Animals({ name, img }) {
  return (
    <div>
      <h2>{name}</h2>
      <section>This is the {name} page</section>
      <img src={img} alt={name} />
      </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
