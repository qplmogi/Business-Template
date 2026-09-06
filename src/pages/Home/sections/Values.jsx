import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Values.module.css';
import {
  LuTarget,
  LuSparkles,
  LuEye,
  LuZap,
  LuShieldCheck,
  LuTrendingUp,
} from 'react-icons/lu';

const values = [
  {
    id: '01',
    icon: <LuTarget aria-hidden="true" />,
    title: 'نتیجه محوری',
    text: 'هر پروژه را برای رسیدن به نتیجه واقعی پیش می‌بریم.',
  },
  {
    id: '02',
    icon: <LuSparkles aria-hidden="true" />,
    title: 'خلاقیت',
    text: 'ایده‌های تازه و رویکردهای نوآورانه را دنبال می‌کنیم.',
  },
  {
    id: '03',
    icon: <LuEye aria-hidden="true" />,
    title: 'شفافیت',
    text: 'در تمام مراحل پروژه صادق و شفاف هستیم.',
  },
  {
    id: '04',
    icon: <LuZap aria-hidden="true" />,
    title: 'چابکی',
    text: 'سریع و منعطف به نیازهای در حال تغییر پاسخ می‌دهیم.',
  },
  {
    id: '05',
    icon: <LuShieldCheck aria-hidden="true" />,
    title: 'کیفیت',
    text: 'همیشه بالاترین استاندارد کیفیت را دنبال می‌کنیم.',
  },
  {
    id: '06',
    icon: <LuTrendingUp aria-hidden="true" />,
    title: 'رشد مستمر',
    text: 'یادگیری و بهبود مداوم بخشی از DNA تیم ماست.',
  },
];

function ValueRow({ v }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowTop}>
        <span className={styles.rowIcon}>{v.icon}</span>
        <span className={styles.rowNum}>{v.id}</span>
      </div>

      <h3 className={styles.rowTitle}>{v.title}</h3>

      <p className={styles.rowText}>{v.text}</p>
    </div>
  );
}

function Values() {
  return (
    <section className={styles.section} id="values">
      <div className="container">
        <div className={styles.layout}>

          <AnimatedSection
            variant="fadeRight"
            delay={0.1}
            className={styles.header}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>۰۳</span>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>ارزش‌های ما</span>
            </div>

            <h2 className={styles.heading}>
              اصولی که هر روز
              <br />
              <span className={styles.headingAccent}>
                راهنمای ما هستند
              </span>
            </h2>

            <p className={styles.subtext}>
              این ارزش‌ها نه شعار، بلکه معیار تصمیم‌گیری روزانه تیم ماست.
            </p>
          </AnimatedSection>

          <div className={styles.list}>
            {values.map((v, i) => (
              <AnimatedSection
                key={v.id}
                variant="fadeUp"
                delay={i * 0.04}
              >
                <ValueRow v={v} />
              </AnimatedSection>
            ))}
          </div>

          <a href="#services" className={styles.headerLink}>
            مشاهده خدمات
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Values;