# RISHEH — INTERACTION SPECIFICATION v1

## Approved UI Interaction Contract

**Project:** Risheh Official Website — V2 Rebuild  
**Status:** Draft for approval  
**Reference:** Approved UI / Visual Direction  
**Constraint:** Mobile First / RTL / Persian-first

---

# 01 — PURPOSE

این سند رفتار Interactionهای موجود در UI تأییدشده را برای پیاده‌سازی Frontend مشخص می‌کند.

این سند:
- Visual Direction جدید ایجاد نمی‌کند.
- Component جدید تعریف نمی‌کند.
- Feature جدید اضافه نمی‌کند.
- Layout تأییدشده را تغییر نمی‌دهد.
- Animation جدیدی خارج از رفتارهای لازم طراحی نمی‌کند.

هدف فقط تبدیل UI تأییدشده به یک قرارداد قابل‌اجرای Frontend است.

---

# 02 — GLOBAL INTERACTION RULES

## Mobile First

اولویت رفتاری:

390px
↓
480px
↓
768px
↓
1024px
↓
1280px
↓
1440px

Desktop نباید صرفاً نسخه بزرگ‌شده Mobile باشد؛ اما رفتار Mobile مرجع اولیه است.

## Input

تمام Interactionهای اصلی باید با این ورودی‌ها بررسی شوند:

- Touch
- Mouse
- Keyboard

Hover هرگز نباید تنها راه دسترسی به محتوا یا عملکرد باشد.

## Motion

Motion فقط برای موارد زیر استفاده می‌شود:

- تغییر State
- انتقال Context
- نمایش Relationship
- راهنمایی کاربر

---

# 03 — NAVIGATION

## Trigger

### Mobile
- Tap روی Menu Button
- Tap روی navigation item

### Desktop
- Click روی navigation item
- Keyboard: Enter / Space در کنترل‌های مناسب

## Initial

- Header visible
- Menu closed
- Current section indicated

## Active / Open

### Mobile

Menu button → active  
Navigation panel → visible  
Page interaction → controlled

### Desktop

Navigation remains visible.  
Current section visually indicated.

## Exit

- Tap روی Menu Button
- Tap روی navigation item
- Escape
- Navigation به route/section دیگر

## Duration

