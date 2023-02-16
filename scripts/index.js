const mainPopup = document.querySelector('#main_popup');
const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('#profil-close_popup');
const savePopup = document.querySelector('#profile-save_popup');
const editNameProfile = document.querySelector('.profile__name');
const editDestinyProfile = document.querySelector('.profile__destiny');
const nameInPopup = document.querySelector('.popup__input_type_name');
const destinyInPopup = document.querySelector('.popup__input_type_destiny');

const cardPopup = document.querySelector('#card-popup');
const openCard = document.querySelector('.profile__add-button');
const closeCard = document.querySelector('#card-close_popup');
const savePopupCard = document.querySelector('#card-save_popup');
const placeInPopupCard = document.querySelector('.popup__input_type_placename');
const imageInPopupCard = document.querySelector('.popup__input_type_imagename');


const cardTemplate = document.querySelector('#card-template').content;
const cardAddList = document.querySelector('.elements__list');

const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
    

initialCards.forEach((item) => {
    const cardElements = cardTemplate.querySelector('.card').cloneNode(true);
    cardElements.querySelector('.card__image').src = item.link
    cardElements.querySelector('.card__title').textContent = item.name
    cardAddList.append(cardElements);
});

function cardAdd(e){
    e.preventDefault();
    const cardElements = cardTemplate.querySelector('.card').cloneNode(true);
    cardElements.querySelector('.card__image').src = imageInPopupCard.value;
    cardElements.querySelector('.card__title').textContent = placeInPopupCard.value;
    cardAddList.append(cardElements);
    popupCloseCard();
}

function profileEdit(e){
    e.preventDefault();
    editNameProfile.textContent = nameInPopup.value;
    editDestinyProfile.textContent = destinyInPopup.value;
    popupClose();
}

function popupClose(){
    mainPopup.classList.remove('popup_opened');
}

function popupCloseCard(){
    cardPopup.classList.remove('popup_opened');
}

function popupOpen(){
    mainPopup.classList.add('popup_opened');
    nameInPopup.value = editNameProfile.textContent;
    destinyInPopup.value = editDestinyProfile.textContent;
}

function popupOpenCard(){
    cardPopup.classList.add('popup_opened');
}

const likePopupCard = document.querySelectorAll('.card__button-like');
likePopupCard.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('card__button-like_active');
    });
});



openPopup.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose);
mainPopup.addEventListener('submit', profileEdit);


openCard.addEventListener('click', popupOpenCard);
closeCard.addEventListener('click', popupCloseCard);
cardPopup.addEventListener('submit', cardAdd);
