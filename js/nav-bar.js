document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    toggleBtn.addEventListener('click', function () {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 600) {
            mobileNav.style.display = 'none';
        }
    });
});