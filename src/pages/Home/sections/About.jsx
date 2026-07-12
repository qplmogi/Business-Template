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
    { name: ' مها میرمحمدی ', role: 'Product Manager', image:m1 },
    { name: 'عسل کلانتری ',  role: 'Wordpress Developer',image:m2 },
    { name: ' پریماه محرابی', role: 'Front-End Developer',image:m3 },
    { name: '  سالار میرمحمدی',  role: 'Back-End Developer',image:m4},
    { name: ' مرتضی حاجاتی', role: 'Manager',image:m5 },
    { name: 'مانیا رد ' , role : 'Content Creator',image:m6 },
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
                    تیم فعال
                    </span>
                    <span className={styles.memberCount}>۱۵+ نفر</span>
                </div>

                <div className={styles.teamGrid}>
                    {team.map((member, i) => (
                    <div key={i} className={styles.memberItem}>
                        <div
                            className={styles.avatar}
                            style={{ animationDelay: `${i * 0.08}s` }}
                            >
                            <img src={member.image} alt={member.name} />
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
                    از ۱۴۰۲ تاکنون، بیش از ۲۰۰ برند ایرانی را در مسیر دیجیتال
                    همراهی کرده‌ایم. ترکیب خلاقیت، داده و استراتژی — این رمز
                    موفقیت ماست.
                </p>
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


                <AnimatedSection variant="fadeUp" delay={0.5}>

                <div className={styles.mobileTeam}>
                <div className={styles.mobileTeamHeader}>
                    <h3>اعضای تیم</h3>
                    <span>۱۵+ متخصص</span>
                </div>
                <div className={styles.mobileTeamSlider}>
                    {team.map((member) => (
                    <div key={member.name} className={styles.mobileMemberCard}>
                        <img src={member.image} alt={member.name} />
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                    </div>
                    ))}
                    
                </div>
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