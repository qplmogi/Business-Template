import styles from './Hero.module.css';

const stats = [
    { value: '۱۲۰+', label: 'پروژه موفق' },
    { value: '۶+',   label: 'سال تجربه'  },
    { value: '۹۴٪',  label: 'رضایت مشتری'},
];

const bars = [45, 72, 58, 88, 65, 94, 78];

function Hero() {
    return (
        <section className={styles.hero} id="hero">

            {/* ── Background ── */}
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.bgGradient} />
                <div className={styles.bgGrid} />
                <div className={styles.bgGlow1} />
                <div className={styles.bgGlow2} />
            </div>

            <div className={`container ${styles.inner}`}>

                {/* ══ TEXT COL ══ */}
                <div className={styles.textCol}>

                {/* eyebrow */}
                <div className={`${styles.eyebrow} ${styles.anim1}`}>
                    <span className={styles.eyebrowDot} />
                    <span>آژانس دیجیتال تخصصی</span>
                    <span className={styles.eyebrowSep} aria-hidden="true">·</span>
                    <span>از ۱۳۹۸</span>
                </div>

                {/* headline */}
                <div className={`${styles.headlineWrap} ${styles.anim2}`}>
                    <p className={styles.headlineSup}>ما کمک می‌کنیم</p>
                    <h1 className={styles.headline}>
                    کسب‌وکارتان
                    <br />
                    <span className={styles.headlineGradient}>دیجیتال رشد</span>
                    <br />
                    کند
                    </h1>
                </div>

                {/* body */}
                <p className={`${styles.body} ${styles.anim3}`}>
                    از طراحی سایت و سئو تا برندینگ و دیجیتال مارکتینگ — تیم ما با
                    استراتژی داده‌محور، نتایج واقعی می‌سازد.
                </p>

                {/* CTA */}
                <div className={`${styles.ctaGroup} ${styles.anim4}`}>
                    <a href="#contact" className={styles.ctaPrimary}>
                    <span>مشاوره رایگان</span>
                    <span className={styles.ctaArrow}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                    </a>
                    <a href="#portfolio" className={styles.ctaGhost}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    مشاهده کارها
                    </a>
                </div>

                {/* stats — موبایل زیر CTA */}
                <div className={`${styles.statsRow} ${styles.anim5}`}>
                    {stats.map((s, i) => (
                    <div key={i} className={styles.statItem}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                    </div>
                    ))}
                </div>

                {/* social proof */}
                <div className={`${styles.proof} ${styles.anim5}`}>
                    <div className={styles.proofAvatars}>
                    {['ع','م','س','ف'].map((l, i) => (
                        <span
                        key={i}
                        className={styles.proofAvatar}
                        style={{
                            zIndex: 4 - i,
                            background: ['#6366f1','#2563eb','#0891b2','#7c3aed'][i],
                        }}
                        >
                        {l}
                        </span>
                    ))}
                    </div>
                    <div className={styles.proofText}>
                    <div className={styles.proofStars}>★★★★★</div>
                    <p>بیش از ۸۵ مشتری راضی</p>
                    </div>
                </div>

                </div>

                {/* ══ VISUAL COL — فقط دسکتاپ ══ */}
                <div className={`${styles.visualCol} ${styles.anim6}`} aria-hidden="true">
                <div className={styles.card}>

                    {/* card header */}
                    <div className={styles.cardHeader}>
                    <div className={styles.cardDots}>
                        <span style={{ background: '#f87171' }} />
                        <span style={{ background: '#fbbf24' }} />
                        <span style={{ background: '#34d399' }} />
                    </div>
                    <span className={styles.cardTitle}>گزارش عملکرد</span>
                    <span className={styles.cardLive}>
                        <i className={styles.livePulse} />
                        زنده
                    </span>
                    </div>

                    {/* metric */}
                    <div className={styles.metricRow}>
                    <div className={styles.metricMain}>
                        <span className={styles.metricVal}>+۱۴۷٪</span>
                        <span className={styles.metricLabel}>رشد ترافیک آلی</span>
                    </div>
                    <div className={styles.metricBadge}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                        </svg>
                        این ماه
                    </div>
                    </div>

                    {/* chart */}
                    <div className={styles.chartWrap}>
                    <div className={styles.chart}>
                        {bars.map((h, i) => (
                        <div key={i} className={styles.barWrap}>
                            <div
                            className={styles.bar}
                            style={{
                                '--h': `${h}%`,
                                animationDelay: `${0.8 + i * 0.08}s`,
                            }}
                            />
                        </div>
                        ))}
                    </div>
                    <div className={styles.chartLabels}>
                        {['ش','ی','د','س','چ','پ','ج'].map((d) => (
                        <span key={d}>{d}</span>
                        ))}
                    </div>
                    </div>

                    {/* card stats */}
                    <div className={styles.cardStats}>
                    {stats.map((s) => (
                        <div key={s.label} className={styles.cardStatItem}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                        </div>
                    ))}
                    </div>

                </div>

                {/* float award */}
                <div className={styles.floatAward}>
                    <span>🏆</span>
                    <div>
                    <p>برترین آژانس</p>
                    <p>دیجیتال ۱۴۰۲</p>
                    </div>
                </div>

                {/* float clients */}
                <div className={styles.floatClients}>
                    <div className={styles.floatClientsTop}>
                    <span>🤝</span>
                    <strong>مشتریان اخیر</strong>
                    </div>
                    <div className={styles.floatClientList}>
                    {['برند الف','استارتاپ ب','شرکت ج','گروه د'].map((c, i) => (
                        <span key={i} className={styles.floatClientItem}>{c}</span>
                    ))}
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;