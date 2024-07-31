export function initializeButtons() {
  const btns = document.querySelectorAll('.btn'),
  btnContent = document.querySelectorAll('.toggle-element'),
  btnParent = document.querySelector('.question-block-questions');

function hideElements(){
btnContent.forEach(item => {
item.classList.remove('expanded');
item.style.height = '0';
item.style.opacity = '0';
item.style.visibility = 'hidden';
});

btns.forEach(item => {
item.classList.remove('questions-active');
const icon = item.querySelector('i');
if (icon) {
  icon.classList.remove('fa-minus');
  icon.classList.add('fa-plus');
}
});
}

function showContent(i = 0){
const content = btnContent[i];

content.classList.add('expanded');
content.style.height = content.scrollHeight + 'px';
content.style.opacity = '1';
content.style.visibility = 'visible';

btns[i].classList.add('questions-active');
const icon = btns[i].querySelector('i');
if (icon) {
icon.classList.remove('fa-plus');
icon.classList.add('fa-minus');
} else {
const newIcon = document.createElement('i');
newIcon.className = 'fa fa-minus';
newIcon.setAttribute('aria-hidden', 'true');
btns[i].appendChild(newIcon);
}
}

hideElements();
showContent();

btnParent.addEventListener('click', (event) => {
const target = event.target.closest('.btn'); // Находим ближайшую кнопку

if (target) {
btns.forEach((item, i) => {
  if (target == item) {
    hideElements();
    showContent(i);
  }
});
}
});
}
