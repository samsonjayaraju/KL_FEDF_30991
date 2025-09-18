import { Link } from "react-router-dom";
function Home() {
    return(
        <>
        <h1>Hello, I am Samson Jaya Raju</h1>
        <Link to="/about">
        <button>Go to About</button>
      </Link>
      <Link to="/login">
        <button>Go to the Login Page </button>
      </Link>
        </>
    )
}
export default Home;
