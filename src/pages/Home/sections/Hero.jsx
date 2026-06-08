import styles from './Hero.module.css';

const stats = [
    { value: '۱۲۰+', label: 'پروژه موفق' },
    { value: '۹۴٪',  label: 'رضایت مشتری' },
    { value: '۶+',   label: 'سال تجربه' },
];

const bars = [45, 72, 58, 88, 65, 94, 78];

function Hero() {
    return (
        <section className={styles.hero} id="hero">

        {/* ── پس‌زمینه ── */}
        <div className={styles.bg} aria-hidden="true">
            <div className={styles.bgGrid} />
            <div className={styles.bgNoise} />
            <div className={styles.bgOrb} />
            <div className={styles.bgRing1} />
            <div className={styles.bgRing2} />
            <div className={styles.bgRing3} />
            <div className={styles.geoCross} />
            <div className={styles.geoSquare} />
        </div>

        <div className={`container ${styles.inner}`}>

            {/* ── نوار بالا ── */}
            <div className={styles.topStrip}>
            <div className={styles.brandMark}>
                <span className={styles.brandDot} />
                <span className={styles.brandName}>نوین دیجیتال</span>
            </div>
            <span className={styles.topMeta}>DIGITAL AGENCY — ۱۳۹۸</span>
            </div>

            {/* ── لیبل عمودی ── */}
            <div className={styles.floatLabel} aria-hidden="true">
            <div className={styles.flLine} />
            <span className={styles.flTag}>DESIGN STUDIO</span>
            </div>

            {/* ── تیتر اصلی ── */}
            <div className={styles.headlineZone}>

            <div className={styles.eyebrowTag}>
                <span className={styles.eyebrowDash} />
                <span className={styles.eyebrowText}>تجربه دیجیتال نسل بعد</span>
                <span className={styles.eyebrowDash} />
            </div>

            <h1 className={styles.mainTitle}>
                <span className={styles.titleLine1}>ما ایده را</span>
                <span className={styles.titleLine2}>
                به واقعیت
                <span className={styles.inlineBadge}>
                    <span className={styles.inlineBadgeText}>+۱۲۰ پروژه</span>
                </span>
                </span>
                <span className={styles.titleLine3}>تبدیل می‌کنیم</span>
            </h1>

            <div className={styles.subZone}>
                <p className={styles.subText}>
                طراحی سایت، سئو، برندینگ و دیجیتال مارکتینگ —
                با <em className={styles.subEm}>استراتژی داده‌محور</em> که
                نتایج واقعی می‌سازد.
                </p>
                <div className={styles.subDivider} />
                <div className={styles.ctaGroup}>
                <a href="#contact" className={styles.ctaPrimary}>
                    شروع مشاوره رایگان
                    <span className={styles.ctaArrow}>←</span>
                </a>
                <a href="#portfolio" className={styles.ctaSecondary}>
                    نمونه کارها را ببین
                </a>
                </div>
            </div>
            </div>

            {/* ── نوار پایین ── */}
            <div className={styles.bottomStrip}>
            <div className={styles.statsRow}>
                {stats.map((s, i) => (
                <>
                    {i > 0 && <div key={`sep-${i}`} className={styles.statSep} />}
                    <div key={s.label} className={styles.statItem}>
                    <span className={styles.statNum}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                    </div>
                </>
                ))}
            </div>
            <div className={styles.scrollHint} aria-hidden="true">
                <div className={styles.scrollLine} />
                <span>SCROLL</span>
            </div>
            </div>

        </div>
        </section>
    );
}

export default Hero;