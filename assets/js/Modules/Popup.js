class Popup {
    // Click outsite popup closes it DONE
    // Esc key closes it
    constructor() {
        this.popupBackground = document.querySelector('.popup');
        this.events();
    }

    events() {
        this.popupBackground.addEventListener('click', (e) => this.outsidePopupClickClose(e))
    }

    outsidePopupClickClose(e) {
        if (e.target.closest('.popup__content')) return;
        window.location.href = '#section-tours';
    }
}

export default Popup;