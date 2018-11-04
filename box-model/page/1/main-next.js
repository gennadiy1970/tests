const my     = _id("my"),
      boxY   = _id("box-y"),
      sb     = _id("sb"),
      box    = _id("box"),
      next   = _id("next"),
      cong   = _id("congratulation");

const TOP    = box.getBoundingClientRect().top;

boxY.textContent = 0;

sb.addEventListener('click', function() {

  let y = +my.value;
  console.log('y = ', y);
  if ( !Number.isInteger(y) ) {
    alert('Введите целое число');
    return false;
  }
  box.style.marginTop = y + 'px';
  let rc = Math.floor(box.getBoundingClientRect().top - TOP);

  let res = (y == 240 ? 1 : 0);

  if(res == 1) {
    next.style.display = 'inline-block';
    cong.style.display = 'block';
    sb.style.display = 'none';
  } else {
    alert("Неверно. Повторите попытку!")
  }

  boxY.textContent = y;
  my.value = 0;
});
