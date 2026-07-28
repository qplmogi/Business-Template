import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Values.module.css';
import {
  LuTarget,        
  LuSparkles,      
  LuEye,           
  LuZap,           
  LuShieldCheck,   
  LuTrendingUp,    
} from "react-icons/lu";

const values = [
  {
    id: '01',
    icon: <LuTarget/>,
    title: 'نتیجه‌محوری',
    text: 'هر پروژه را با هدف رسیدن به نتایج واقعی و قابل اندازه‌گیری دنبال می‌کنیم.',
    color: '#2563eb',
    light: '#eff6ff',
    featured: false,
  },
  {
    id: '02',
    icon: <LuSparkles />,
    title: 'خلاقیت',
    text: 'ایده‌های تازه و رویکردهای نوآورانه را در قلب هر راه‌حل قرار می‌دهیم.',
    color: '#7c3aed',
    light: '#f5f3ff',
    featured: true,
  },
  {
    id: '03',
    icon: <LuEye/>,
    title: 'شفافیت',
    text: 'در تمام مراحل پروژه با مشتریان صادق و شفاف هستیم.',
    color: '#0891b2',
    light: '#ecfeff',
    featured: false,
  },
  {
    id: '04',
    icon: <LuZap/>,
    title: 'چابکی',
    text: 'با سرعت و انعطاف‌پذیری بالا به نیازهای در حال تغییر پاسخ می‌دهیم.',
    color: '#f59e0b',
    light: '#fffbeb',
    featured: false,
  },
  {
    id: '05',
    icon: <LuShieldCheck/>,
    title: 'کیفیت',
    text: 'هیچ‌وقت با کیفیت کمتر از بهترین کنار نمی‌آییم.',
    color: '#16a34a',
    light: '#f0fdf4',
    featured: false,
  },
  {
    id: '06',
    icon: <LuTrendingUp/>,
    title: 'رشد مستمر',
    text: 'یادگیری و بهبود مداوم بخشی از DNA تیم ماست.',
    color: '#0369a1',
    light: '#f0f9ff',
    featured: false,
  },
];


function ValueCard({ v }) {
    return (
      <div
        className={`${styles.card} ${
          v.featured ? styles.cardFeatured : ''
        }`}
        style={{
          '--accent': v.color,
          '--light': v.light,
        }}
      >
        <div className={styles.cardMain}>
          <div className={styles.iconBox}>
            <span className={styles.iconInner}>
              {v.icon}
            </span>
          </div>
  
          <div className={styles.cardInfo}>
            <span className={styles.cardNum}>
              {v.id}
            </span>
  
            <h3 className={styles.cardTitle}>
              {v.title}
            </h3>
          </div>
        </div>
  
        <p className={styles.cardText}>
          {v.text}
        </p>
  
        <div className={styles.cardAccentBar} />
      </div>
    );
  }

function Values() {
  return (
    <section className={styles.section} id="values">
      <div className="container">

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>ارزش‌های ما</span>
              <span className={styles.eyebrowLine} />
            </div>
            <h2 className={styles.heading}>
              اصولی که هر روز
              <br />
              <span className={styles.headingAccent}>راهنمای ما هستند</span>
            </h2>
            <p className={styles.subtext}>
              این ارزش‌ها نه شعار، بلکه معیار تصمیم‌گیری روزانه تیم ماست.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <AnimatedSection key={v.id} variant="fadeUp" delay={i * 0.07}>
              <ValueCard v={v} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="fadeUp" delay={0.15}>
          <div className={styles.strip}>
            <div className={styles.stripQuote}>
              <span className={styles.quoteIcon}>"</span>
              <p>
                موفقیت مشتری، موفقیت ماست — این جمله را در هر جلسه و هر خط
                کد با خود تکرار می‌کنیم.
              </p>
            </div>
            <div className={styles.stripDivider} />
            <div className={styles.stripCta}>
              <p className={styles.stripCtaLabel}>آماده همکاری هستید؟</p>
              <a href="#contact" className={styles.stripCtaBtn}>
                شروع کنید
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
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

export default Values;