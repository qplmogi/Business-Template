import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';
import logoBg from '../../../assets/RishehLogo/mono2.pdf';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: '۲۰۰+', label: 'پروژه اجرا شده' },
    { value: '۶ سال', label: 'تجربه میدانی'   },
    { value: '۹۴٪',  label: 'رضایت مشتریان'  },
];

function Hero() {
    const sectionRef   = useRef(null);
    const contentRef   = useRef(null);
    const kickerRef    = useRef(null);
    const line1Ref      = useRef(null);
    const line2Ref      = useRef(null);
    const subtextRef   = useRef(null);
    const actionsRef   = useRef(null);
    const proofRef      = useRef(null);
    const scrollCueRef = useRef(null);
    const watermarkRef = useRef(null);
    const statValueInnerRefs = useRef([]);
    const statBarRefs        = useRef([]);

    useLayoutEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            gsap.set([kickerRef.current, subtextRef.current, actionsRef.current, proofRef.current],
                { clearProps: 'all' });
            gsap.set([line1Ref.current, line2Ref.current, ...statValueInnerRefs.current],
                { clearProps: 'transform' });
            gsap.set(statBarRefs.current, { clearProps: 'transform' });
            return;
        }

        /* Deliberately NOT wrapped in gsap.matchMedia() — the entrance and
           recede below run unconditionally on every device. Only the pin
           itself (mobile has none) branches on viewport width. This is the
           mobile-first guarantee: mobile gets the full choreography by
           default, desktop gets one additive difference (the pin). */
        const ctx = gsap.context(() => {
            const isDesktop = window.matchMedia('(min-width: 900px)').matches;
            const dist = isDesktop ? 40 : 20;

            const fadeEls = [kickerRef.current, subtextRef.current, actionsRef.current, proofRef.current];
            const maskEls = [line1Ref.current, line2Ref.current, ...statValueInnerRefs.current];

            gsap.set(fadeEls, { opacity: 0, y: dist });
            gsap.set(maskEls, { yPercent: 110 });
            gsap.set(statBarRefs.current, { scaleX: 0, transformOrigin: '100% 50%' });
            gsap.set(scrollCueRef.current, { opacity: 0, y: 8 });
            gsap.set(watermarkRef.current, { scale: 1, rotate: -2 });

            const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
            entrance
                .to(kickerRef.current, { opacity: 1, y: 0, duration: 0.4 })
                .to(line1Ref.current,  { yPercent: 0, duration: 0.75, ease: 'power4.out' }, '-=0.1')
                .to(line2Ref.current,  { yPercent: 0, duration: 0.75, ease: 'power4.out' }, '-=0.5')
                .to(subtextRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
                .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
                .to(proofRef.current,   { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
                .to(statValueInnerRefs.current, {
                    yPercent: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
                }, '-=0.2')
                .to(statBarRefs.current, {
                    scaleX: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
                }, '-=0.35')
                .to(scrollCueRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15');

            const cueLoop = gsap.to(scrollCueRef.current, {
                y: 6, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: -1,
                delay: entrance.duration(),
            });

            const holdDistance = Math.round(window.innerHeight * (isDesktop ? 0.6 : 0.42));
            let cuePaused = false;

            const recede = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: `+=${holdDistance}`,
                    scrub: 0.5,
                    pin: isDesktop,
                    pinSpacing: isDesktop,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        if (!cuePaused && self.progress > 0) {
                            cuePaused = true;
                            cueLoop.pause();
                        }
                    },
                },
            });

            recede
                .to(scrollCueRef.current, { opacity: 0, duration: 0.12 }, 0)
                .to({}, { duration: 0.55 })
                .to(contentRef.current, {
                    opacity: 0, y: -32, scale: 0.98, duration: 0.4, ease: 'power1.out',
                })
                .to(watermarkRef.current, {
                    opacity: 0, scale: 1.06, duration: 0.4, ease: 'power1.out',
                }, '<');

            return () => {
                entrance.kill();
                cueLoop.kill();
                recede.kill();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.hero} id="hero" ref={sectionRef}>
            <div className={`container ${styles.inner}`} ref={contentRef}>

                <div className={styles.kicker} ref={kickerRef}>
                    شریک رشد کسب‌وکارهای ایرانی از ۱۴۰۴
                </div>

                <h1 className={styles.headline}>
                    <span className={styles.lineMask}>
                        <span className={styles.lineInner} ref={line1Ref}>
                            از ریشه رشد می‌کنید،
                        </span>
                    </span>
                    <span className={styles.lineMask}>
                        <span
                            className={`${styles.lineInner} ${styles.headlineAccent}`}
                            ref={line2Ref}
                        >
                            ما مطمئن می‌شویم.
                        </span>
                    </span>
                </h1>

                <p className={styles.subtext} ref={subtextRef}>
                    استراتژی دیجیتال، سیستم‌سازی بازاریابی و اجرای دقیق —
                    برای کسب‌وکارهایی که می‌خواهند پایدار و هوشمند رشد کنند.
                </p>

                <div className={styles.actions} ref={actionsRef}>
                    <a href="#contact" className={styles.ctaPrimary}>
                        شروع همکاری
                    </a>
                    <a href="#portfolio" className={styles.ctaGhost}>
                        مشاهده نمونه کارها
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </a>
                </div>

                <dl className={styles.proof} ref={proofRef}>
                    {stats.map((s, i) => (
                        <div className={styles.statGroup} key={s.label}>
                            <div className={styles.stat}>
                                <dd className={styles.statNum}>
                                    <span className={styles.lineMask}>
                                        <span
                                            className={styles.lineInner}
                                            ref={(el) => { statValueInnerRefs.current[i] = el; }}
                                        >
                                            {s.value}
                                        </span>
                                    </span>
                                </dd>
                                <dt className={styles.statLabel}>{s.label}</dt>
                                <span
                                    className={styles.statBar}
                                    ref={(el) => { statBarRefs.current[i] = el; }}
                                    aria-hidden="true"
                                />
                            </div>
                            {i < stats.length - 1 && (
                                <div className={styles.statDivider} aria-hidden="true" />
                            )}
                        </div>
                    ))}
                </dl>
            </div>

            <div className={styles.scrollCue} ref={scrollCueRef} aria-hidden="true">
                <span className={styles.scrollCueLine} />
                <span className={styles.scrollCueText}>پیمایش کنید</span>
            </div>

            <div className={styles.bgWatermark} aria-hidden="true" ref={watermarkRef}>
                <img src={logoBg} alt="" className={styles.watermarkImg} />
            </div>
        </section>
    );
}

export default Hero;
