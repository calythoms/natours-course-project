class Menu {
    constructor() {
        this.menuCheckbox = document.querySelector('.navigation__checkbox');
        this.events();
    }

    events() {
        window.addEventListener('keydown', (e) => this.escCloseMenu(e));
    }

    escCloseMenu(e) {
        if (e.code !== 'Escape' || !this.menuCheckbox.checked) return;
        this.menuCheckbox.checked = false;
    }
}

export default Menu;