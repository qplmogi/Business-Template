import { useState } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: '📍',
    label: 'آدرس',
    value: 'مازندران خیابان فرهنگ ',
    sub: 'طبقه دوم  ',
  },
  {
    icon: '📞',
    label: 'تلفن',
    value: '۰۹۱۱۶۷۶۹۵۷۷',
    sub: 'شنبه تا چهارشنبه، ۹ تا ۱۸',
  },
  {
    icon: '✉️',
    label: 'ایمیل',
    value: 'hello@gmail.com',
    sub: 'پاسخ در کمتر از ۲۴ ساعت',
  },
];

const services = [
  'طراحی سایت',
  'سئو',
  'دیجیتال مارکتینگ',
  'برندینگ',
  'تولید محتوا',
  'مشاوره',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

function Contact() {
  const [form, setForm]         = useState(initialForm);
  const [focused, setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const isValid = form.name && form.email && form.message;

  return (
    <section className={styles.contact} id="contact">
      <div className="container">

        {/* ── Header ── */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrowText}>تماس با ما</span>
            </div>
            <h2 className={styles.heading}>
              بیایید یک
              <span className={styles.gradientText}> پروژه عالی </span>
              بسازیم
            </h2>
            <p className={styles.subtext}>
              مشاوره اول رایگان است. فرم را پر کنید تا در اسرع وقت با شما تماس بگیریم.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Layout ── */}
        <div className={styles.layout}>

          {/* ── Info Col ── */}
          <AnimatedSection variant="fadeRight" delay={0.15} className={styles.infoCol}>
            <div className={styles.infoCards}>
              {contactInfo.map((info, i) => (
                <div key={i} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <strong className={styles.infoValue}>{info.value}</strong>
                    <span className={styles.infoSub}>{info.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeTop}>
                <span className={styles.guaranteeIcon}>🛡️</span>
                <strong>تضمین ما</strong>
              </div>
              <ul className={styles.guaranteeList}>
                {[
                  'مشاوره اولیه کاملاً رایگان',
                  'پاسخگویی در کمتر از ۲۴ ساعت',
                  'قرارداد شفاف و مشخص',
                  'گزارش‌دهی منظم پیشرفت',
                ].map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* ── Form Col ── */}
          <AnimatedSection variant="fadeLeft" delay={0.2} className={styles.formCol}>
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>پیام شما ارسال شد!</h3>
                  <p>تیم ما در کمتر از ۲۴ ساعت با شما تماس می‌گیرد.</p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  >
                    ارسال پیام جدید
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>

                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>درخواست مشاوره رایگان</h3>
                    <p className={styles.formSub}>فیلدهای ستاره‌دار الزامی هستند</p>
                  </div>

                  <div className={styles.row}>
                    <div className={`${styles.field} ${focused === 'name' ? styles.fieldFocused : ''}`}>
                      <label className={styles.label}>نام و نام خانوادگی *</label>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        className={styles.input}
                        placeholder="مثلاً: علی رضایی"
                      />
                    </div>

                    <div className={`${styles.field} ${focused === 'phone' ? styles.fieldFocused : ''}`}>
                      <label className={styles.label}>شماره موبایل</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused('')}
                        className={styles.input}
                        placeholder="۰۹۱۲..."
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className={`${styles.field} ${focused === 'email' ? styles.fieldFocused : ''}`}>
                    <label className={styles.label}>آدرس ایمیل *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      className={styles.input}
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  <div className={`${styles.field} ${focused === 'service' ? styles.fieldFocused : ''}`}>
                    <label className={styles.label}>حوزه مورد نیاز</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused('')}
                      className={styles.select}
                    >
                      <option value="">انتخاب کنید...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className={`${styles.field} ${focused === 'message' ? styles.fieldFocused : ''}`}>
                    <label className={styles.label}>توضیحات پروژه *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      className={styles.textarea}
                      placeholder="درباره پروژه‌تان بگویید..."
                      rows={4}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${!isValid ? styles.submitDisabled : ''} ${loading ? styles.submitLoading : ''}`}
                    disabled={!isValid || loading}
                  >
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : (
                      <>
                        ارسال درخواست
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Contact;