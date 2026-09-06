import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Services.module.css';
import {
  LuPalette,
  LuCode,
  LuSearch,
  LuMegaphone,
  LuBadgeCheck,
  LuPenTool,
  LuPlus,
} from 'react-icons/lu';

const services = [
  {
    num: '01',
    icon: <LuPalette aria-hidden="true" />,
    tag: 'Design',
    title: 'طراحی UI/UX',
    text: 'طراحی رابط کاربری مدرن و تجربه کاربری روان که مخاطب را به مشتری تبدیل میکند.',
    features: ['طراحی سیستم دیزاین', 'پروتوتایپ تعاملی', 'تست کاربری'],
  },
  {
    num: '02',
    icon: <LuCode aria-hidden="true" />,
    tag: 'Development',
    title: 'توسعه وب',
    text: 'ساخت وبسایتهای سریع، امن و مقیاسپذیر با جدیدترین تکنولوژیهای روز.',
    features: ['React / Next.js', 'بهینهسازی سرعت', 'طراحی ریسپانسیو'],
  },
  {
    num: '03',
    icon: <LuSearch aria-hidden="true" />,
    tag: 'SEO',
    title: 'سئو تکنیکال',
    text: 'بهینهسازی موتور جستجو با رویکرد دادهمحور برای رشد پایدار ترافیک آلی.',
    features: ['آدیت فنی سایت', 'تحقیق کلمات کلیدی', 'لینکسازی'],
  },
  {
    num: '04',
    icon: <LuMegaphone aria-hidden="true" />,
    tag: 'Marketing',
    title: 'دیجیتال مارکتینگ',
    text: 'استراتژی بازاریابی یکپارچه دیجیتال برای رشد برند و افزایش فروش.',
    features: ['تبلیغات گوگل و اینستاگرام', 'ایمیل مارکتینگ', 'آنالیز داده'],
  },
  {
    num: '05',
    icon: <LuBadgeCheck aria-hidden="true" />,
    tag: 'Branding',
    title: 'برندینگ',
    text: 'خلق هویت بصری منسجم و استراتژی برند که در ذهن مخاطب ماندگار میشود.',
    features: ['لوگو و هویت بصری', 'راهنمای برند', 'بستهبندی'],
  },
  {
    num: '06',
    icon: <LuPenTool aria-hidden="true" />,
    tag: 'Content',
    title: 'تولید محتوا',
    text: 'محتوای هدفمند و باکیفیت که اعتماد مخاطب را جلب و او را به اقدام ترغیب میکند.',
    features: ['محتوای سئومحور', 'شبکههای اجتماعی', 'ویدیو مارکتینگ'],
  },
];

function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleService = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className={styles.services} id="services">
      <div className="container">

        {/* Header */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>۰۴</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
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

        {/* Services Grid */}
        <ul className={styles.grid} role="list">
          {services.map((s, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={s.title}>
                <AnimatedSection variant="fadeUp" delay={i * 0.07}>
                  <article
                    className={`${styles.card} ${
                      isOpen ? styles.cardOpen : ''
                    }`}
                    aria-label={s.title}
                  >
                    {/* Card Header */}
                    <button
                      type="button"
                      className={styles.cardTrigger}
                      onClick={() => toggleService(i)}
                      aria-expanded={isOpen}
                      aria-controls={`service-content-${i}`}
                    >
                      <span className={styles.cardTriggerRight}>
                        <span className={styles.icon}>{s.icon}</span>

                        <span className={styles.cardTitle}>
                          {s.title}
                        </span>
                      </span>

                      <span className={styles.cardTriggerLeft}>
                        <span className={styles.cardNum}>{s.num}</span>

                        <span
                          className={`${styles.plusIcon} ${
                            isOpen ? styles.plusIconOpen : ''
                          }`}
                          aria-hidden="true"
                        >
                          <LuPlus />
                        </span>
                      </span>
                    </button>

                    {/* Desktop content + Mobile accordion content */}
                    <div
                      id={`service-content-${i}`}
                      className={styles.cardExpandable}
                      data-open={isOpen}
                    >
                      <div className={styles.cardContent}>
                        <h3 className={styles.desktopTitle}>
                          {s.title}
                        </h3>

                        <p className={styles.cardText}>
                          {s.text}
                        </p>
                      </div>

                      <ul
                        className={styles.featureList}
                        aria-label={`ویژگیهای ${s.title}`}
                      >
                        {s.features.map((f) => (
                          <li key={f} className={styles.featureItem}>
                            <span
                              className={styles.featureDot}
                              aria-hidden="true"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className={styles.cardFooter}>
                        <span className={styles.learnMore}>
                          بیشتر بدانید
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
                        </span>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className={styles.cta}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaText}>
                <h3>پروژهای در ذهن دارید؟</h3>
                <p>با ما صحبت کنید — مشاوره اول رایگان است.</p>
              </div>

              <a href="#contact" className={styles.ctaBtn}>
                شروع پروژه
                <svg
                  width="16"
                  height="16"
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
        </AnimatedSection>

      </div>
    </section>
  );
}

export default Services;