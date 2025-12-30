import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Del from "./Components/Del";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Del />
  </Provider>
);
