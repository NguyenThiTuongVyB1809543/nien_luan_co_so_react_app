// import { Route, Switch, useRouteMatch } from "react-router-dom";
// import { Route } from "react-router-dom";
import "./Admin.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
// import Dashboard from "./dashboard/Dashboard";
// import Products from "./products/Products";
// import Orders from "./orders/Orders";
// import Users from "./users/Users";
const Admin = () => {
  // let { path } = useRouteMatch();
  // let { url } = useRouteMatch();
  return (
    <div className="admin-container">
      <div className="admin-navbar-container">
        <NavBar />
      </div>

      <div className="admin-sidebar-container">
        <SideBar />
      </div>

      <div className="admin-content-container">
        {/* <Dashboard />
        <Products />
        <Orders />
        <Users /> */}
        {/* <Route>
          <Route exact path="/admin/dashboard" component={Dashboard} />
        </Route> */}

        {/* <Switch>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/users" component={Users} />
        </Switch> */}

        {/* <Switch>
          <Route exact path={`${url}/dashboard`} component={Dashboard} />
          <Route exact path={`${url}/products`} component={Products} />
          <Route exact path={`${url}/orders`} component={Orders} />
          <Route exact path={`${url}/users`} component={Users} />
        </Switch> */}

        {/* <Route
          path = "/admin"
          render={( { match: { url } } ) => (
            <>
              <Route path={`${url}/dashboard`} component = {Dashboard} />
              <Route path={`${url}/products`} component = {Products} />
              <Route path={`${url}/orders`} component = {Orders} />
              <Route path={`${url}/users`} component = {Users} />
            </>
          )} 
        /> */}
      </div>

      
    </div>
  );
};

export default Admin;
