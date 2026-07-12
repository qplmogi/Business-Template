import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useScrollAnimation() {
    const ref = useRef(null);

    const [isInView, setIsInView] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
        setIsInView(true);
        return;
        }

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(el);
            }
        },
        { threshold: 0, rootMargin: '-10%' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return { ref, isInView };
}

export default useScrollAnimation;