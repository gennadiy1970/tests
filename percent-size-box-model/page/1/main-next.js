var   sb     = _id("sb"),
      next   = _id("next"),
      cong   = _id("congratulation"),
      fz1    = _id("fz1"),
      fz2    = _id("fz2"),
      fz3    = _id("fz3"),
      fz4    = _id("fz4"),
      box1    = _id("box1");

sb.addEventListener('click', function() {

  let size1 = fz1.value;
  let size2 = fz2.value;
  let size3 = fz3.value;
  let size4 = fz4.value;

  console.log('size1 = ', size1);
  console.log('size2 = ', size2);
  console.log('size3 = ', size2);
  console.log('size4 = ', size2);

  box1.style.cssText = `margin-top: ${size1}%; margin-right: ${size2}%;margin-bottom: ${size3}%; margin-left: ${size4}%;`;

  var isSize1 = (size1 == 10) ? 1 : 0;
  if (isSize1 != 1) {alert ("Ошибка в .box1")};
  var isSize2 = (size2 == 10) ? 1 : 0;
  if (isSize2 != 1) {alert ("Ошибка в .box2")};
  var isSize3 = (size3 == 15) ? 1 : 0;
  if (isSize3 != 1) {alert ("Ошибка в .box3")};
  var isSize4 = (size4 == 40) ? 1 : 0;
  if (isSize4 != 1) {alert ("Ошибка в .box4")};
  console.log('all = ', isSize1 + " " + isSize2 + " " + isSize3 + " " + isSize4);

  if(isSize1 + isSize2 + isSize3 + isSize4 === 4) {
    next.style.display = 'inline-block';
    cong.style.display = 'inline-block';
    sb.style.display = 'none';
  }

});
