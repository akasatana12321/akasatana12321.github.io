function showContent(sectionId) {
    // 全てのセクションを隠す
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    // 選択されたセクションを表示
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
}

function returnToAPEX() {
    if (window.location.hash === '#APEX') {
        showContent('APEX');
    }
}

window.onload = function() {
    if (window.location.hash === '#APEX') {
        showContent('APEX');
    }
};