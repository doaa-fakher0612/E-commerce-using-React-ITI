
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getProductById } from "../api.js";

export default function ProductDetails() {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await getProductById(id);
        if (!cancelled) setProd(data);
      } catch (e) {
        if (!cancelled) setErr(e.message || "Not found");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => (cancelled = true);
  }, [id]);

  if (loading) return <div className="alert alert-secondary">Loading…</div>;
  if (err) return <div className="alert alert-danger">{err}</div>;
  if (!prod) return null;

  const inStock = prod.stock > 0;

  return (
    <div className="row g-4">
      <div className="col-12 col-lg-6">
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="img-fluid rounded border"
        />
        <div className="d-flex gap-2 mt-2 flex-wrap">
          {prod.images?.slice(0, 5).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="rounded border"
              style={{ width: 90, height: 90, objectFit: "cover" }}
            />
          ))}
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <h3 className="mb-1">{prod.title}</h3>
        <div className="text-muted mb-2">
          {prod.brand} • {prod.category}
        </div>
        <h4 className="mb-3">${prod.price}</h4>

        <span className={`badge ${inStock ? "text-bg-success" : "text-bg-danger"} mb-3`}>
          {inStock ? "In stock" : "Out of stock"}
        </span>

        <p className="mb-4">{prod.description}</p>

        <div className="d-flex gap-2">
          <button className="btn btn-dark" disabled={!inStock}>
            Buy Now
          </button>
          <button className="btn btn-outline-dark" disabled={!inStock}>
            Add to Cart
          </button>
          <Link to="/products" className="btn btn-link">
            ← Back to list
          </Link>
        </div>
      </div>
    </div>
  );
}
