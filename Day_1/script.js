let panels = document.querySelectorAll('.panel');


// ================ Add the active class to a panel clicked ==================

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})


// =============== Decleare a function to remove the active class from all panel =================

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}