import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
    // تأكد من أن العنصر مرئي ويبدأ بكامل الصفحة
    gsap.set('.preloader', {
        clipPath: "circle(100% at 50% 50%)", // إعداد أولي لتغطية العنصر بالكامل
    });

    tl.to('.texts-container', {
        duration: 0,
        opacity: 1,
        ease: 'power3.out',
        delay:1.5,
    }).from('.texts-container span', {
        duration: 1.5,
        ease: 'power3.out',
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
    }).to('.texts-container span', {
        duration: 1,
        ease: 'power3.out',
        y: 70,
        skewY: -20,
        stagger: 0.1,
    }).to('body', {
        duration: 0.01,
        css: {
            overflowY: 'scroll'
        },
        ease: 'power3.out',
    }).from('.sub', {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: 'power3.out',
    })
    .to('.preloader', {
        duration: 1.5,
        clipPath: "circle(0% at 50% 50%)", // تأثير الاختفاء الدائري
        ease: 'power3.inOut',
        onComplete: () => {
            // التأكد من إزالة العنصر بعد الانتهاء
            document.querySelector('.preloader').style.display = 'none';
        },
    }, '-=2')
    ;
}







export const mobileLoaderAnim = () => {
    window.innerWidth < 763 && tl.from(
        '.landing__main2', {
        ease: 'power3.out',
        y: 80,
        delay: 0,
        opacity: 0,
        duration: 1,
    });
}
