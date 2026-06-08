import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Services.module.css';

const services = [
  {
    icon: '🎨',
    tag: 'Design',
    title: 'طراحی UI/UX',
    text: 'طراحی رابط کاربری مدرن و تجربه کاربری روان که مخاطب را به مشتری تبدیل می‌کند.',
    features: ['طراحی سیستم دیزاین', 'پروتوتایپ تعاملی', 'تست کاربری'],
    color: '#6366f1',
    light: '#eef2ff',
  },
  {
    icon: '💻',
    tag: 'Development',
    title: 'توسعه وب',
    text: 'ساخت وب‌سایت‌های سریع، امن و مقیاس‌پذیر با جدیدترین تکنولوژی‌های روز.',
    features: ['React / Next.js', 'بهینه‌سازی سرعت', 'طراحی ریسپانسیو'],
    color: '#2563eb',
    light: '#eff6ff',
  },
  {
    icon: '📈',
    tag: 'SEO',
    title: 'سئو تکنیکال',
    text: 'بهینه‌سازی موتور جستجو با رویکرد داده‌محور برای رشد پایدار ترافیک آلی.',
    features: ['آدیت فنی سایت', 'تحقیق کلمات کلیدی', 'لینک‌سازی'],
    color: '#0891b2',
    light: '#ecfeff',
  },
  {
    icon: '📣',
    tag: 'Marketing',
    title: 'دیجیتال مارکتینگ',
    text: 'استراتژی بازاریابی یکپارچه دیجیتال برای رشد برند و افزایش فروش.',
    features: ['تبلیغات گوگل و اینستاگرام', 'ایمیل مارکتینگ', 'آنالیز داده'],
    color: '#0f172a',
    light: '#f8fafc',
  },
  {
    icon: '✦',
    tag: 'Branding',
    title: 'برندینگ',
    text: 'خلق هویت بصری منسجم و استراتژی برند که در ذهن مخاطب ماندگار می‌شود.',
    features: ['لوگو و هویت بصری', 'راهنمای برند', 'بسته‌بندی'],
    color: '#7c3aed',
    light: '#f5f3ff',
  },
  {
    icon: '✍️',
    tag: 'Content',
    title: 'تولید محتوا',
    text: 'محتوای هدفمند و باکیفیت که اعتماد مخاطب را جلب و او را به اقدام ترغیب می‌کند.',
    features: ['محتوای سئو‌محور', 'شبکه‌های اجتماعی', 'ویدیو مارکتینگ'],
    color: '#0369a1',
    light: '#f0f9ff',
  },
];

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">

        {/* ── Header ── */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>خدمات ما</span>
            </div>
            <h2 className={styles.heading}>
              همه چیز که برای
              <span className={styles.gradientText}> رشد دیجیتال </span>
              نیاز دارید
            </h2>
            <p className={styles.subtext}>
              از استراتژی تا اجرا — تیم ما در هر مرحله کنارتان است.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <AnimatedSection key={s.title} variant="fadeUp" delay={i * 0.08}>
              <div
                className={styles.card}
                style={{ '--card-accent': s.color, '--card-light': s.light }}
              >
                <div className={styles.cardTop}>
                  <div
                    className={styles.iconBox}
                    style={{ background: s.light }}
                  >
                    <span className={styles.icon}>{s.icon}</span>
                  </div>
                  <span
                    className={styles.cardTag}
                    style={{ color: s.color, background: `${s.color}18` }}
                  >
                    {s.tag}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardText}>{s.text}</p>
                </div>

                <ul className={styles.featureList}>
                  {s.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span
                        className={styles.featureDot}
                        style={{ background: s.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <span
                    className={styles.learnMore}
                    style={{ color: s.color }}
                  >
                    بیشتر بدانید
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div
                  className={styles.hoverBar}
                  style={{ background: s.color }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── CTA ── */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className={styles.cta}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaText}>
                <h3>پروژه‌ای در ذهن دارید؟</h3>
                <p>با ما صحبت کنید — مشاوره اول رایگان است.</p>
              </div>
              <a href="#contact" className={styles.ctaBtn}>
                شروع پروژه
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default Services;