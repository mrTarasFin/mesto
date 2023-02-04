const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('close_popup')
const savePopup = document.getElementById('save_popup');
const mainPopup = document.getElementById('main_popup');
let editNameProfile = document.querySelector('.profile__name');
let editDestinyProfile = document.querySelector('.profile__destiny');
let nameIn = document.getElementById('name-input');
let destinyIn = document.getElementById('destiny-input');

function ProfileEdit(){
    
    editNameProfile.textContent = nameIn.value;
    editDestinyProfile.textContent = destinyIn.value;
}

function PopupClose(){
    mainPopup.classList.remove('popup_opened');
}

function PopupOpen(){
    mainPopup.classList.add('popup_opened');
}

openPopup.addEventListener('click', PopupOpen);

closePopup.addEventListener('click', PopupClose);

savePopup.addEventListener('click', function(e){
    e.preventDefault();
    ProfileEdit();
    PopupClose();
});