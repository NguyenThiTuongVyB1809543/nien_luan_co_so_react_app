import "./App.css";
import { Route, Switch } from "react-router-dom";

//import component
import Admin from "./components/admin/Admin";
import Home from "./components/home/Home";
function App() {
  // let { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={Admin} />
    </Switch>
  );
}

export default App;
