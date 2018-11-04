var   sb     = _id("sb"),
      next   = _id("next"),
      cong   = _id("congratulation"),
      fz1    = _id("fz1"),
      fz2    = _id("fz2"),
      box1    = _id("box1");

sb.addEventListener('click', function() {

  let size1 = fz1.value;
  let size2 = fz2.value;

  console.log('size1 = ', size1);
  console.log('size2 = ', size2);

  box1.style.cssText = `width: ${size1}%; height: ${size2}%;`;

  var isSize1 = (size1 == 70) ? 1 : 0;
  if (isSize1 != 1) {alert ("Ошибка в .box1")};
  var isSize2 = (size2 == 70) ? 1 : 0;
  if (isSize2 != 1) {alert ("Ошибка в .box2")};
  console.log('all = ', isSize1 + " " + isSize2);

  if(isSize1 + isSize2 === 2) {
    next.style.display = 'inline-block';
    cong.style.display = 'inline-block';
    sb.style.display = 'none';
  }

});
