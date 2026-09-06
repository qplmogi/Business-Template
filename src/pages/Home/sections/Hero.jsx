import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

// TODO: replace these with the real hero photography when ready.
import desktopHeroImage from '../../../assets/hero/hero-desktop.PNG';
import mobileHeroImage from '../../../assets/hero/hero-mobile.PNG';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const sectionRef    = useRef(null);
    const kickerRef     = useRef(null);
    const line1Ref       = useRef(null);
    const line2Ref       = useRef(null);
    const subtextRef    = useRef(null);
    const actionsRef    = useRef(null);
    const metaRef       = useRef(null);
    const scrollCueRef  = useRef(null);

    useLayoutEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            gsap.set(
                [kickerRef.current, subtextRef.current, actionsRef.current, metaRef.current],
                { clearProps: 'all' }
            );
            gsap.set([line1Ref.current, line2Ref.current], { clearProps: 'transform' });
            return;
        }

        const ctx = gsap.context(() => {
            const isDesktop = window.matchMedia('(min-width: 960px)').matches;
            const dist = isDesktop ? 32 : 18;

            const fadeEls = [kickerRef.current, subtextRef.current, actionsRef.current, metaRef.current];
            const maskEls = [line1Ref.current, line2Ref.current];

            gsap.set(fadeEls, { opacity: 0, y: dist });
            gsap.set(maskEls, { yPercent: 110 });
            gsap.set(scrollCueRef.current, { opacity: 0, y: 8 });

            const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
            entrance
                .to(kickerRef.current, { opacity: 1, y: 0, duration: 0.4 })
                .to(line1Ref.current,  { yPercent: 0, duration: 0.75, ease: 'power4.out' }, '-=0.1')
                .to(line2Ref.current,  { yPercent: 0, duration: 0.75, ease: 'power4.out' }, '-=0.5')
                .to(subtextRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
                .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
                .to(metaRef.current,    { opacity: 1, y: 0, duration: 0.4 }, '-=0.25')
                .to(scrollCueRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.15');

            const cueLoop = gsap.to(scrollCueRef.current, {
                y: 6, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: -1,
                delay: entrance.duration(),
            });

            let cuePaused = false;
            const st = ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=200',
                onUpdate: (self) => {
                    if (!cuePaused && self.progress > 0) {
                        cuePaused = true;
                        cueLoop.pause();
                        gsap.to(scrollCueRef.current, { opacity: 0, duration: 0.2 });
                    } else if (self.progress === 0 && cuePaused) {
                        cuePaused = false;
                        gsap.to(scrollCueRef.current, { opacity: 1, duration: 0.2 });
                        cueLoop.resume();
                    }
                },
            });

            return () => {
                entrance.kill();
                cueLoop.kill();
                st.kill();
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.hero} id="hero" ref={sectionRef}>

            {/* ══ FULL-BLEED BACKGROUND ══ */}
            <div className={styles.bg} aria-hidden="true">
                <img
                    className={styles.bgImageDesktop}
                    src={desktopHeroImage}
                    alt=""
                    loading="eager"
                />
                <img
                    className={styles.bgImageMobile}
                    src={mobileHeroImage}
                    alt=""
                    loading="eager"
                />
                <div className={styles.scrim} />
            </div>

            {/* ══ CONTENT ══ */}
            <div className={`container ${styles.inner}`}>

                <div className={styles.eyebrow} ref={kickerRef}>
                    <span className={styles.eyebrowNum}>۰۱</span>
                    <span className={styles.eyebrowLine} />
                    <span className={styles.eyebrowText}>
                        شریک رشد کسبوکارهای ایرانی از ۱۴۰۴
                    </span>
                </div>

                <h1 className={styles.headline}>
                    <span className={styles.lineMask}>
                        <span className={styles.lineInner} ref={line1Ref}>
                            از ریشه رشد میکنید،
                        </span>
                    </span>
                    <span className={styles.lineMask}>
                        <span
                            className={`${styles.lineInner} ${styles.headlineAccent}`}
                            ref={line2Ref}
                        >
                            ما مطمئن میشویم.
                        </span>
                    </span>
                </h1>

                <p className={styles.subtext} ref={subtextRef}>
                    استراتژی دیجیتال، سیستمسازی بازاریابی و اجرای دقیق —
                    برای کسبوکارهایی که میخواهند پایدار و هوشمند رشد کنند.
                </p>

                <div className={styles.actions} ref={actionsRef}>
                    <a href="#contact" className={styles.ctaPrimary}>
                        شروع یک پروژه
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#portfolio" className={styles.ctaGhost}>
                        مشاهده نمونه کارها
                    </a>
                </div>

                <div className={styles.meta} ref={metaRef}>
                    <span className={styles.metaLang}>EN</span>
                    <span className={styles.metaDivider} aria-hidden="true" />
                    <span className={styles.metaCopyright}>© ۱۴۰۴ ریشه</span>
                </div>
            </div>

            <div className={styles.scrollCue} ref={scrollCueRef} aria-hidden="true">
                <span className={styles.scrollCueLine} />
                <span className={styles.scrollCueText}>اسکرول کنید</span>
            </div>
        </section>
    );
}

export default Hero;