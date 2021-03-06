import { Route, BrowserRouter as Router } from "react-router-dom";
// import { Route } from "react-router-dom";
import "./Admin.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import Orders from "./orders/Orders";
import Users from "./users/Users";
const Admin = () => {
  // let { path } = useRouteMatch();
  // let { url } = useRouteMatch();
  return (
    <Router>
      <div className="admin-container">
        <div className="admin-navbar-container">
          <NavBar />
        </div>

        <div className="admin-sidebar-container">
          <SideBar />
        </div>
        {/* nested router */}
        <div className="admin-content-container">
          <Route path="/admin" component={Dashboard} exact />
          <Route path="/admin/products" component={Products} exact />
          <Route path="/admin/orders" component={Orders} exact />
          <Route path="/admin/users" component={Users} exact />
        </div>
      </div>
    </Router>
  );
};

export default Admin;
