import { useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './AnimatedSection.css';

function AnimatedSection({
    children,
    variant = 'fadeUp',
    delay = 0,
    duration = 0.55,
    className = '',
    }) {
    const { ref, isInView } = useScrollAnimation();

    return (
        <div
        ref={ref}
        className={[
            styles.base,
            styles[variant],
            isInView ? styles.visible : '',
            className,
        ].filter(Boolean).join(' ')}
        style={{
            transitionDelay:    isInView ? `${delay}s`    : '0s',
            transitionDuration: `${duration}s`,
        }}
        >
        {children}
        </div>
    );
}

export default AnimatedSection;