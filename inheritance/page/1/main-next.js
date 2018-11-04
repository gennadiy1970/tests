var   sb     = _id("sb"),
      next   = _id("next"),
      cong   = _id("congratulation"),
      fz1    = _id("fz1"),
      fz2    = _id("fz2"),
      fz3    = _id("fz3"),
      box1    = _id("box1"),
      box2    = _id("box2"),
      box3    = _id("box3");

sb.addEventListener('click', function() {

  let size1 = fz1.value;
  let size2 = fz2.value;
  let size3 = fz3.value;

  console.log('size1 = ', size1);
  console.log('size2 = ', size2);
  console.log('size3 = ', size3);

  box1.style.cssText = `font-size: ${size1}em;`;
  box2.style.cssText = `font-size: ${size2}em;`;
  box3.style.cssText = `font-size: ${size3}em;`;

  var isSize1 = (size1 == 1.25) ? 1 : 0;
  if (isSize1 != 1) {alert ("Ошибка в .box1")};
  var isSize2 = (size2 == 0.9) ? 1 : 0;
  if (isSize2 != 1) {alert ("Ошибка в .box2")};
  var isSize3 = (size3 == 2) ? 1 : 0;
  if (isSize3 != 1) {alert ("Ошибка в .box3")};
  console.log('all = ', isSize1 + " " + isSize2 + " " + isSize3);

  if(isSize1 + isSize2 + isSize3 === 3) {
    next.style.display = 'inline-block';
    cong.style.display = 'inline-block';
    sb.style.display = 'none';
  }

});
