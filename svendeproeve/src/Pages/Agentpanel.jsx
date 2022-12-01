import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Agentpanel() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-medium">
          Velkommen til mægler panelet, {user.name}
        </h1>
        <p className="text-lg font-light mt-3 underline underline-offset-2">
          Her kan du tilføje eller opdatere boliger
        </p>
      </div>
    );
  } else {
    return (
      <>
        <h1>You are not authorized to view this page.</h1>
      </>
    );
  }
}

export default Agentpanel;
