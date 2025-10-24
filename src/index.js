import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>K.X Pizza</h1>
      <h2>Our Menu</h2>
      
      <div>
        <Pizza
          name="Focaccia"
          ingredients="Tomato, mozzarella, basil"
          photoName="pizzas/focaccia.jpg"
          price={10}
        />
        <br />
        <Pizza
          name="Funghi"
          ingredients="Tomato, cheese, mushrooms"
          photoName="pizzas/funghi.jpg"
          price={12}
        />
        <br />
        <Pizza
          name="Margherita"
          ingredients="Tomato, cheese, bell peppers, olives, onions"
          photoName="pizzas/margherita.jpg"
          price={11}
        />
        <br />
        <Pizza
          name="Prosciutto"
          ingredients="Tomato, mozzarella, basil"
          photoName="pizzas/prosciutto.jpg"
          price={10}
        />
        <br />
        <Pizza
          name="Salamino"
          ingredients="Tomato, cheese, salami"
          photoName="pizzas/salamino.jpg"
          price={12}
        />
        <br />
        <Pizza
          name="Spinaci"
          ingredients="Tomato, cheese, spinach"
          photoName="pizzas/spinaci.jpg"
          price={11}
        />
      </div>
    </div>
  );
}

function Pizza({ name, ingredients, photoName, price }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>${price}</span>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
