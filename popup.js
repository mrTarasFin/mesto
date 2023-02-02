const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('close_popup')
const savePopup = document.getElementById('save_popup');
const mainPopup = document.getElementById('main_popup');

openPopup.addEventListener('click', function(e){
    e.preventDefault();
    mainPopup.classList.add('active');
})

closePopup.addEventListener('click', function(e){
    e.preventDefault();
    mainPopup.classList.remove('active');
})