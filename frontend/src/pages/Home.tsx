import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { productCategories, aboutText } from '../data/products';
import {
  ArrowRight,
  ShieldIcon,
  TruckIcon,
  GridIcon,
  HeadsetIcon,
  BoxIcon,
} from '../components/Icons';

const services = [
  {
    title: 'Product Sourcing',
    text: 'Reliable sourcing across IT, power backup and security.',
    image: '/assets/products-v2/hp.jpg',
    icon: ShieldIcon,
  },
  {
    title: 'Government Procurement',
    text: 'Supply support for government and institutional requirements.',
    image: '/assets/products-v2/peoplelink.jpg',
    icon: BuildingIcon,
  },
  {
    title: 'Distribution & Delivery',
    text: 'Efficient handling, packaging and dependable delivery.',
    image: '/assets/products-v2/elnova.jpg',
    icon: TruckIcon,
  },
  {
    title: 'Bulk Supply',
    text: 'Competitive sourcing for corporate and institutional needs.',
    image: '/assets/products-v2/compatible-cartridges.jpg',
    icon: BoxIcon,
  },
  {
    title: 'Product Guidance',
    text: 'Practical help to match products with your requirement.',
    image: '/assets/products-v2/epson.jpg',
    icon: HeadsetIcon,
  },
  {
    title: 'Complete Sourcing',
    text: 'Multiple technology needs handled through one supplier.',
    image: '/assets/products-v2/cp-plus.jpg',
    icon: GridIcon,
  },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4 20V6l8-3 8 3v14M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2M3 20h18" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              IT · POWER BACKUP · SECURITY
            </div>

            <h1>
              Reliable Technology
              <br />
              Solutions for a <span>Smarter Tomorrow</span>
            </h1>

            <p>{aboutText}</p>

            <div className="hero-actions">
              <Link
                to="/products"
                className="button button-primary"
              >
                Explore Products <ArrowRight />
              </Link>

              <Link
                to="/about"
                className="button button-outline"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section supply-section">
        <div className="site-container">
          <div className="section-heading centered">
            <div className="eyebrow">WHAT WE SUPPLY</div>

            <h2>
              Solutions for everyday <span>business needs</span>
            </h2>

            <p>
              A focused range of products from leading brands,
              organized around your business requirements.
            </p>
          </div>

          <div className="supply-grid">
            {productCategories.map((p) => (
              <article
                className="supply-card reveal"
                style={
                  {
                    '--accent': p.accent,
                    '--soft': p.soft,
                  } as CSSProperties
                }
                key={p.id}
              >
                <div className="supply-image">
                  <img
                    src={p.image}
                    alt={p.title}
                  />

                  <div className="supply-brand-name">
                    {p.brand}
                  </div>
                </div>

                <div className="supply-body">
                  <div className="card-kicker">
                    {p.shortTitle}
                  </div>

                  <h3>{p.title}</h3>

                  <p>{p.description}</p>

                  <Link
                    to={`/products#${p.id}`}
                    className="card-button"
                  >
                    View Products <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="site-container about-band-grid">
          <div className="about-band-copy">
            <div className="eyebrow">
              ABOUT AMBE MARKETING
            </div>

            <h2>
              Your trusted technology partner.
            </h2>

            <p>
              {aboutText} Registered on the Government
              e-Marketplace (GeM), AMBE MARKETING serves
              businesses, institutions and government
              organizations with genuine products,
              competitive pricing, reliable sourcing and
              timely delivery.
            </p>

            <Link
              to="/about"
              className="button button-primary"
            >
              Know More About Us <ArrowRight />
            </Link>
          </div>

          <div className="about-office">
            <img
              src="/assets/about-office-hq.jpg"
              alt="Modern business office"
            />

            <div className="office-tag">
              <b>AMBE MARKETING</b>
              <span>
                IT · POWER BACKUP · SECURITY
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="site-container">
          <div className="section-heading centered">
            <div className="eyebrow">OUR SERVICES</div>

            <h2>
              End-to-End Support for Your <span>Business</span>
            </h2>

            <p>
              From sourcing to delivery, practical support
              for your technology requirements.
            </p>
          </div>

          <div className="service-preview-grid">
            {services.map((s) => {
              const Icon = s.icon;

              return (
                <article
                  className="service-preview-card reveal"
                  key={s.title}
                >
                  <div className="service-image">
                    <img
                      src={s.image}
                      alt={s.title}
                    />

                    <div className="service-icon">
                      <Icon />
                    </div>
                  </div>

                  <div className="service-preview-body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="center-cta">
            <Link
              to="/services"
              className="button button-outline"
            >
              View All Services <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}