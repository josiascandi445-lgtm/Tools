import { Instagram, Youtube, Github, Twitter } from 'lucide-react';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';
import { scrollToId } from '../lib/scroll.js';

const socialIcons = { instagram: Instagram, youtube: Youtube, github: Github, twitter: Twitter };

export default function Footer({ notify }) {
  const go = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };
  const soon = (e, label) => {
    e.preventDefault();
    notify(`${label} is not available yet.`);
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>{site.tagline}</p>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              <li><a href="#products" onClick={(e) => go(e, 'products')}>All Products</a></li>
              <li><a href="#categories" onClick={(e) => go(e, 'categories')}>Categories</a></li>
              <li><a href="#featured" onClick={(e) => go(e, 'featured')}>Featured Products</a></li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Support">
            <h2>Support</h2>
            <ul>
              <li>
                {site.contactEmail ? (
                  <a href={`mailto:${site.contactEmail}`}>Contact</a>
                ) : (
                  <a href="#contact" onClick={(e) => soon(e, 'Contact')}>Contact</a>
                )}
              </li>
              <li><a href="#faq" onClick={(e) => soon(e, 'The FAQ')}>FAQ</a></li>
              <li><a href="#terms" onClick={(e) => soon(e, 'The Terms of Service')}>Terms of Service</a></li>
              <li><a href="#privacy" onClick={(e) => soon(e, 'The Privacy Policy')}>Privacy Policy</a></li>
            </ul>
          </nav>

          <div className="footer__col">
            <h2>Social Media</h2>
            <ul>
              {site.socials.map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <li key={s.id}>
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="social">
                        <Icon size={16} aria-hidden="true" />
                        {s.label}
                      </a>
                    ) : (
                      <span className="social is-off" title="Link not configured yet">
                        <Icon size={16} aria-hidden="true" />
                        {s.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="signature">
            <span className="signature__version">v0.1.0</span>
            <span>Built with React and Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
