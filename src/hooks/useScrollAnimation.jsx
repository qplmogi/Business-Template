import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let sharedObserver = null;
const callbackMap  = new WeakMap();

function getSharedObserver() {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const cb = callbackMap.get(entry.target);
                if (cb) {
                cb();
                callbackMap.delete(entry.target);
                sharedObserver.unobserve(entry.target);
                }
            }
            });
        },
        { threshold: 0, rootMargin: '-10%' }
        );
    }
    return sharedObserver;
}

function useScrollAnimation() {
    const ref       = useRef(null);
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

        const observer = getSharedObserver();
        callbackMap.set(el, () => setIsInView(true));
        observer.observe(el);

        return () => {
        callbackMap.delete(el);
        observer.unobserve(el);
        };
    }, []);

    return { ref, isInView };
}

export default useScrollAnimation;