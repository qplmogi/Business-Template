import AnimatedSection from '../../../src/components/AnimatedSection/AnimatedSection';
import styles from './About.module.css';

const stats = [
    { value: '۱۲۰+', label: 'پروژه تحویل‌شده', percent: 92 },
    { value: '۸۵+',  label: 'مشتری راضی',       percent: 85 },
    { value: '۶+',   label: 'سال تجربه',         percent: 70 },
    { value: '۱۵+',  label: 'عضو تیم',           percent: 78 },
    ];

const team = [
    { name: 'سارا م.', role: 'UI Designer',     color: '#6366f1' },
    { name: 'علی ر.',  role: 'Dev Lead',         color: '#2563eb' },
    { name: 'نیلو ف.', role: 'SEO Expert',       color: '#0891b2' },
    { name: 'رضا ک.',  role: 'Brand Strategist', color: '#0f172a' },
    { name: 'مینا ت.', role: 'Content Creator',  color: '#7c3aed' },
    { name: 'فرهاد ن.','role': 'Marketing',      color: '#0369a1' },
];

const tags = [
'طراحی UI/UX','توسعه وب','سئو تکنیکال',
'برندینگ','دیجیتال مارکتینگ','تولید محتوا',
];

function About() {
    return (
        <section className={styles.about} id="about">
        <div className="container">

            <div className={styles.wrapper}>

            {/* ══ VISUAL — فقط دسکتاپ ══ */}
            <AnimatedSection variant="fadeRight" delay={0.1} className={styles.visual}>
                <div className={styles.teamCard}>

                <div className={styles.teamCardHeader}>
                    <span className={styles.liveTag}>
                    <i className={styles.liveDot} />
                    تیم فعال
                    </span>
                    <span className={styles.memberCount}>۱۵+ نفر</span>
                </div>

                <div className={styles.teamGrid}>
                    {team.map((member, i) => (
                    <div key={i} className={styles.memberItem}>
                        <div
                        className={styles.avatar}
                        style={{
                            background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
                            animationDelay: `${i * 0.08}s`,
                        }}
                        >
                        {member.name[0]}
                        </div>
                        <div className={styles.memberInfo}>
                        <span className={styles.memberName}>{member.name}</span>
                        <span className={styles.memberRole}>{member.role}</span>
                        </div>
                    </div>
                    ))}
                </div>

                <div className={styles.teamFooter}>
                    <div className={styles.avatarStack}>
                    {team.slice(0, 4).map((m, i) => (
                        <div
                        key={i}
                        className={styles.stackAvatar}
                        style={{ background: m.color, zIndex: 4 - i }}
                        >
                        {m.name[0]}
                        </div>
                    ))}
                    <span className={styles.moreCount}>+۱۱</span>
                    </div>
                    <span className={styles.footerText}>و ۱۱ متخصص دیگر</span>
                </div>

                </div>

                {/* metric card */}
                <div className={styles.metricCard}>
                <div className={styles.metricTop}>
                    <span className={styles.metricIcon}>📈</span>
                    <div>
                    <p className={styles.metricValue}>۹۴٪</p>
                    <p className={styles.metricLabel}>رضایت مشتریان</p>
                    </div>
                </div>
                <div className={styles.metricBar}>
                    <div className={styles.metricFill} style={{ width: '94%' }} />
                </div>
                </div>
            </AnimatedSection>

            {/* ══ CONTENT ══ */}
            <div className={styles.content}>

                <AnimatedSection variant="fadeUp" delay={0.1}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowLine} />
                    <span className={styles.eyebrowText}>درباره ما</span>
                </div>
                </AnimatedSection>

                <AnimatedSection variant="fadeUp" delay={0.2}>
                <h2 className={styles.heading}>
                    ما ایده را به
                    <br />
                    <span className={styles.gradientText}>نتیجه واقعی</span>
                    <br />
                    تبدیل می‌کنیم
                </h2>
                </AnimatedSection>

                <AnimatedSection variant="fadeUp" delay={0.3}>
                <p className={styles.lead}>
                    از ۱۳۹۸ تاکنون، بیش از ۱۲۰ برند ایرانی را در مسیر دیجیتال
                    همراهی کرده‌ایم. ترکیب خلاقیت، داده و استراتژی — این رمز
                    موفقیت ماست.
                </p>
                </AnimatedSection>

                {/* mobile metric — فقط موبایل */}
                <AnimatedSection variant="fadeUp" delay={0.35}>
                <div className={styles.mobileMetric}>
                    <div className={styles.mobileMetricItem}>
                    <strong>۹۴٪</strong>
                    <span>رضایت مشتریان</span>
                    </div>
                    <div className={styles.mobileMetricDivider} />
                    <div className={styles.mobileMetricItem}>
                    <strong>۶+</strong>
                    <span>سال تجربه</span>
                    </div>
                    <div className={styles.mobileMetricDivider} />
                    <div className={styles.mobileMetricItem}>
                    <strong>۱۲۰+</strong>
                    <span>پروژه</span>
                    </div>
                </div>
                </AnimatedSection>

                {/* stats */}
                <AnimatedSection variant="fadeUp" delay={0.4}>
                <div className={styles.statsGrid}>
                    {stats.map((s, i) => (
                    <div key={i} className={styles.statItem}>
                        <div className={styles.statTop}>
                        <strong className={styles.statValue}>{s.value}</strong>
                        <span className={styles.statPercent}>{s.percent}٪</span>
                        </div>
                        <span className={styles.statLabel}>{s.label}</span>
                        <div className={styles.statTrack}>
                        <div
                            className={styles.statFill}
                            style={{ '--w': `${s.percent}%` }}
                        />
                        </div>
                    </div>
                    ))}
                </div>
                </AnimatedSection>

                {/* tags */}
                <AnimatedSection variant="fadeUp" delay={0.5}>
                <div className={styles.tags}>
                    {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                </AnimatedSection>

            </div>
            </div>
        </div>
        </section>
    );
}

export default About;