```text
Menu open/close: 180–300ms
Navigation state: 180–300ms
Easing
--ease-standard
Interruptibility
بله.
کاربر باید بتواند:
* منو را سریع باز و بسته کند.
* قبل از پایان transition مسیر دیگری را انتخاب کند.
* بدون انتظار برای animation ادامه دهد.
Mobile behavior
Mobile navigation باید:
* touch-friendly باشد.
* focus را مدیریت کند.
* هنگام Open شدن interactionهای نامرتبط صفحه را کنترل کند.
* با Escape بسته شود.
* پس از بسته شدن، focus را به Menu Button برگرداند.
Reduced-motion fallback
Open/close بدون choreography
State change فوری یا با transition بسیار کوتاه
Accessibility
* Menu Button دارای accessible name باشد.
* aria-expanded وضعیت را نشان دهد.
* در صورت وجود panel، aria-controls استفاده شود.
* focus management انجام شود.
* Escape منو را ببندد.

⸻

04 — HERO
Hero در UI تأییدشده یک composition تعاملی است، نه carousel.
Trigger
ورود کاربر به صفحه.
Interactionهای ثانویه فقط در صورت وجود در UI تأییدشده:
* Scroll
* Pointer movement
* CTA interaction
Initial
* Hero content visible
* Primary message dominant
* Supporting visual visible
* CTA available
Active
با ورود/اسکرول کاربر:
* عناصر Hero می‌توانند با Motion موجود وارد/تغییر وضعیت شوند.
* hierarchy اصلی نباید تغییر کند.
* CTA باید همیشه قابل دسترسی باقی بماند.
Exit
وقتی کاربر از Hero عبور می‌کند:
Hero → next content
نباید کاربر در Hero قفل شود.
Duration
Entrance: 500–800ms
Micro state: 180–300ms
برای scroll-linked behavior از duration ثابت به‌عنوان زمان حرکت استفاده نشود؛ movement تابع progress اسکرول باشد.
Easing
Entrance: --ease-enter
Micro: --ease-standard
Interruptibility
کاملاً بله.
Scroll و user input همیشه اولویت دارند.
Mobile behavior
در 390px:
* هیچ pin طولانی نباشد.
* CTA بدون animation قابل دسترسی باشد.
* Hero نباید ارتفاع غیرضروری ایجاد کند.
* تصویر/تایپوگرافی نباید باعث overflow افقی شود.
* interactionهای pointer-only حذف یا به touch/state تبدیل شوند.
Reduced-motion fallback
Hero content → static composition
Scroll-linked choreography → disabled
CTA → بدون transition ضروری
Accessibility
محتوای Hero باید بدون animation کاملاً قابل درک باشد.

⸻

05 — SERVICES
Services به‌صورت یک مجموعه قابل انتخاب در UI تعریف می‌شود.
STRATEGY
BRAND
DESIGN
DEVELOPMENT
GROWTH
Trigger
Mobile
Tap روی Service
Desktop
Pointer interaction / Click / Keyboard
Hover فقط enhancement است.
Initial
یک Service فعال/پیش‌فرض
سایر موارد inactive
Active
با انتخاب Service:
Service → active
Supporting content → تغییر
Visual relationship → update
فقط محتوای مرتبط باید تغییر کند.
Exit
با انتخاب Service دیگر:
Previous → inactive
New → active
Duration
180–500ms
Easing
--ease-standard
Interruptibility
بله.
انتخاب سریع چند Service نباید interaction را قفل کند.
Mobile behavior
Interaction اصلی:
Tap → Active
Tap item دیگر → Replace Active
Hover وجود ندارد.
Reduced-motion fallback
تغییر state بدون choreography؛ فقط active/inactive state تغییر کند.
Accessibility
اگر Service نقش expandable control دارد:
aria-expanded
aria-controls
استفاده شود.
Keyboard:
Tab
Enter / Space

⸻

06 — PROJECT / WORK
Project interaction یکی از مهم‌ترین Interactionهای سایت است.
Trigger
Tap
Click
Keyboard Enter
Hover فقط برای enhancement بصری است.
Initial
* Project preview
* Title / category
* Available interaction
Active
با انتخاب:
Project selected
Visual gains emphasis
Metadata remains understandable
Navigation becomes available
Exit
در صورت navigation:
Project preview
↓
Project detail
در صورت بازگشت:
Project detail
↓
Previous project context
Duration
Micro selection: 180–300ms
Project transition: 500–800ms
Easing
Selection: --ease-standard
Transition: --ease-enter / --ease-exit
Interruptibility
بله، مگر در لحظه‌ای که transition navigation به‌صورت native/route-level در حال commit است.
کاربر نباید برای دیدن پروژه مجبور به تماشای animation باشد.
Mobile behavior
* Tap-first
* No hover dependency
* Preview باید touch-friendly باشد.
* Transition نباید باعث horizontal overflow شود.
* اگر shared transition در Mobile پایدار نیست، navigation باید بدون آن انجام شود.
Reduced-motion fallback
Project preview
↓
Direct route change
بدون shared-element choreography.
Accessibility
Project باید با semantic link یا control مناسب قابل دسترسی باشد.

⸻

07 — PROJECT TRANSITION
این interaction فقط در صورت وجود transition تأییدشده در implementation استفاده می‌شود.
Trigger
User selects project.
Initial
Project preview in page
Active
Selected project visual gains prominence
Metadata remains associated
Exit
Current page context exits
Project detail becomes active
Duration
500–800ms
Easing
--ease-enter
--ease-exit
Interruptibility
تا حد امکان بله.
Navigation correctness همیشه بالاتر از visual transition است.
Mobile behavior
اولویت:
Correct navigation
>
Transition
اگر transition موجب کندی یا instability شود، حذف می‌شود.
Reduced-motion fallback
Immediate route transition.

⸻

08 — TEAM
Team interaction باید بدون hover نیز قابل استفاده باشد.
Trigger
Tap / Click / Keyboard
در صورت وجود reveal interaction در UI.
Initial
Portrait
Name
Role
Active
در صورت interaction:
Selected person
Additional approved information
Exit
Selection changes or section leaves.
Duration
180–300ms
Easing
--ease-standard
Interruptibility
بله.
Mobile behavior
Tap-first.
No hover-only information.
Reduced-motion fallback
State swap بدون animation.
Accessibility
اگر انتخاب‌پذیر است، کنترل semantic داشته باشد و state قابل اعلام باشد.

⸻

09 — CONTACT / CTA
CTA اصلی سایت باید واضح و قابل پیش‌بینی باشد.
Trigger
Tap
Click
Enter
Initial
CTA visible and actionable.
Active
pressed / navigation / form state
Exit
در صورت navigation:
CTA → destination
در صورت form:
CTA → loading → success/error
Duration
180–300ms
Easing
--ease-standard
Interruptibility
بله.
Mobile behavior
Touch target حداقل:
44 × 44px
Reduced-motion fallback
Direct state/navigation.
Accessibility
Accessible name باید مستقل از icon باشد.

⸻

10 — FORM INTERACTION
فقط در صورت وجود Form در مسیر فعلی Contact.
Input
Trigger
Focus / typing
Initial
Empty/default
Active
Focused/filled
Exit
Blur / submit
Duration
180–300ms برای state transition
Easing
--ease-standard
Interruptibility
بله.
Mobile
Keyboard-safe layout و عدم پوشاندن field توسط keyboard.
Reduced motion
Immediate state change.

⸻

11 — FORM VALIDATION
Trigger
Blur
Submit
بسته به validation strategy.
Initial
Field valid/untouched.
Active
Field being edited.
Error
Invalid value
↓
Error state
↓
Error message
Success
Valid submission
↓
Success state
Loading
Submit
↓
Loading
↓
Success / Error
Exit
پس از اصلاح، error باید از state خارج شود.
Duration
180–300ms
Accessibility
* aria-invalid
* error message association
* error must not rely on color alone
* focus only moves when user benefit is clear

⸻

12 — IMAGE INTERACTION
Image interaction باید secondary to content باشد.
Trigger
Project selection
Service selection
Approved pointer interaction
Initial
Stable crop and focal point.
Active
Only approved visual enhancement:
scale
position
opacity
No arbitrary filter or decorative effect.
Exit
Return to base image state.
Duration
300–500ms
Easing
--ease-standard
Interruptibility
بله.
Mobile behavior
No hover-only transformation.
Touch must not require dragging unless the approved interaction explicitly requires it.
Reduced-motion fallback
Static image state.

⸻

13 — CAROUSEL
Carousel is not a default interaction.
اگر در نسخه نهایی UI/UX وجود نداشته باشد، implementation نمی‌شود.
اگر وجود داشته باشد:
Trigger
Swipe
Previous
Next
Keyboard
Initial
First/current slide visible.
Active
Selected slide changes.
Exit
Previous slide leaves.
Duration
300–500ms
Easing
--ease-standard
Interruptibility
بله.
کاربر می‌تواند direction را تغییر دهد.
Mobile behavior
Swipe-first with accessible controls.
Reduced-motion fallback
Instant slide change.
Accessibility
* Previous/next controls accessible
* Current slide state available
* Keyboard support
* No autoplay dependency for comprehension

⸻

14 — GLOBAL STATE PRIORITY
در صورت هم‌زمانی چند state:
Accessibility
↓
User Input
↓
Navigation
↓
Content State
↓
Visual Enhancement
Visual animation هرگز نباید priority بالاتری از navigation یا user input داشته باشد.

⸻

15 — PERFORMANCE RULES FOR INTERACTION
Interaction implementation باید ترجیحاً از موارد زیر استفاده کند:
transform
opacity
clip-path
از animationهای layout-triggering تا حد امکان اجتناب شود.
Scroll-linked interaction باید:
* محدود باشد.
* passive where applicable باشد.
* cleanup داشته باشد.
* محاسبات بی‌نهایت نداشته باشد.
* main thread را block نکند.
GSAP فقط در interactionهایی استفاده شود که CSS/Browser API برای آن‌ها کافی نیست.

⸻

16 — GLOBAL REDUCED-MOTION CONTRACT
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
این fallback باید در صورت نیاز با منطق interaction تکمیل شود؛ صرفاً CSS override برای interactionهای JS کافی نیست.
در reduced motion:
* scroll choreography غیرفعال
* shared transition حذف/کوتاه
* state change حفظ
* navigation حفظ
* content order حفظ

⸻

17 — INTERACTION QA MATRIX
هر interaction اصلی باید حداقل در این حالت‌ها بررسی شود:
Input	390	480	768	1024	1280	1440
Touch	✓	✓	✓	✓	—	—
Mouse	—	—	✓	✓	✓	✓
Keyboard	✓	✓	✓	✓	✓	✓
Reduced Motion	✓	✓	✓	✓	✓	✓
⸻

18 — APPROVAL GATE
قبل از Architecture، این موارد باید تأیید شوند:
✓ Navigation behavior
✓ Hero behavior
✓ Services behavior
✓ Project behavior
✓ Project transition behavior
✓ Team behavior
✓ Contact / CTA behavior
✓ Form behavior — if applicable
✓ Carousel behavior — if applicable
✓ Reduced-motion behavior
✓ Keyboard behavior
✓ Mobile-first behavior
پس از این مرحله:
Interaction Specification
        ↓
UX Flow
        ↓
Architecture
        ↓
Implementation

⸻

FINAL RULE
UI تأییدشده ثابت است.
این سند فقط رفتار آن UI را قابل‌پیاده‌سازی می‌کند.
هیچ interaction صرفاً برای «نمایش قدرت تکنولوژی» اضافه نمی‌شود.
هر interaction باید روی Mobile قابل استفاده، روی Keyboard قابل دسترسی، در Reduced Motion قابل فهم و از نظر Performance قابل دفاع باشد.

