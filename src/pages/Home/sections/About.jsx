import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './About.module.css';
import m1 from '../../../assets/member/مها میرمحمدی.jpeg';
import m2 from '../../../assets/member/عسل کلانتری.jpg';
import m3 from '../../../assets/member/پریماه محرابی.jpeg';
import m4 from '../../../assets/member/سالار میرمحمدی.jpg';
import m5 from '../../../assets/member/مرتضی حاجاتی.jpg';
import m6 from '../../../assets/member/مانیا راد.jpg';

const stats = [
    { value: '۲۰۰+', label: 'پروژه تحویل‌شده', percent: 92 },
    { value: '۸۵+',  label: 'مشتری راضی',       percent: 85 },
    { value: '۶+',   label: 'سال تجربه',         percent: 70 },
    { value: '۱۵+',  label: 'عضو تیم',           percent: 78 },
];

const team = [
    { name: 'مها میرمحمدی',   role: 'Product Manager',      image: m1 },
    { name: 'عسل کلانتری',    role: 'Wordpress Developer',   image: m2 },
    { name: 'پریماه محرابی',  role: 'Front-End Developer',   image: m3 },
    { name: 'سالار میرمحمدی', role: 'Back-End Developer',    image: m4 },
    { name: 'مرتضی حاجاتی',  role: 'Manager',               image: m5 },
    { name: 'مانیا راد',      role: 'Content Creator',       image: m6 },
];

const tags = [
    'طراحی UI/UX', 'توسعه وب', 'سئو تکنیکال',
    'برندینگ', 'دیجیتال مارکتینگ', 'تولید محتوا',
];

function About() {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <div className={styles.wrapper}>

                {/* ══ VISUAL — دسکتاپ ══ */}
                <AnimatedSection variant="fadeRight" delay={0.1} className={styles.visual}>

                    <div className={styles.teamCard}>
                    <div className={styles.teamCardHeader}>
                        <span className={styles.liveTag}>تیم فعال</span>
                        <span className={styles.memberCount}>۱۵+ نفر</span>
                    </div>

                    <ul className={styles.teamGrid} role="list">
                        {team.map((member, i) => (
                        <li
                            key={member.name}
                            className={styles.memberItem}
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <div className={styles.avatar}>
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                width={36}
                                height={36}
                            />
                            </div>
                            <div className={styles.memberInfo}>
                            <span className={styles.memberName}>{member.name}</span>
                            <span className={styles.memberRole}>{member.role}</span>
                            </div>
                        </li>
                        ))}
                    </ul>

                    <div className={styles.teamFooter} aria-hidden="true">
                        <div className={styles.avatarStack}>
                        {team.slice(0, 4).map((m, i) => (
                            <div
                            key={m.name}
                            className={styles.stackAvatar}
                            style={{ zIndex: 4 - i }}
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
                        <div>
                        <p className={styles.metricValue}>۹۴٪</p>
                        <p className={styles.metricLabel}>رضایت مشتریان</p>
                        </div>
                    </div>
                    <div
                        className={styles.metricBar}
                        role="meter"
                        aria-valuenow={94}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="رضایت مشتریان ۹۴ درصد"
                    >
                        <div className={styles.metricFill} style={{ width: '94%' }} />
                    </div>
                    </div>

                </AnimatedSection>

                {/* ══ CONTENT ══ */}
                <div className={styles.content}>

                    <AnimatedSection variant="fadeUp" delay={0.1}>
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowLine} aria-hidden="true" />
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
                        از ۱۴۰۲ تاکنون، بیش از ۲۰۰ برند ایرانی را در مسیر دیجیتال
                        همراهی کرده‌ایم. ترکیب خلاقیت، داده و استراتژی — این رمز
                        موفقیت ماست.
                    </p>
                    </AnimatedSection>

                    {/* stats */}
                    <AnimatedSection variant="fadeUp" delay={0.4}>
                    <dl className={styles.statsGrid}>
                        {stats.map((s) => (
                        <div key={s.label} className={styles.statItem}>
                            <div className={styles.statTop}>
                            <dd className={styles.statValue}>{s.value}</dd>
                            <span className={styles.statPercent} aria-hidden="true">
                                {s.percent}٪
                            </span>
                            </div>
                            <dt className={styles.statLabel}>{s.label}</dt>
                            <div
                            className={styles.statTrack}
                            role="meter"
                            aria-valuenow={s.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${s.label}: ${s.percent} درصد`}
                            >
                            <div
                                className={styles.statFill}
                                style={{ '--w': `${s.percent}%` }}
                            />
                            </div>
                        </div>
                        ))}
                    </dl>
                    </AnimatedSection>

                    {/* mobile team */}
                    <AnimatedSection variant="fadeUp" delay={0.5}>
                    <div className={styles.mobileTeam}>
                        <div className={styles.mobileTeamHeader}>
                        <h3>اعضای تیم</h3>
                        <span>۱۵+ متخصص</span>
                        </div>
                        <ul className={styles.mobileTeamSlider} role="list">
                        {team.map((member) => (
                            <li key={member.name} className={styles.mobileMemberCard}>
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                width={80}
                                height={80}
                            />
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </AnimatedSection>

                    {/* tags */}
                    <AnimatedSection variant="fadeUp" delay={0.5}>
                    <ul className={styles.tags} role="list" aria-label="حوزه‌های تخصصی">
                        {tags.map((tag) => (
                        <li key={tag} className={styles.tag}>{tag}</li>
                        ))}
                    </ul>
                    </AnimatedSection>

                </div>
                </div>
            </div>
        </section>
    );
}

export default About;