import styles from './Footer.module.css';

const links = {
services: [
    { label: 'طراحی UI/UX',       href: '#services' },
    { label: 'توسعه وب',           href: '#services' },
    { label: 'سئو تکنیکال',        href: '#services' },
    { label: 'دیجیتال مارکتینگ',   href: '#services' },
    { label: 'برندینگ',            href: '#services' },
    { label: 'تولید محتوا',        href: '#services' },
],
company: [
    { label: 'درباره ما',     href: '#about' },
    { label: 'نمونه کارها',   href: '#portfolio' },
    { label: 'تماس با ما',    href: '#contact' },
    { label: 'وبلاگ',         href: '#' },
    { label: 'فرصت‌های شغلی', href: '#' },
],
};

const socials = [
{
    name: 'اینستاگرام',
    href: '#',
    icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
    ),
},
{
    name: 'لینکدین',
    href: '#',
    icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
    ),
},
{
    name: 'توییتر',
    href: '#',
    icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
    ),
},
{
    name: 'تلگرام',
    href: '#',
    icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
    ),
},
];

function Footer() {
const year = new Date().getFullYear();

return (
    <footer className={styles.footer}>

    {/* ── CTA Banner ── */}
    <div className={styles.banner}>
        <div className="container">
        <div className={styles.bannerInner}>
            <div className={styles.bannerText}>
            <h2>آماده شروع هستید؟</h2>
            <p>همین امروز با ما تماس بگیرید — مشاوره اول رایگان است.</p>
            </div>
            <a href="#contact" className={styles.bannerBtn}>
            مشاوره رایگان
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            </a>
        </div>
        </div>
    </div>

    {/* ── Main ── */}
    <div className={styles.main}>
        <div className={`container ${styles.mainInner}`}>

        {/* Brand */}
        <div className={styles.brandCol}>
            <a href="#hero" className={styles.logo}>
            <span className={styles.logoDot}>●</span>
            نوین دیجیتال
            </a>
            <p className={styles.brandDesc}>
            آژانس دیجیتال تخصصی برای رشد کسب‌وکارهای ایرانی.
            از استراتژی تا اجرا، کنارتان هستیم.
            </p>
            <div className={styles.socials}>
            {socials.map((s) => (
                <a
                    key={s.name}
                    href={s.href}
                    className={styles.socialBtn}
                    aria-label={s.name}
                    title={s.name}
                    >
                    {s.icon}
                </a>
            ))}
            </div>
            <div className={styles.trustBadge}>
            <span className={styles.trustedDot} />
            <span>بیش از ۸۵ مشتری راضی</span>
            </div>
        </div>

        {/* Services */}
        <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>خدمات</h4>
            <ul className={styles.linkList}>
            {links.services.map((l) => (
                <li key={l.label}>
                <a href={l.href} className={styles.footerLink}>{l.label}</a>
                </li>
            ))}
            </ul>
        </div>

        {/* Company */}
        <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>شرکت</h4>
            <ul className={styles.linkList}>
            {links.company.map((l) => (
                <li key={l.label}>
                <a href={l.href} className={styles.footerLink}>{l.label}</a>
                </li>
            ))}
            </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>خبرنامه</h4>
            <p className={styles.newsletterDesc}>
            جدیدترین مقالات و نکات دیجیتال مارکتینگ را دریافت کنید.
            </p>
            <div className={styles.newsletterForm}>
            <input
                type="email"
                placeholder="ایمیل شما..."
                className={styles.newsletterInput}
                dir="ltr"
            />
            <button className={styles.newsletterBtn} aria-label="عضویت">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
            </div>
            <p className={styles.newsletterNote}>🔒 اطلاعات شما نزد ما محفوظ است.</p>
        </div>

        </div>
    </div>

    {/* ── Bottom ── */}
    <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
        <p className={styles.copyright}>
            © {year} نوین دیجیتال — تمام حقوق محفوظ است.
        </p>
        <div className={styles.bottomLinks}>
            <a href="#">حریم خصوصی</a>
            <span className={styles.divider} />
            <a href="#">شرایط استفاده</a>
            <span className={styles.divider} />
            <a href="#">نقشه سایت</a>
        </div>
        </div>
    </div>

    </footer>
);
}

export default Footer;