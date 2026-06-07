let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

// دالة الانتقال للشريحة التالية
function goToNextSlide() {
    // التأكد من وجود شرائح تالية
    if (currentSlideIndex < slides.length - 1) {
        // إخفاء الشريحة الحالية
        slides[currentSlideIndex].classList.remove('active');
        
        // الانتقال للشريحة التالية
        currentSlideIndex++;
        
        // إظهار الشريحة الجديدة
        slides[currentSlideIndex].classList.add('active');
    }
}

// الاستماع للنقرات على الشاشة
document.addEventListener('click', function() {
    goToNextSlide();
});

// إضافة دعم لأزرار الكيبورد (زر المسافة أو السهم الأيمن)
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'ArrowRight' || event.code === 'ArrowDown') {
        goToNextSlide();
    }
});
