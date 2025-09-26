
import { Link , NavLink} from "react-router";
export default function Header() {
  return (
    
<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/products">
      E-commerce App
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="mainNav">
      <div className="navbar-nav ms-auto">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " active fw-semibold" : "")
          }
          end
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " active fw-semibold" : "")
          }
        >
          Cart
        </NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}
