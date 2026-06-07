// تسجيل مكتبة الـ ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// أنيميشن السكشن الأول (يختفي ويصغر مع النزول)
gsap.to(".hero .content", {
    y: -100, // يصعد ليوا
    opacity: 0, // يختفي
    scale: 0.9, // يصغر
    scrollTrigger: {
        trigger: ".hero",
        start: "top top", // يبدأ لما يكون السكشن بأعلى الشاشة
        end: "bottom center", // ينتهي لما يوصل لنص الشاشة
        scrub: 1 // هذا الرقم هو اللي يسوي النعومة (Smoothness) بحيث يتبع حركة الماوس
    }
});

// أنيميشن السكشن الثاني (يظهر من العدم مع النزول)
gsap.from(".pact .content", {
    y: 150, // يجي من جوة
    opacity: 0, // يكون مخفي
    scale: 1.1, // يكون كبير ويصغر
    filter: "blur(10px)", // يجي مغوش ويوضح
    scrollTrigger: {
        trigger: ".pact",
        start: "top bottom",
        end: "center center",
        scrub: 1.5 // يتبع حركة الماوس بنعومة عالية جداً
    }
});
