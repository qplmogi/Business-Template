import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Portfolio.module.css';

const filters = ['همه', 'طراحی سایت', 'برندینگ', 'سئو', 'دیجیتال مارکتینگ'];

const projects = [
  {
    id: 1,
    title: 'فروشگاه آنلاین مد و پوشاک',
    category: 'طراحی سایت',
    tag: 'E-Commerce',
    desc: 'طراحی و توسعه فروشگاه اینترنتی با تجربه خرید روان و افزایش ۶۰٪ نرخ تبدیل.',
    metrics: [{ label: 'نرخ تبدیل', value: '+۶۰٪' }, { label: 'بازدید', value: '۴۵K' }],
    color: '#6366f1',
    light: '#eef2ff',
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'هویت بصری برند آرایشی',
    category: 'برندینگ',
    tag: 'Brand Identity',
    desc: 'خلق هویت بصری کامل شامل لوگو، پالت رنگی و راهنمای برند.',
    metrics: [{ label: 'تحویل', value: '۳ هفته' }, { label: 'رضایت', value: '۱۰۰٪' }],
    color: '#ec4899',
    light: '#fdf2f8',
    icon: '✨',
  },
  {
    id: 3,
    title: 'رشد ارگانیک پلتفرم آموزشی',
    category: 'سئو',
    tag: 'Technical SEO',
    desc: 'بهینه‌سازی فنی و محتوایی که در ۶ ماه ترافیک آلی را ۳ برابر کرد.',
    metrics: [{ label: 'رشد ترافیک', value: '+۲۸۰٪' }, { label: 'کلمات رتبه ۱', value: '۱۲۰+' }],
    color: '#0891b2',
    light: '#ecfeff',
    icon: '📈',
  },
  {
    id: 4,
    title: 'کمپین دیجیتال رستوران زنجیره‌ای',
    category: 'دیجیتال مارکتینگ',
    tag: 'Performance',
    desc: 'اجرای کمپین یکپارچه در گوگل و اینستاگرام با ROAS بیش از ۴ برابر.',
    metrics: [{ label: 'ROAS', value: '۴.۲x' }, { label: 'سرنخ', value: '۸۰۰+' }],
    color: '#f59e0b',
    light: '#fffbeb',
    icon: '🍽️',
  },
  {
    id: 5,
    title: 'پلتفرم مدیریت مالی',
    category: 'طراحی سایت',
    tag: 'SaaS UI',
    desc: 'طراحی داشبورد پیچیده مالی با تمرکز بر سادگی و قابلیت استفاده آسان.',
    metrics: [{ label: 'کاهش Churn', value: '-۳۵٪' }, { label: 'NPS', value: '۷۸' }],
    color: '#2563eb',
    light: '#eff6ff',
    icon: '💰',
  },
  {
    id: 6,
    title: 'استراتژی محتوا فین‌تک',
    category: 'دیجیتال مارکتینگ',
    tag: 'Content Strategy',
    desc: 'تولید محتوای تخصصی مالی که ۵ برابر Engagement را افزایش داد.',
    metrics: [{ label: 'رشد فالوور', value: '+۵K' }, { label: 'Engagement', value: '۵x' }],
    color: '#7c3aed',
    light: '#f5f3ff',
    icon: '🚀',
  },
];

function Portfolio() {
  const [active, setActive] = useState('همه');

  const filtered = active === 'همه'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">

        {/* ── Header ── */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>نمونه کارها</span>
            </div>
            <h2 className={styles.heading}>
              نتایجی که
              <span className={styles.gradientText}> به آن‌ها افتخار می‌کنیم</span>
            </h2>
            <p className={styles.subtext}>
              هر پروژه یک داستان موفقیت است — با اعداد واقعی.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Filters ── */}
        <AnimatedSection variant="fadeUp" delay={0.15}>
          <div className={styles.filtersWrap}>
            <div className={styles.filters}>
              {filters.map((f) => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <AnimatedSection key={p.id} variant="fadeUp" delay={i * 0.07}>
              <div
                className={styles.card}
                style={{ '--card-color': p.color, '--card-light': p.light }}
              >
                <div className={styles.cardHead}>
                  <div
                    className={styles.iconWrap}
                    style={{ background: p.light }}
                  >
                    <span>{p.icon}</span>
                  </div>
                  <span
                    className={styles.cardTag}
                    style={{ color: p.color, background: `${p.color}18` }}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>

                <div className={styles.metrics}>
                  {p.metrics.map((m) => (
                    <div key={m.label} className={styles.metricItem}>
                      <strong style={{ color: p.color }}>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={styles.cardBar}
                  style={{ background: p.color }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Strip ── */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className={styles.strip}>
            {[
              { value: '۱۲۰+', label: 'پروژه تکمیل‌شده' },
              { value: '۸۵+',  label: 'مشتری راضی' },
              { value: '۴.۹',  label: 'امتیاز میانگین' },
              { value: '۶+',   label: 'سال تجربه' },
            ].map((s) => (
              <div key={s.label} className={styles.stripItem}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default Portfolio;