window.onload = function() {
    const pages = document.querySelectorAll('.page');

    window.addEventListener('scroll', function() {
        let current = '';

        pages.forEach((page) => {
            const pageTop = page.offsetTop;
            const pageHeight = page.clientHeight;

            if (pageTop <= window.scrollY && window.scrollY < pageTop + pageHeight) {
                current = page.getAttribute('id');
            }
        });

        const links = document.querySelectorAll('nav ul li a');

        links.forEach((link) => {
            link.classList.remove('active');

            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
};
