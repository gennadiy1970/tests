let close = document.getElementById('close');
let modal = document.getElementById('modalContainer');
close.addEventListener('click', function () {
  let modal = _id('modalContainer');
  document.getElementsByTagName("body")[0].removeChild(modal);
})
modal.addEventListener('click', function () {
  document.getElementsByTagName("body")[0].removeChild(modal);
})

let congr = document.getElementById('congratulation');
congr.addEventListener('click', function () {
  congr.style.cssText = "display: none;"
})
