function showContent(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.add('hidden');
        section.classList.remove('active', 'visible');
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
}

function handleHashChange() {
    if (window.location.hash === '#APEX') {
        showContent('APEX');
    } else if (window.location.hash === '#valorant') {
        showContent('valorant')
    }
}

window.onload = function() {
    handleHashChange();
};

window.addEventListener('hashchange', handleHashChange);
