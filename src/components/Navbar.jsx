import { useEffect, useRef, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { scrollToId } from '../lib/scroll.js';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'Categories', id: 'categories' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  const submit = (e) => {
    e.preventDefault();
    setSearchOpen(false);
    scrollToId('products');
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => go(e, 'home')} aria-label="Tools Art, home">
          <Logo />
        </a>

        <form
          className={`navbar__search ${searchOpen ? 'is-open' : ''}`}
          role="search"
          onSubmit={submit}
        >
          <Search size={16} className="navbar__search-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search products or formats"
            aria-label="Search products"
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="navbar__search-clear"
              onClick={() => {
                onQueryChange('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </form>

        <nav
          id="main-nav"
          className={`navbar__links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main"
        >
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={() => {
              setSearchOpen((v) => !v);
              setMenuOpen(false);
            }}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => {
              setMenuOpen((v) => !v);
              setSearchOpen(false);
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
