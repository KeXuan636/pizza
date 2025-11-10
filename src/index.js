import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function Header() {

  const headerStyle = {
    color: '#ba5e5eff',
    fontSize: '64px',
    fontFamily: 'monaco, monospace',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '50px',
    letterSpacing: '8px',
    textAlign: 'center',
  };

  return (
    <header style={{ textAlign: 'center' }}>
      <h1 style={headerStyle}>K.X Pizza</h1>
    </header>
  );
}

function Menu() {
  const [search, setSearch] = React.useState("");

  const pizzas = [
    {
      name: "Focaccia",
      ingredients: "Tomato, mozzarella, basil",
      img: "pizzas/focaccia.jpg",
      price: 10,
    },
    {
      name: "Funghi",
      ingredients: "Tomato, cheese, mushrooms",
      img: "pizzas/funghi.jpg",
      price: 12,
    },
    {
      name: "Margherita",
      ingredients: "Tomato, cheese, bell peppers, olives, onions",
      img: "pizzas/margherita.jpg",
      price: 11,
    },
    {
      name: "Prosciutto",
      ingredients: "Tomato, mozzarella, basil",
      img: "pizzas/prosciutto.jpg",
      price: 10,
    },
    {
      name: "Salamino",
      ingredients: "Tomato, cheese, salami",
      img: "pizzas/salamino.jpg",
      price: 12,
    },
    {
      name: "Spinaci",
      ingredients: "Tomato, cheese, spinach",
      img: "pizzas/spinaci.jpg",
      price: 11,
    },
  ];

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <input
        type="text"
        placeholder="Search pizza..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="open-time">
        <div className="open-hours">
          <h3>Open Hours</h3>
          <p>10:00AM - 10:00PM</p>
        </div>
      </div>

      <div className="pizza-container">
        {filteredPizzas.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            img={pizza.img}
            price={pizza.price}
          />
        ))}
      </div>
    </section>
  );
}

function Pizza({ name, ingredients, img, price }) {
  return (
    <article className="pizza">
      <img src={img} alt={name} className="pizza-img" />
      <div className='pizza-details'>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
      <div className="pizza-price">
        <h3>${price}</h3>
      </div>
    </article>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open — place your order now!</p>
      <button className="order-btn">Order Now</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Sorry, we're closed.</p>
      )}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// https://pizza-lilac-psi.vercel.app/