import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Values.module.css';

const values = [
  {
    id: '01',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'نتیجه‌محوری',
    text: 'هر پروژه را با هدف رسیدن به نتایج واقعی و قابل اندازه‌گیری دنبال می‌کنیم.',
    color: '#2563eb',
    light: '#eff6ff',
    featured: false,
  },
  {
    id: '02',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'خلاقیت',
    text: 'ایده‌های تازه و رویکردهای نوآورانه را در قلب هر راه‌حل قرار می‌دهیم.',
    color: '#7c3aed',
    light: '#f5f3ff',
    featured: true,
  },
  {
    id: '03',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'شفافیت',
    text: 'در تمام مراحل پروژه با مشتریان صادق و شفاف هستیم.',
    color: '#0891b2',
    light: '#ecfeff',
    featured: false,
  },
  {
    id: '04',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'چابکی',
    text: 'با سرعت و انعطاف‌پذیری بالا به نیازهای در حال تغییر پاسخ می‌دهیم.',
    color: '#f59e0b',
    light: '#fffbeb',
    featured: false,
  },
  {
    id: '05',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'کیفیت',
    text: 'هیچ‌وقت با کیفیت کمتر از بهترین کنار نمی‌آییم.',
    color: '#16a34a',
    light: '#f0fdf4',
    featured: false,
  },
  {
    id: '06',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
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