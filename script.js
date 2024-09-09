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

function returnTovalo() {
    if (window.location.hash === '#valorant') {
        showContent('valorant');
    }
}

window.onload = function() {
    if (window.location.hash === '#valorant') {
        showContent('valorant');
    }
};

function returnToStreet() {
    if (window.location.hash === '#Street') {
        showContent('Street');
    }
}

window.onload = function() {
    if (window.location.hash === '#Street') {
        showContent('Street');
    }
};

function returnToOW2() {
    if (window.location.hash === '#OW2') {
        showContent('OW2');
    }
}

window.onload =function() {
    if (window.location.hash === '#OW2') {
        showContent('OW2');
    }
};

function returnToLoL() {
    if (window.location.hash === '#LoL') {
        showContent('LoL');
    }
}

window.onload = function() {
    if (window.location.hash === '#LoL') {
        showContent('LoL');
    }
};  