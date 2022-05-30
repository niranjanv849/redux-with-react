import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
