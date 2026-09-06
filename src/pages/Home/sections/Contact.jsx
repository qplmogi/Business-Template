import { useState, useCallback } from 'react';
import AnimatedSection from '../../../components/AnimatedSection/AnimatedSection';
import styles from './Contact.module.css';


const contactInfo = [
  {
    icon: '📍',
    label: 'آدرس',
    value: 'مازندران خیابان فرهنگ',
    sub: 'طبقه دوم',
  },
  {
    icon: '📞',
    label: 'تلفن',
    value: '۰۹۰۲۸۸۶۶۸۹۸ - ۰۹۹۸۱۱۸۳۳۰۲',
    sub: 'شنبه تا چهارشنبه، ۹ تا ۱۸',
  },
  {
    icon: '✉',
    label: 'ایمیل',
    value: 'info@rishehcompany.ir',
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
  honeypot: '',
};

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  message: '',
  server: '',
};

// ── Validation Rules ──
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+98|0)?9\d{9}$/;

function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value.trim())         return 'نام الزامی است';
      if (value.trim().length < 2) return 'نام باید حداقل ۲ کاراکتر باشد';
      if (value.length > 100)    return 'نام نباید بیشتر از ۱۰۰ کاراکتر باشد';
      return '';

    case 'email':
      if (!value.trim())           return 'ایمیل الزامی است';
      if (!EMAIL_REGEX.test(value)) return 'فرمت ایمیل صحیح نیست';
      if (value.length > 254)      return 'ایمیل نباید بیشتر از ۲۵۴ کاراکتر باشد';
      return '';

    case 'phone':
      if (!value.trim()) return '';
      const digitsOnly = value.replace(/[\s\-]/g, '');
      if (!PHONE_REGEX.test(digitsOnly)) return 'شماره موبایل معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)';
      return '';

    case 'message':
      if (!value.trim())           return 'توضیحات الزامی است';
      if (value.trim().length < 10) return 'توضیحات باید حداقل ۱۰ کاراکتر باشد';
      if (value.length > 1000)     return 'توضیحات نباید بیشتر از ۱۰۰۰ کاراکتر باشد';
      return '';

    default:
      return '';
  }
}

function validateAll(form) {
  return {
    name:    validateField('name',    form.name),
    email:   validateField('email',   form.email),
    phone:   validateField('phone',   form.phone),
    message: validateField('message', form.message),
    server:  '',
  };
}

