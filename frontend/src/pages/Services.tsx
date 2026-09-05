import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { ArrowRight, ShieldIcon, TruckIcon, GridIcon, HeadsetIcon, BoxIcon, BuildingIcon } from '../components/Icons';

const services=[
 ['Product Sourcing','Reliable sourcing across IT, power backup and security products.','/assets/products-v2/hp.jpg',ShieldIcon,'#1556c0'],
 ['Government Procurement','Supply support for government and institutional requirements.','/assets/products-v2/peoplelink.jpg',BuildingIcon,'#087fa9'],
 ['Distribution & Delivery','Efficient handling, packaging and dependable delivery.','/assets/products-v2/elnova.jpg',TruckIcon,'#16854a'],
 ['Bulk Supply','Competitive sourcing for corporate and institutional needs.','/assets/products-v2/compatible-cartridges.jpg',BoxIcon,'#6b35b8'],
 ['Product Guidance','Practical help to match products with your requirement.','/assets/products-v2/epson.jpg',HeadsetIcon,'#e85a17'],
 ['Complete Sourcing','Multiple technology needs handled through one supplier.','/assets/products-v2/cp-plus.jpg',GridIcon,'#d9232e'],
] as const;
export default function Services(){return <div>
 <section className="page-hero page-hero-color"><div className="site-container"><div className="eyebrow">SERVICES</div><h1>Reliable sourcing & supply</h1><p>Focused support for business, institutional and government requirements.</p></div></section>
 <section className="section services-page"><div className="site-container"><div className="section-heading centered"><div className="eyebrow">HOW WE HELP</div><h2>Support that keeps your requirement moving.</h2><p>Clear sourcing, practical guidance and dependable supply from enquiry to delivery.</p></div><div className="service-page-grid">{services.map(([title,text,image,Icon,accent],i)=><article className="service-page-card reveal" key={title}><div className="service-page-image" style={{'--accent':accent} as CSSProperties}><img src={image} alt={title}/><div className="service-number">0{i+1}</div><div className="service-page-icon"><Icon/></div></div><div className="service-page-body"><h3>{title}</h3><p>{text}</p><Link to="/contact" className="card-button">Discuss Requirement <ArrowRight/></Link></div></article>)}</div></div></section>
 <section className="service-cta"><div className="site-container service-cta-inner"><div><div className="eyebrow">NEED A QUOTE?</div><h2>Tell us what you need.</h2><p>Share the product, brand or category and we can assist with sourcing and supply.</p></div><Link to="/contact" className="button button-primary">Contact AMBE <ArrowRight/></Link></div></section>
 </div>}
