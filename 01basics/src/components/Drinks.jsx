export default function Drinks() {
  return <h2>Drinks are ready</h2>;
}

export function Coffee(props) {
  return (
    <h3 className={props.odn ? "green" : ""}>
      {props.odn ? `Odn ${props.odn}` : <span className="yellow">Pending</span>}
      :🍵 {props.name || "Coffee"} {props.strong || "💪"}is ready
    </h3>
  );
}
// another way: destructured props
export function Chai({ name = "", odn }) {
  return (
    <h3 className={odn ? "green" : ""}>
      {odn ? `Odn ${odn}` : <span className="yellow">Pending</span>}: ☕{name}{" "}
      Chai is ready
    </h3>
  );
}
