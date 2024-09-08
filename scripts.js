document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const tabId = this.dataset.tab;

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(tabId).classList.add('active');
    });
});