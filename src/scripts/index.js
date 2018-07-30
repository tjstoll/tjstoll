document.getElementsByClassName('small-menu')[0].style.display = 'none';

var toggleSmallNav = function() {
  var controls = document.getElementsByClassName('controls')[0];
  var menu = document.getElementsByClassName('small-menu')[0];
  var smallNav = document.getElementsByClassName('navigation-small')[0];

  if (menu.style.display == 'none') {
    menu.style.display = 'block';
    controls.classList.add('fa-times');
    controls.classList.remove('fa-bars');
    // smallNav.style.background = 'rgba(0,0,0,0.9)';
    console.log('opened');
  } else {
    menu.style.display = 'none';
    controls.classList.add('fa-bars');
    controls.classList.remove('fa-times');
    // smallNav.style.background = 'none';
    console.log('closed');
  }

}
