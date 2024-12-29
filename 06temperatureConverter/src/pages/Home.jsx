import { Link } from "react-router";
function Home() {
  return (
    <div className="text-white">
      <h1 className="text-5xl">Home Page</h1>
      <ul>
        Goto:
        <li>
          <Link to={"/temperature"}>Temparature</Link>
        </li>
        <li>
          <Link to={"/energy"}>Energy</Link>
        </li>
        <li>
          <Link to={"/frequency"}>Frequency</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
