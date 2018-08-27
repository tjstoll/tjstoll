
function toggleNav() {
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var menu = document.getElementsByClassName('menu')[0];

  console.log(getComputedStyle(open, null).display);

  if (getComputedStyle(open, null).display === 'block') {
    // Close menu if open
    open.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'block';
    // console.log('opened');
  } else {
    // Open menu if closed
    open.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'none';
    // console.log('closed');
  }
}
