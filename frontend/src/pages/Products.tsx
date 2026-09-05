import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  productCategories,
  type ProductCategory,
} from '../data/products';
import { ArrowRight } from '../components/Icons';

export default function Products() {
  const location = useLocation();
  const [selected, setSelected] =
    useState<ProductCategory | null>(null);

  useEffect(() => {
    const id = location.hash.slice(1);

    if (id) {
      const item = productCategories.find(
        (p) => p.id === id
      );

      if (item) {
        setSelected(item);

        setTimeout(() => {
          document
            .getElementById(id)
            ?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
        }, 50);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <section className="page-hero page-hero-color product-hero">
        <div className="site-container">
          <div className="eyebrow">PRODUCTS</div>

          <h1>Our Product Catalogue</h1>

          <p>
            Explore AMBE MARKETING's focused range of IT,
            printing, power backup, collaboration and
            security products.
          </p>
        </div>
      </section>

      <section className="section products-page">
        <div className="site-container">
          <div className="product-intro">
            <div>
              <div className="eyebrow">
                7 PRODUCT CATEGORIES
              </div>

              <h2>
                Choose a category to view products.
              </h2>
            </div>

            <Link
              to="/contact"
              className="button button-dark"
            >
              Request a Quote <ArrowRight />
            </Link>
          </div>

          <div className="product-grid-new">
            {productCategories.map((p) => (
              <article
                id={p.id}
                className="product-detail-card reveal"
                key={p.id}
                style={
                  {
                    '--accent': p.accent,
                    '--soft': p.soft,
                  } as CSSProperties
                }
              >
                <div className="product-detail-image">
                  <img
                    src={p.image}
                    alt={p.title}
                  />

                  <span className="product-brand-chip">
                    {p.brand}
                  </span>
                </div>

                <div className="product-detail-body">
                  <div className="card-kicker">
                    {p.shortTitle}
                  </div>

                  <h3>{p.title}</h3>

                  <p>{p.description}</p>

                  <div className="product-tags">
                    {p.items
                      .slice(0, 4)
                      .map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                  </div>

                  <button
                    className="card-button"
                    onClick={() => setSelected(p)}
                  >
                    View Products <ArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-new"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-image">
              <img
                src={selected.image}
                alt={selected.title}
              />

              <span>{selected.brand}</span>
            </div>

            <div className="modal-body">
              <div className="eyebrow">
                {selected.shortTitle}
              </div>

              <h2>{selected.title}</h2>

              <p>{selected.description}</p>

              <h4>Product range</h4>

              <ul className="modal-list">
                {selected.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="button button-primary"
                onClick={() => setSelected(null)}
              >
                Enquire Now <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}