import "./Admin.css";
import { NavLink, useRouteMatch, Route } from "react-router-dom";
const SideBar = () => {
  let { url } = useRouteMatch();
  return (
    <div className="admin-sidebar-content">
      <h4 className="admin-sidebar-brand-name">Cây Cảnh Cần Thơ</h4>
      <div className="admin-sidebar-list-group-container">
        <ul className="list-group list-group-flush">
          <Route>
            <li className="list-group-item">
              <NavLink to={`${url}/dashboard`}>Dashboard</NavLink>
              {/* <NavLink to="/admin/dashboard">Dashboard</NavLink> */}
            </li>
            <li className="list-group-item">
              <NavLink to={`${url}/products`}>Sản Phẩm</NavLink>
              {/* <NavLink to="/admin/products">Sản Phẩm</NavLink> */}
            </li>
            <li className="list-group-item">
              <NavLink to={`${url}/orders`}>Đơn Hàng</NavLink>
              {/* <NavLink to="/admin/orders">Đơn Hàng</NavLink> */}
            </li>
            <li className="list-group-item">
              <NavLink to={`${url}/users`}>Khách Hàng</NavLink>
              {/* <NavLink to="/admin/users">Khách Hàng</NavLink> */}
            </li>
          </Route>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
