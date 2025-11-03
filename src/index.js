import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function Header() {
  const headerStyle = {
    color: '#ba5e5eff',
    fontSize: '48px',
    textTransform: 'uppercase',
  };

  return <h1 style={headerStyle}>K.X Pizza</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <div className="pizza-container">
        <Pizza
          name="Focaccia"
          ingredients="Tomato, mozzarella, basil"
          img="pizzas/focaccia.jpg"
          price={10}
        />
        
        <Pizza
          name="Funghi"
          ingredients="Tomato, cheese, mushrooms"
          img="pizzas/funghi.jpg"
          price={12}
        />
        
        <Pizza
          name="Margherita"
          ingredients="Tomato, cheese, bell peppers, olives, onions"
          img="pizzas/margherita.jpg"
          price={11}
        />
        
        <Pizza
          name="Prosciutto"
          ingredients="Tomato, mozzarella, basil"
          img="pizzas/prosciutto.jpg"
          price={10}
        />
        
        <Pizza
          name="Salamino"
          ingredients="Tomato, cheese, salami"
          img="pizzas/salamino.jpg"
          price={12}
        />
        
        <Pizza
          name="Spinaci"
          ingredients="Tomato, cheese, spinach"
          img="pizzas/spinaci.jpg"
          price={11}
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        {new Date().getHours() >= 10 && new Date().getHours() < 22
          ? "We're currently open"
          : "Sorry, we're closed"}
      </p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ name, ingredients, img, price }) {
  return (
    <div className="pizza">
      <img src={img} alt={name} className="pizza-img" />
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
