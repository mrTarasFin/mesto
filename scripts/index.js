const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button')
const savePopup = document.querySelector('.popup__save-button');
const mainPopup = document.querySelector('.popup');
let editNameProfile = document.querySelector('.profile__name');
let editDestinyProfile = document.querySelector('.profile__destiny');
let nameInPopup = document.querySelector('.popup__input_type_name');
let destinyInPopup = document.querySelector('.popup__input_type_destiny');


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

openPopup.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

mainPopup.addEventListener('submit', profileEdit);