
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard.jsx";
import { getProducts } from "../api.js";

const PER_PAGE = 10;

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setErr("");
        const skip = (page - 1) * PER_PAGE;
        const data = await getProducts(PER_PAGE, skip);
        if (cancelled) return;
        setItems(data.products);
        setTotal(data.total);
      } catch (e) {
        if (cancelled) return;
        setErr(e.message || "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => (cancelled = true);
  }, [page]);

  const pages = Math.ceil(total / PER_PAGE);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="m-0">Products</h3>
        <small className="text-muted">
          Showing page {page} of {pages || 1}
        </small>
      </div>

      {loading && <div className="alert alert-secondary">Loading…</div>}
      {err && <div className="alert alert-danger">{err}</div>}

      <div className="row g-3">
        {!loading &&
          !err &&
          items.map((p) => (
            <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={p} />
            </div>
          ))}
      </div>

      {pages > 1 && (
        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page - 1)}>
                Prev
              </button>
            </li>
            <li className="page-item disabled">
              <span className="page-link">
                {page} / {pages}
              </span>
            </li>
            <li className={`page-item ${page === pages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setPage(page + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
