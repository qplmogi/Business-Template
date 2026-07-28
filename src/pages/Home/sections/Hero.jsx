import styles from './Hero.module.css';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import logoBg from '../../../assets/RishehLogo/mono2.pdf';

const stats = [
    { value: '۲۰۰+', label: 'پروژه اجرا شده' },
    { value: '۶ سال', label: 'تجربه میدانی'   },
    { value: '۹۴٪',  label: 'رضایت مشتریان'  },
];

function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={`container ${styles.inner}`}>
                <AnimatedSection duration={0.9} variant="fadeUp">

                {/* ── badge ── */}
                <div className={styles.badge}>
                    <span className={styles.badgeDot} aria-hidden="true" />
                    <span>شریک رشد کسب‌وکارهای ایرانی از ۱۴۰۴</span>
                </div>

                {/* ── headline ── */}
                <h1 className={styles.headline}>
                    از ریشه رشد می‌کنید،
                    <br />
                    <span className={styles.headlineAccent}>ما مطمئن می‌شویم.</span>
                </h1>

                {/* ── subtext ── */}
                <p className={styles.subtext}>
                    استراتژی دیجیتال، سیستم‌سازی بازاریابی و اجرای دقیق —
                    برای کسب‌وکارهایی که می‌خواهند پایدار و هوشمند رشد کنند.
                </p>

                {/* ── CTA ── */}
                <div className={styles.ctaGroup}>
                    <a href="#contact" className={styles.ctaPrimary}>
                    شروع همکاری
                    </a>
                    <a href="#portfolio" className={styles.ctaSecondary}>
                    مشاهده نمونه کارها
                    </a>
                </div>

                {/* ── social proof ── */}
                <div className={styles.proof}>
                    <dl className={styles.proofStats}>
                    {stats.map((s, i) => (
                        <>
                        <div key={s.label} className={styles.stat}>
                            <dt className={styles.statLabel}>{s.label}</dt>
                            <dd className={styles.statNum}>{s.value}</dd>
                        </div>
                        {i < stats.length - 1 && (
                            <div
                            key={`sep-${i}`}
                            className={styles.statDivider}
                            aria-hidden="true"
                            />
                        )}
                        </>
                    ))}
                    </dl>
                </div>
                </AnimatedSection>
            </div>
                {/* ── watermark لوگو در پس‌زمینه ── */}
                <div className={styles.bgWatermark} aria-hidden="true">
                    <img
                    src={logoBg}
                    alt=""
                    className={styles.watermarkImg}
                    />
                </div> 
        </section>
    );
}

export default Hero;