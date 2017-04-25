var   mx     = _id("mx"),
      boxX   = _id("box-x"),
      sb     = _id("sb"),
      box    = _id("box"),
      next   = _id("next"),
      cong   = _id("congratulation");

const LEFT   = box.getBoundingClientRect().left;

boxX.textContent = 0;

sb.addEventListener('click', function() {

  let x = mx.value;
  console.log('x = ', x);
  if ( !Number.isInteger(+x) ) {
    alert('Введите целое число');
    return false;
  }
  box.style.cssText = `margin-left: ${x}px;`;

  let res = (x == 500 ? 1 : 0);

  if(res == 1) {
    next.style.display = 'block';
    cong.style.display = 'block';
    sb.style.display = 'none';
  } else {
    alert("Неверно. Повторите попытку!")
  }

  boxX.textContent = x;
  mx.value = 0;
});
