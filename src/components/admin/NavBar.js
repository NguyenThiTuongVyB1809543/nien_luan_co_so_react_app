import "./Admin.css";
const NavBar = () => {
  return (
    // <div className="admin-navbar-container"></div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/admin" className="navbar-brand">
          Cây Cảnh Cần Thơ Admin
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
