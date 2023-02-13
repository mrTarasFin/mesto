const openPopup = document.querySelector('.profile__edit-button');
const openCard = document.querySelector('.profile__add-button')
const closePopup = document.querySelector('.popup__close-button')
const savePopup = document.querySelector('.popup__save-button');
const mainPopup = document.querySelector('.popup');
const cardPopup = document.querySelector('#card-popup');
let editNameProfile = document.querySelector('.profile__name');
let editDestinyProfile = document.querySelector('.profile__destiny');
let editPlaceCard = document.querySelector('.card__title');
let editImageCard = document.querySelector('.card__image');
let nameInPopup = document.querySelector('.popup__input.popup__input_type_name');
let destinyInPopup = document.querySelector('.popup__input.popup__input_type_destiny');
let placeInPopupAdd = document.querySelector('.popup__input.popup__input_type_placename');
let imageInPopupAdd = document.querySelector('.popup__input.popup__input_type_imagename');


function profileEdit(e){
    e.preventDefault();
    editNameProfile.textContent = nameInPopup.value;
    editDestinyProfile.textContent = destinyInPopup.value;
    popupClose();
}

function popupClose(){
    mainPopup.classList.remove('popup_opened');
}

function popupOpen(){
    mainPopup.classList.add('popup_opened');
    nameInPopup.value = editNameProfile.textContent;
    destinyInPopup.value = editDestinyProfile.textContent;
}

function popupOpenAdd(){
    cardPopup.classList.add('popup_opened');
    placeInPopupAdd.value = editPlaceCard.textContent;
    imageInPopupAdd.value = editImageCard.textContent;
}

openPopup.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

mainPopup.addEventListener('submit', profileEdit);

cardPopup.addEventListener('click', popupOpenAdd)