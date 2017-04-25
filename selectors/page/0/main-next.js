var   sb     = _id("sb"),
      next   = _id("next"),
      cong   = _id("congratulation"),
      fz1    = _id("fz1"),
      fz2    = _id("fz2"),
      fz3    = _id("fz3"),
      fz4    = _id("fz4"),
      cont   = _id("container"),
      box1    = _id("box1"),
      box2    = _id("box2"),
      box3    = _id("box3"),
      box4    = _id("box4");

sb.addEventListener('click', function() {

  let color1 = fz1.value;
  let color2 = fz2.value;
  let color3 = fz3.value;
  let color4 = fz4.value;

  console.log('color1 = ', color1);
  console.log('color2 = ', color2);
  console.log('color3 = ', color3);
  console.log('color4 = ', color4);

  cont.style.cssText = `color: ${color1};`;  // green
  box1.style.cssText = `color: ${color3};`;  // red
  box2.style.cssText = `color: ${color4};`;  // blue
  box3.style.cssText = `color: ${color2};`;  // yellow
  box4.style.cssText = `color: ${color2};`;  // yellow

  var isColor1 = (color1 == "green") ? 1 : 0;
  if (isColor1 != 1) {alert ("Ошибка в .box1")};
  var isColor2 = (color2 == "yellow") ? 1 : 0;
  if (isColor2 != 1) {alert ("Ошибка в .box2")};
  var isColor3 = (color3 == "red") ? 1 : 0;
  if (isColor3 != 1) {alert ("Ошибка в .box3")};
  var isColor4 = (color4 == "blue") ? 1 : 0;
  if (isColor4 != 1) {alert ("Ошибка в .box4")};

  console.log('all = ', isColor1 + " " + isColor2 + " " + isColor3 + " " + isColor4);

  if(isColor1 + isColor2 + isColor3 + isColor4 === 4) {
    next.style.display = 'block';
    cong.style.display = 'block';
    sb.style.display = 'none';
  }

});
