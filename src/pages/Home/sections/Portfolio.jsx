import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Portfolio.module.css';

// 👇 عکس‌ها (خودت مسیرها رو درست کن)
import img1 from '../../../assets/portfolio/w1.png';
import img2 from '../../../assets/portfolio/w2.png';
import img3 from '../../../assets/portfolio/w3.png';
import img4 from '../../../assets/portfolio/w4.png';
import img5 from '../../../assets/portfolio/w5.png';
import img6 from '../../../assets/portfolio/w6.png';



const filters = ['همه', 'طراحی سایت', 'برندینگ', 'سئو', 'دیجیتال مارکتینگ'];

const projects = [
  {
    id: 1,
    title: 'فروشگاه لوازم آرایشی',
    desc: 'UX جدید و طراحی فروشگاه حرفه‌ای.',
    image: img1,
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'فروشگاه موبایل',
    desc: 'طراحی هویت بصری کامل و تجربه کاربری مدرن.',
    image: img2,
    color: '#ec4899',
  },
  {
    id: 3,
    title: 'فروشگاه چند منظوره',
    desc: '۳ برابر رشد ترافیک ارگانیک در ۶ ماه.',
    image: img3,
    color: '#0891b2',
  },
  {
    id: 4,
    title: 'کمپین دیجیتال مارکتینگ',
    desc: 'ROAS 4x در کمپین اینستاگرام و گوگل.',
    image: img4,
    color: '#f59e0b',
  },
];

function Portfolio() {
  const [active, setActive] = useState('همه');

  const filtered =
    active === 'همه'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">

        {/* HEADER */}
        <AnimatedSection variant="fadeRight" delay={0.1}>
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
              هر پروژه یک داستان موفقیت واقعی است.
            </p>
          </div>
        </AnimatedSection>


        {/* SWIPER WITH IMAGE */}
        <AnimatedSection variant="fadeLeft" delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={18}
            slidesPerView={1.1}
            loop
            speed={800}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filtered.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  className={styles.card}
                  style={{ '--accent': p.color }}
                >

                  {/* IMAGE */}
                  <div className={styles.imageWrap}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className={styles.image}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardTag}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 className={styles.cardTitle}>
                      {p.title}
                    </h3>

                    <p className={styles.cardDesc}>
                      {p.desc}
                    </p>

                    <div
                      className={styles.cardLine}
                      style={{ background: p.color }}
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

        <AnimatedSection variant="fadeLeft" delay={0.25}>

            <div className={styles.strip}>

              {[

                { value: '۲۰۰+', label: 'پروژه تکمیل‌شده' },

                { value: '۸۵+', label: 'مشتری راضی' },

                { value: '۴.۹', label: 'امتیاز میانگین' },

                { value: '۶+', label: 'سال تجربه' },

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