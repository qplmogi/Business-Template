import { forwardRef } from "react";
const RootLogo = forwardRef(function RootLogo({ className, style }, ref) {
    return (
        <svg
            ref={ref}
            className={className}
            style={style}
            viewBox="0 0 260 240"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            aria-label="نوین دیجیتال — لوگوی ریشه"
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* ساقه اصلی عمودی */}
                <path className="rp" id="rp-spine"  d="M130,10 L130,218" strokeWidth="14"/>
        
                {/* ردیف بالا — از Y=95 به سمت بالا‌خارج */}
                <path className="rp" id="rp-tl1"    d="M130,95 L36,66"   strokeWidth="13"/>
                <path className="rp" id="rp-tr1"    d="M130,95 L224,66"  strokeWidth="13"/>
                <path className="rp" id="rp-tl2"    d="M130,95 L64,74"   strokeWidth="11.5"/>
                <path className="rp" id="rp-tr2"    d="M130,95 L196,74"  strokeWidth="11.5"/>
                <path className="rp" id="rp-tl3"    d="M130,95 L92,82"   strokeWidth="10.5"/>
                <path className="rp" id="rp-tr3"    d="M130,95 L168,82"  strokeWidth="10.5"/>
                <path className="rp" id="rp-tl4"    d="M130,95 L112,88"  strokeWidth="10"/>
                <path className="rp" id="rp-tr4"    d="M130,95 L148,88"  strokeWidth="10"/>
        
                {/* ردیف پایین — از Y=120 به سمت پایین‌خارج */}
                <path className="rp" id="rp-bl1"    d="M130,120 L18,188"  strokeWidth="13"/>
                <path className="rp" id="rp-br1"    d="M130,120 L242,188" strokeWidth="13"/>
                <path className="rp" id="rp-bl2"    d="M130,120 L50,186"  strokeWidth="11.5"/>
                <path className="rp" id="rp-br2"    d="M130,120 L210,186" strokeWidth="11.5"/>
                <path className="rp" id="rp-bl3"    d="M130,120 L78,185"  strokeWidth="10.5"/>
                <path className="rp" id="rp-br3"    d="M130,120 L182,185" strokeWidth="10.5"/>
                <path className="rp" id="rp-bl4"    d="M130,120 L106,184" strokeWidth="10"/>
                <path className="rp" id="rp-br4"    d="M130,120 L154,184" strokeWidth="10"/>
            </g>
        </svg>
        );
});
    
export default RootLogo;