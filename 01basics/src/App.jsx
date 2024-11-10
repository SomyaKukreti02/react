import Drinks, { Coffee, Chai } from "./components/Drinks.jsx";
import Food, { Chicken, Paneer } from "./components/Food.jsx";

function App() {
  return (
    <>
      <section>
        <hr />
        <h1>Drinks Section</h1>
        <hr />
        <Drinks />
        <Chai odn="2" />
        <Chai name="Elaichi" odn="1" />
        <Chai name="Adrak" />
        <Coffee name="Latte" odn="8" strong="💪" />
        <Coffee name="Espreso" odn="3" strong="💪💪" />
        <Coffee name="Frappe" odn="5" />
        <Coffee />
      </section>
      <hr />
      <section>
        <h1>Food Section</h1>
        <hr />
        <Chicken spicy="🌶️🌶️" />
        <Chicken odn="2" name="Kadhai" spicy="🌶️🌶️🌶️" />
        <Chicken odn="2" name="Tandoori" spicy="🌶️🌶️" />
        <Paneer />
        <Paneer name="Rara" odn="8" spicy="🌶️" />
        <Paneer name="Butter" odn="9" />
      </section>
    </>
  );
}

export default App;
