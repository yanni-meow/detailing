const modals = document.querySelectorAll('.modal');

// modal windows can't be scrolled
modals.forEach(modal => {
    modal.addEventListener('wheel', (event) => event.preventDefault());
    modal.addEventListener('touchmove', (event) => event.preventDefault());
});

// modal windows closes with data-value of close btn
const closeBtns = document.querySelectorAll('.modal_close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modals.forEach(modal => {
            if (modal.classList.contains(btn.dataset.value) || modal.classList.contains('blur')) modal.classList.add('hidden')
        })
    })
});

// pre added value of service
const services = document.querySelectorAll('input[type=checkbox]')
window.onload = () => {
    services.forEach(item => {
        if (window.location.pathname === '/') return null
        if (item.value.includes( window.location.pathname.replaceAll("/","").replaceAll(".html",""))) item.checked = true
    })
}
