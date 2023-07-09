const sideBar = function() {
    const sideBar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.onclick = () => {
        sideBar.classList.toggle('sidebar_active');
        hamburger.classList.toggle('hamburger_active');
    };
}

export default sideBar;