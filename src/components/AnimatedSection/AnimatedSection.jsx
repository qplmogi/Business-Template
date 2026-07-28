import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './AnimatedSection.module.css';
import clsx from 'clsx';

function AnimatedSection({
    children,
    variant = 'fadeUp',
    delay    = 0,
    duration = 0.7,
    className,
    }) {
    const { ref, isInView } = useScrollAnimation();

    return (
        <div
        ref={ref}
        className={clsx(
            styles.base,
            styles[variant],
            isInView && styles.visible,
            className,
        )}
        style={{
            transitionDelay:    isInView ? `${delay}s` : '0s',
            transitionDuration: `${duration}s`,
        }}
        >
        {children}
        </div>
    );
}

export default AnimatedSection;