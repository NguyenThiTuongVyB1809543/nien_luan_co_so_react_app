import "./App.css";
import { Route, Switch } from "react-router-dom";
// import "./components/admin/Admin.css";

//import component
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Products from "./components/admin/products/Products";
import Orders from "./components/admin/orders/Orders";
import Users from "./components/admin/users/Users";
function App() {
  // let { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path="/admin" 
      render={( { match: { url } } ) => (
          <div className="admin-content-container">
            <Route path={`${url}/`} component = {Admin} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/products" component={Products} />
            <Route exact path="/admin/orders" component={Orders} />
            <Route exact path="/admin/users" component={Users} />
          </div> 
        )}
      />




      {/* <div className="admin-content-container">
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/orders" component={Orders} />
        <Route exact path="/admin/users" component={Users} />
      </div> */}
    </Switch>

    // <Switch>
    //     {/* <Route exact path="/admin" component= {Admin}/> */}

    //     {/* <Route
    //       path = "/admin"
    //       render={( { match: { url } } ) => (
    //         <>
    //           <Route path={`${url}/`} component = {Admin} />
    //           <Route path={`${url}/dashboard`} component = {Dashboard} />
    //           <Route path={`${url}/products`} component = {Products} />
    //           <Route path={`${url}/orders`} component = {Orders} />
    //           <Route path={`${url}/users`} component = {Users} />
    //         </>
    //       )}

    //     /> */}
    // </Switch>
  );
}

export default App;
