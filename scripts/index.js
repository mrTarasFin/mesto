const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button')
const savePopup = document.querySelector('.popup__save-button');
const mainPopup = document.querySelector('.popup');
let editNameProfile = document.querySelector('.profile__name');
let editDestinyProfile = document.querySelector('.profile__destiny');
let nameIn = document.getElementsByClassName('.popup__input_type_name');
let destinyIn = document.getElementsByClassName('.popup__input_type_destiny');


function profileEdit(){
    
    editNameProfile.textContent = nameIn.value;
    editDestinyProfile.textContent = destinyIn.value;
}

function popupClose(){
    mainPopup.classList.remove('popup_opened');
}

function popupOpen(){
    mainPopup.classList.add('popup_opened');
}

openPopup.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

savePopup.addEventListener('click', function(e){
    e.preventDefault();
    profileEdit();
    popupClose();
});