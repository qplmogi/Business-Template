import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Navbar.module.css';
import logo from "../../assets/RishehLogo/mono1.pdf";

const NAV_ITEMS = [
  { label: 'خانه',        href: '#hero' },
  { label: 'درباره ما',   href: '#about' },
  { label: 'خدمات',       href: '#services' },
  { label: 'نمونه کارها', href: '#portfolio' },
  { label: 'تماس',        href: '#contact' },
];

function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');
  const [hidden,     setHidden]     = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (window.innerWidth < 900) {
        if (y > lastScroll.current + 8 && y > 80) setHidden(true);
        else if (y < lastScroll.current - 4)       setHidden(false);
      }
      lastScroll.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.replace('#', ''));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHash(`#${id}`);; },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    const previousOverflow   = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;
    if (menuOpen) {
      document.body.style.overflow    = 'hidden';
      document.body.style.touchAction = 'none';
    }
    return () => {
      document.body.style.overflow    = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [menuOpen]);

  const closeMenu     = useCallback(() => setMenuOpen(false), []);
  const handleNavClick = useCallback((href) => {
    closeMenu();
    setActiveHash(href);
  }, [closeMenu]);

  return (
    <>
      <header
        className={[
          styles.header,
          scrolled ? styles.scrolled : '',
          hidden   ? styles.hidden   : '',
        ].filter(Boolean).join(' ')}
      >
      <div className={`container ${styles.inner}`}>

          {/* ── Logo ── */}
          <a
            href="#hero"
            className={styles.logo}
            onClick={() => handleNavClick('#hero')}
            aria-label="صفحه اصلی ریشه"
          >
            <img
              src={logo}
              alt="ریشه"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>
              شرکت دیجیتال<span className={styles.logoAccent}>ریشه</span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className={styles.nav} aria-label="منوی اصلی">
            <ul className={styles.navList} role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={[
                      styles.navLink,
                      activeHash === item.href ? styles.navLinkActive : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={activeHash === item.href ? 'page' : undefined}
                  >
                    {item.label}
                    <span className={styles.navUnderline} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Desktop Actions ── */}
          <div className={styles.actions}>
            <a
              href="tel:09981183302"
              className={styles.phoneLink}
              aria-label="تماس سریع با شماره ۰۹۹۸۱۱۸۳۳۰۲"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
              تماس سریع
            </a>
            <a
              href="#contact"
              className={styles.ctaBtn}
              onClick={() => handleNavClick('#contact')}
            >
              <span className={styles.ctaBtnText}>مشاوره رایگان</span>
              <span className={styles.ctaBtnIcon} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className={styles.ctaShimmer} aria-hidden="true" />
            </a>
          </div>

          {/* ── Mobile Actions ── */}
          <div className={styles.mobileActions}>

            <button
              className={[
                styles.burger,
                menuOpen ? styles.burgerOpen : '',
              ].filter(Boolean).join(' ')}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={[
          styles.overlay,
          menuOpen ? styles.overlayOpen : '',
        ].filter(Boolean).join(' ')}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile Menu ── */}
      <nav
        id="mobile-menu"
        className={[
          styles.mobileMenu,
          menuOpen ? styles.mobileMenuOpen : '',
        ].filter(Boolean).join(' ')}
        aria-label="منوی موبایل"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? '' : undefined}
      >
        <div className={styles.menuHead}>
          <span className={styles.menuHeadTitle} aria-hidden="true" />
          <button
            className={styles.menuClose}
            onClick={closeMenu}
            aria-label="بستن منو"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className={styles.menuLinks} role="list">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={[
                  styles.menuLink,
                  activeHash === item.href ? styles.menuLinkActive : '',
                ].filter(Boolean).join(' ')}
                onClick={() => handleNavClick(item.href)}
                style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : '0s' }}
                aria-current={activeHash === item.href ? 'page' : undefined}
              >
                <span className={styles.menuLinkNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.menuLinkLabel}>{item.label}</span>
                <svg
                  className={styles.menuLinkArrow}
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.menuFoot}>
          <a
            href="#contact"
            className={styles.menuCta}
            onClick={() => handleNavClick('#contact')}
          >
            مشاوره رایگان دریافت کنید
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="tel:09981183302"
            className={styles.menuPhone}
            aria-label="تماس با شماره ۰۹۹۸۱۱۸۳۳۰۲"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.2 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            ۰۹۹۸۱۱۸۳۳۰۲
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;  