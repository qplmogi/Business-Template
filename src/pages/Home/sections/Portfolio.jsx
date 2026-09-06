import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Portfolio.module.css';

import img1 from '../../../assets/portfolio/w1.png';
import img2 from '../../../assets/portfolio/w2.png';
import img3 from '../../../assets/portfolio/w3.png';
import img4 from '../../../assets/portfolio/w4.png';

const projects = [
  {
    id: 1,
    title: 'فروشگاه لوازم یدکی خودرو',
    services: 'UX، طراحی فروشگاه',
    desc: 'UX جدید و طراحی فروشگاه حرفه‌ای.',
    image: img1,
    featured: true,
  },
  {
    id: 2,
    title: 'فروشگاه لوازم خانگی',
    services: 'برندینگ، تجربه کاربری',
    desc: 'طراحی هویت بصری کامل و تجربه کاربری مدرن.',
    image: img2,
  },
  {
    id: 3,
    title: 'فروشگاه لوازم خانگی',
    services: 'توسعه وب، سئو',
    desc: '۳ برابر رشد ترافیک ارگانیک در ۶ ماه.',
    image: img3,
  },
  {
    id: 4,
    title: 'فروشگاه لوازم آرایشی ',
    services: 'دیجیتال مارکتینگ',
    desc: '  در کمپین اینستاگرام و گوگل.',
    image: img4,
  },
];

const stripStats = [
  { value: '۲۰۰+', label: 'پروژه تکمیل‌شده' },
  { value: '۸۵+', label: 'مشتری راضی' },
  { value: '۴.۹', label: 'امتیاز میانگین' },
  { value: '۶+', label: 'سال تجربه' },
];

function ProjectCard({ p, mobile = false }) {
  return (
    <a
      href="#contact"
      className={`${styles.card} ${
        p.featured ? styles.cardFeatured : ''
      } ${mobile ? styles.mobileCard : ''}`}
      aria-label={p.title}
    >
      <div className={styles.imageWrap}>
        <img
          src={p.image}
          alt={p.title}
          className={styles.image}
          loading={p.featured ? 'eager' : 'lazy'}
          width={1000}
          height={700}
        />
      </div>

      <div className={styles.cardFoot}>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{p.title}</h3>

          <span className={styles.cardServices}>
            {p.services}
          </span>

          {mobile && (
            <p className={styles.cardDesc}>
              {p.desc}
            </p>
          )}
        </div>

        <span
          className={styles.cardArrow}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function Portfolio() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      className={styles.portfolio}
      id="portfolio"
    >
      <div className="container">

        {/* ══════════════════════════════
            DESKTOP / TABLET
        ══════════════════════════════ */}

        <div className={styles.desktopPortfolio}>

          <div className={styles.featuredLayout}>

            {/* Header */}
            <AnimatedSection
              variant="fadeRight"
              delay={0.1}
              className={styles.headerSlot}
            >
              <div className={styles.header}>

                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowNum}>
                    ۰۵
                  </span>

                  <span
                    className={styles.eyebrowLine}
                    aria-hidden="true"
                  />

                  <span className={styles.eyebrowText}>
                    نمونه کارها
                  </span>
                </div>

                <h2 className={styles.heading}>
                  پروژه‌هایی که
                  <br />
                  <span className={styles.gradientText}>
                    به آن‌ها افتخار می‌کنیم
                  </span>
                </h2>

                <p className={styles.description}>
                  از ایده تا اجرا، پروژه‌هایی که با ترکیب
                  استراتژی، طراحی و تکنولوژی به نتیجه
                  رسیده‌اند.
                </p>

                <a
                  href="#contact"
                  className={styles.headerLink}
                >
                  مشاهده همه پروژه‌ها

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
            </AnimatedSection>

            {/* Featured */}
            <AnimatedSection
              variant="fadeUp"
              delay={0.15}
              className={styles.featuredSlot}
            >
              <ProjectCard p={featured} />
            </AnimatedSection>

          </div>

          {/* Other Projects */}
          <div className={styles.restRow}>
            {rest.map((p, i) => (
              <AnimatedSection
                key={p.id}
                variant="fadeUp"
                delay={0.2 + i * 0.06}
                className={styles.restItem}
              >
                <ProjectCard p={p} />
              </AnimatedSection>
            ))}
          </div>

        </div>


        {/* ══════════════════════════════
            MOBILE
            Swiper نسخه قبلی
        ══════════════════════════════ */}

        <div className={styles.mobilePortfolio}>

          <AnimatedSection
            variant="fadeUp"
            delay={0.1}
          >
            <div className={styles.mobileHeader}>

              <div className={styles.mobileEyebrow}>
                <span className={styles.eyebrowNum}>
                  ۰۵
                </span>

                <span
                  className={styles.eyebrowLine}
                  aria-hidden="true"
                />

                <span className={styles.eyebrowText}>
                  نمونه کارها
                </span>
              </div>

              <h2 className={styles.mobileHeading}>
                پروژه‌هایی که
                <br />
                <span className={styles.gradientText}>
                  به آن‌ها افتخار می‌کنیم
                </span>
              </h2>

              <p className={styles.mobileDescription}>
                از ایده تا اجرا، پروژه‌هایی که با ترکیب
                استراتژی، طراحی و تکنولوژی به نتیجه
                رسیده‌اند.
              </p>

            </div>
          </AnimatedSection>


          <AnimatedSection
            variant="fadeUp"
            delay={0.15}
          >
            <div className={styles.mobileSwiperWrap}>

              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={12}
                slidesPerView={1.08}
                centeredSlides={false}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                grabCursor={true}
                watchSlidesProgress={true}
                className={styles.mobileSwiper}
                aria-label="نمونه کارهای ریشه"
              >

                {projects.map((p) => (
                  <SwiperSlide
                    key={p.id}
                    className={styles.mobileSlide}
                  >
                    <ProjectCard
                      p={p}
                      mobile
                    />
                  </SwiperSlide>
                ))}

              </Swiper>

            </div>
          </AnimatedSection>

        </div>


        {/* ══════════════════════════════
            STATS
        ══════════════════════════════ */}

        <AnimatedSection
          variant="fadeUp"
          delay={0.3}
        >
          <dl className={styles.strip}>
            {stripStats.map((s) => (
              <div
                key={s.label}
                className={styles.stripItem}
              >
                <dd className={styles.stripValue}>
                  {s.value}
                </dd>

                <dt className={styles.stripLabel}>
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </AnimatedSection>

      </div>
    </section>
  );
}

export default Portfolio;