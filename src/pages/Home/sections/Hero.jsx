import styles from './Hero.module.css';
import logoBg from '../../../assets/RishehLogo/mono2.pdf'

function Hero() {
    return (
        <section className={styles.hero} id="hero">
        <div className={`container ${styles.inner}`}>

            {/* ── badge ── */}
            <div className={styles.badge}>
            <span>شریک رشد کسب‌وکارهای ایرانی از 2025</span>
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
            <div className={styles.proofStats}>
                <div className={styles.stat}>
                <span className={styles.statNum}>۲۰۰+</span>
                <span className={styles.statLabel}>پروژه اجرا شده</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                <span className={styles.statNum}>۶ سال</span>
                <span className={styles.statLabel}>تجربه میدانی</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                <span className={styles.statNum}>۹۴٪</span>
                <span className={styles.statLabel}>رضایت مشتریان</span>
                </div>
            </div>

            </div>

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