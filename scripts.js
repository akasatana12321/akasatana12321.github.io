document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            contents.forEach(content => {
                content.classList.add('hidden');
                if (content.id === tab) {
                    content.classList.remove('hidden');
                }
            })
        })
    })
})