// ── Component ──
function Contact() {
  const [form,      setForm]      = useState(initialForm);
  const [errors,    setErrors]    = useState(initialErrors);
  const [focused,   setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setFocused('');
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honeypot) return;

    const newErrors = validateAll(form);
    setErrors(newErrors);

    const hasErrors = Object.entries(newErrors)
      .filter(([key]) => key !== 'server')
      .some(([, val]) => val !== '');

    if (hasErrors) return;

    setLoading(true);
    setErrors(prev => ({ ...prev, server: '' }));

    try {
      const controller = new AbortController();
      const timeoutId  = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const res = await fetch('/contact.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams({
          name:     form.name.trim(),
          email:    form.email.trim(),
          phone:    form.phone.trim(),
          service:  form.service,
          message:  form.message.trim(),
          honeypot: form.honeypot,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data.ok) {
        setSubmitted(true);
        setForm(initialForm);
        setErrors(initialErrors);
      } else {
        setErrors(prev => ({
          ...prev,
          server: data.message || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.',
        }));
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setErrors(prev => ({
          ...prev,
          server: 'اتصال برقرار نشد. اینترنت خود را بررسی کنید.',
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          server: 'خطایی رخ داد. لطفاً دوباره تلاش کنید.',
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name.trim()    &&
    form.email.trim()   &&
    form.message.trim() &&
    !errors.name        &&
    !errors.email       &&
    !errors.phone       &&
    !errors.message;

  return (
    <section className={styles.contact} id="contact">
      <div className="container">

        {/* ── Header ── */}
        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>۰۶</span>
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
                  <div className={styles.infoIcon} aria-hidden="true">{info.icon}</div>
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
                <span className={styles.guaranteeIcon} aria-hidden="true">🛡</span>
                <strong>تضمین ما</strong>
              </div>
              <ul className={styles.guaranteeList}>
                {[
                  'مشاوره اولیه کاملاً رایگان',
                  'پاسخگویی در کمتر از ۲۴ ساعت',
                  'قرارداد شفاف و مشخص',
                  'گزارشدهی منظم پیشرفت',
                ].map((item) => (
                  <li key={item}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
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
                <div className={styles.successState} role="alert">
                  <div className={styles.successIcon} aria-hidden="true">✓</div>
                  <h3>پیام شما ارسال شد!</h3>
                  <p>تیم ما در کمتر از ۲۴ ساعت با شما تماس میگیرد.</p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    ارسال پیام جدید
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                  noValidate
                  aria-label="فرم تماس"
                >
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>درخواست مشاوره رایگان</h3>
                    <p className={styles.formSub}>فیلدهای ستارهدار الزامی هستند</p>
                  </div>

                  {/* Honeypot — مخفی از کاربر، رباتها پر میکنند */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* ── row: نام + موبایل ── */}
                  <div className={styles.row}>
                    <div className={`${styles.field} ${focused === 'name' ? styles.fieldFocused : ''} ${errors.name ? styles.fieldError : ''}`}>
                      <label htmlFor="contact-name" className={styles.label}>
                        نام و نام خانوادگی <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={handleBlur}
                        className={styles.input}
                        placeholder="مثلاً: علی رضایی"
                        maxLength={100}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                      />
                      {errors.name && (
                        <span id="error-name" className={styles.errorMsg} role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className={`${styles.field} ${focused === 'phone' ? styles.fieldFocused : ''} ${errors.phone ? styles.fieldError : ''}`}>
                      <label htmlFor="contact-phone" className={styles.label}>
                        شماره موبایل
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={handleBlur}
                        className={styles.input}
                        placeholder="۰۹..."
                        dir="ltr"
                        maxLength={14}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                      />
                      {errors.phone && (
                        <span id="error-phone" className={styles.errorMsg} role="alert">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ── ایمیل ── */}
                  <div className={`${styles.field} ${focused === 'email' ? styles.fieldFocused : ''} ${errors.email ? styles.fieldError : ''}`}>
                    <label htmlFor="contact-email" className={styles.label}>
                      آدرس ایمیل <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={handleBlur}
                      className={styles.input}
                      placeholder="example@email.com"
                      dir="ltr"
                      maxLength={254}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                    />
                    {errors.email && (
                      <span id="error-email" className={styles.errorMsg} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* ── خدمت ── */}
                  <div className={`${styles.field} ${focused === 'service' ? styles.fieldFocused : ''}`}>
                    <label htmlFor="contact-service" className={styles.label}>
                      حوزه مورد نیاز
                    </label>
                    <select
                      id="contact-service"
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

                  {/* ── پیام ── */}
                  <div className={`${styles.field} ${focused === 'message' ? styles.fieldFocused : ''} ${errors.message ? styles.fieldError : ''}`}>
                    <label htmlFor="contact-message" className={styles.label}>
                      توضیحات پروژه <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={handleBlur}
                      className={styles.textarea}
                      placeholder="درباره پروژهتان بگویید..."
                      rows={4}
                      maxLength={1000}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                    />
                    <div className={styles.textareaFooter}>
                      {errors.message && (
                        <span id="error-message" className={styles.errorMsg} role="alert">
                          {errors.message}
                        </span>
                      )}
                      <span className={styles.charCount}>
                        {form.message.length}/۱۰۰۰
                      </span>
                    </div>
                  </div>

                  {/* ── خطای server ── */}
                  {errors.server && (
                    <div className={styles.serverError} role="alert">
                      {errors.server}
                    </div>
                  )}

                  {/* ── دکمه submit ── */}
                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${loading ? styles.submitLoading : ''}`}
                    disabled={!isFormValid || loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <span className={styles.spinner} aria-hidden="true" />
                        در حال ارسال...
                      </>
                    ) : (
                      <>
                        ارسال درخواست
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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