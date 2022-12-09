import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Agentpanel() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const formLabelClass = "block mb-2 text-sm font-medium text-gray-900";
  const formInputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

  if (user) {
    return (
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-medium">
          Velkommen til mægler panelet, {user.name}
        </h1>
        <p className="text-lg font-light mt-3 underline underline-offset-2">
          Her kan du tilføje eller opdatere boliger
        </p>

        <div className="w-full">
          <form>
            <div className="mb-6">
              <label className={formLabelClass} htmlFor="name">
                Your full name
              </label>
              <input
                type="text"
                className={formInputClass}
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className={formLabelClass} htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                className={formInputClass}
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className={formLabelClass} htmlFor="password">
                Your password
              </label>
              <input
                type="password"
                className={formInputClass}
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className={formLabelClass} htmlFor="password2">
                Confirm Password
              </label>
              <input
                type="password"
                className={formInputClass}
                id="password2"
                name="password2"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex justify-evenly">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
              <button
                type="submit"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="text-center text-5xl text-red-500 decoration underline">
        You are not authorized to view the content on this page.
      </h2>
    );
  }
}

export default Agentpanel;
