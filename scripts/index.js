const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button')
const savePopup = document.querySelector('.popup__save-button');
const mainPopup = document.querySelector('.popup');
let editNameProfile = document.querySelector('.profile__name');
let editDestinyProfile = document.querySelector('.profile__destiny');
let nameInPopup = document.querySelector('#name-input');
let destinyInPopup = document.querySelector('#destiny-input');


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
    let name = editNameProfile.textContent;
    let destiny = editDestinyProfile.textContent;
    nameInPopup.value = name;
    destinyInPopup.value = destiny;
}

openPopup.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

savePopup.addEventListener('click', profileEdit);