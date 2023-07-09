const filter = function() {
    const filter = document.querySelector('.filter');
    const tab = document.querySelectorAll('.filter__item-link');

    filter.onclick = (event) => {
        if (event.target.tagName === 'A') {
            tab.forEach(el => el.classList.remove('filter__item-link_active'));
            event.target.classList.add('filter__item-link_active');
        }
        return false;
    }
}

export default filter;