const search = document.querySelector('.search');
const searchInput = document.querySelector('.search input');

search.addEventListener('mouseover', function () {
    searchInput.focus();
    search.classList.add('focused');
    searchInput.setAttribute('placeholder', 'Search');
})

searchInput.addEventListener('mouseout', function() {
    search.classList.remove('focused');
    searchInput.removeAttribute('placeholder', '');
})

let clicked = false;
const moreInfo = document.querySelector('.trade .more');

moreInfo.addEventListener('click', function () {
    if(clicked == false) {
        document.querySelector('.trade .detailed').style.display = "block";
        clicked = true;}
    else {
        document.querySelector('.trade .detailed').style.display = "none";
        clicked = false;
    }
})