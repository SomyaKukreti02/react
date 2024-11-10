export default function Food() {
  return <h2>Food is ready</h2>;
}

export function Chicken(props) {
  return (
    <h3 className={props.odn ? "green" : ""}>
      {props.odn ? `Odn ${props.odn}` : <span className="yellow">Pending</span>}
      :🍗 {props.name} Chicken {props.spicy || "🌶️"}
      is ready
    </h3>
  );
}
// another way: destructured props
export function Paneer({ name = "", odn, spicy = "🌶️" }) {
  return (
    <h3 className={odn ? "green" : ""}>
      {odn ? `Odn ${odn}` : <span className="yellow">Pending</span>}:🧈 {name}{" "}
      Paneer {spicy} is ready
    </h3>
  );
}
