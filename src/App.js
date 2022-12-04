import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <Provider>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
