
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const inStock = product.stock > 0;

  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/products/${product.id}`} className="text-decoration-none">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: 180 }}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <h6 className="card-title mb-1">{product.title}</h6>
          <span className="badge text-bg-dark">${product.price}</span>
        </div>

        <div className="mb-2 small text-muted">
          {product.brand} • {product.category}
        </div>

        <span
          className={`badge ${inStock ? "text-bg-success" : "text-bg-danger"} mb-3`}
        >
          {inStock ? "In stock" : "Out of stock"}
        </span>

        <div className="mt-auto d-flex gap-2">
          <Link to={`/products/${product.id}`} className="btn btn-dark btn-sm">
            View
          </Link>
          <button className="btn btn-outline-dark btn-sm" disabled={!inStock}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

