import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { user } = props;
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/auth");
  }

  return (
    <div>
      {user ? (
        <>Welcome</>
      ) : (
        <button onClick={handleOnClick}>Click to Authenticate</button>
      )}
    </div>
  );
};

export default Home;
