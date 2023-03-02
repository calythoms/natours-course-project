class Popup {
    constructor() {
        this.popupBackground = document.querySelector('.popup');
        this.events();
    }

    events() {
        this.popupBackground.addEventListener('click', (e) => this.outsidePopupClickClose(e));
        window.addEventListener('keydown', (e) => this.escClosePopup(e));
    }

    outsidePopupClickClose(e) {
        if (e.target.closest('.popup__content')) return;
        this.closePopup();
    }

    escClosePopup(e) {
        if (e.code === 'Escape' && window.location.href.includes('#popup')) this.closePopup();
    }

    closePopup() {
        window.location.href = '#section-tours';
    }
}

export default Popup;