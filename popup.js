const openPopup = document.getElementById('open_popup');
const savePopup = document.getElementById('save_popup');
const mainPopup = document.getElementsByClassName('popup');

openPopup.addEventListener('click', function(e){
    e.preventDefault();
    mainPopup.classList('active');
})
