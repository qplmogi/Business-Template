import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './About.module.css';

const stats = [
    { value: '۲۰۰+', label: 'پروژه تحویل‌شده', percent: 92 },
    { value: '۸۵+', label: 'مشتری راضی', percent: 85 },
    { value: '۶+', label: 'سال تجربه', percent: 70 },
    { value: '۱۵+', label: 'عضو تیم', percent: 78 },
];

function About() {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <div className={styles.wrapper}>

                    {/* ═══════════════════════════════
                        BRAND VISUAL
                    ═══════════════════════════════ */}
                    <div className={styles.visual}>

                        <div className={styles.visualHeader}>
                            <span className={styles.visualLine} />
                            <span>ریشه؛ از ایده تا اجرا</span>
                        </div>

                        <div className={styles.brandBlock}>
                            <span className={styles.brandOutline}>
                                RISHEH
                            </span>

                            <span className={styles.brandSolid}>
                                ریشه
                            </span>

                            <p className={styles.brandStatement}>
                                طراحی می‌کنیم،
                                <br />
                                می‌سازیم،
                                <br />
                                رشد می‌دهیم.
                            </p>
                        </div>

                        <div className={styles.metricCard}>
                            <div className={styles.metricTop}>
                                <div>
                                    <strong className={styles.metricValue}>
                                        ۹۴٪
                                    </strong>

                                    <span className={styles.metricLabel}>
                                        رضایت مشتریان
                                    </span>
                                </div>
                            </div>

                            <div className={styles.metricBar}>
                                <div
                                    className={styles.metricFill}
                                    style={{ width: '94%' }}
                                />
                            </div>
                        </div>

                    </div>


                    {/* ═══════════════════════════════
                        CONTENT
                    ═══════════════════════════════ */}
                    <div className={styles.content}>

                        <AnimatedSection variant="fadeUp" delay={0.1}>
                            <div className={styles.eyebrow}>
                                <span className={styles.eyebrowNum}>۰۲</span>

                                <span
                                    className={styles.eyebrowLine}
                                    aria-hidden="true"
                                />

                                <span className={styles.eyebrowText}>
                                    درباره ما
                                </span>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeUp" delay={0.2}>
                            <h2 className={styles.heading}>
                                ما ایده را به
                                <span className={styles.gradientText}>
                                    نتیجه واقعی
                                </span>
                                <br />
                                تبدیل می‌کنیم
                            </h2>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeUp" delay={0.3}>
                            <p className={styles.lead}>
                                ریشه یک تیم خلاق و فنی است که از سال ۱۴۰۲
                                در مسیر ساخت تجربه‌های دیجیتال فعالیت می‌کند.
                                ما با ترکیب طراحی، تکنولوژی و استراتژی،
                                ایده‌ها را به محصولاتی تبدیل می‌کنیم که
                                دیده می‌شوند، استفاده می‌شوند و رشد می‌کنند.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection variant="fadeUp" delay={0.35}>
                            <p className={styles.description}>
                                برای ما هر پروژه فقط یک سفارش نیست؛
                                مسئله‌ای است که باید درست فهمیده شود،
                                هوشمندانه طراحی شود و با دقت به نتیجه برسد.
                            </p>
                        </AnimatedSection>

                        {/* ══ STATS ══ */}
                        <AnimatedSection variant="fadeUp" delay={0.4}>
                            <dl className={styles.statsGrid}>
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className={styles.statItem}
                                    >
                                        <div className={styles.statTop}>
                                            <dd className={styles.statValue}>
                                                {stat.value}
                                            </dd>

                                            <span
                                                className={styles.statPercent}
                                                aria-hidden="true"
                                            >
                                                {stat.percent}٪
                                            </span>
                                        </div>

                                        <dt className={styles.statLabel}>
                                            {stat.label}
                                        </dt>

                                        <div
                                            className={styles.statTrack}
                                            role="meter"
                                            aria-valuenow={stat.percent}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-label={`${stat.label}: ${stat.percent} درصد`}
                                        >
                                            <div
                                                className={styles.statFill}
                                                style={{
                                                    '--w': `${stat.percent}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </AnimatedSection>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;