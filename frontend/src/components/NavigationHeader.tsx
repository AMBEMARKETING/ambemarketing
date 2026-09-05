import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationHeader(){
 const location=useLocation(); const [open,setOpen]=useState(false);
 const links=[['/','Home'],['/about','About Us'],['/products','Products'],['/services','Services'],['/contact','Contact Us']];
 return <header className="main-nav"><div className="site-container nav-inner">
  <Link to="/" className="brand-lockup" onClick={()=>setOpen(false)}><img src="/ambe-logo.png" alt="AMBE Marketing logo"/><div><div className="brand-name">AMBE MARKETING</div><div className="brand-tagline">IT · POWER BACKUP · SECURITY</div></div></Link>
  <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/><span/></button>
  <nav className={`nav-links ${open?'is-open':''}`}>{links.map(([path,label])=><Link key={path} to={path} onClick={()=>setOpen(false)} className={location.pathname===path?'active':''}>{label}</Link>)}</nav>
 </div></header>
}
