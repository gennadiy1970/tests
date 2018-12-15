var   sb     = _id("sb"),
      next   = _id("next"),
      cong   = _id("congratulation"),
      i_im0    = _id("i_im0"),
      i_im1    = _id("i_im1"),
      i_im2    = _id("i_im2"),
      i_im3    = _id("i_im3"),
      i_im4    = _id("i_im4"),
      im0    = _id("im0"),
      im1    = _id("im1"),
      im2    = _id("im2"),
      im3    = _id("im3"),
      im4    = _id("im4"),
      i_id0    = _id("i_id0"),
      i_id1    = _id("i_id1"),
      i_id2    = _id("i_id2"),
      i_id3    = _id("i_id3"),
      i_id4    = _id("i_id4"),
      id0    = _id("id0"),
      id1    = _id("id1"),
      id2    = _id("id2"),
      id3    = _id("id3"),
      id4    = _id("id4"),
      i_cl0    = _id("i_cl0"),
      i_cl1    = _id("i_cl1"),
      i_cl2    = _id("i_cl2"),
      i_cl3    = _id("i_cl3"),
      i_cl4    = _id("i_cl4"),
      cl0    = _id("cl0"),
      cl1    = _id("cl1"),
      cl2    = _id("cl2"),
      cl3    = _id("cl3"),
      cl4    = _id("cl4"),
      i_tg0    = _id("i_tg0"),
      i_tg1    = _id("i_tg1"),
      i_tg2    = _id("i_tg2"),
      i_tg3    = _id("i_tg3"),
      i_tg4    = _id("i_tg4"),
      tg0    = _id("tg0"),
      tg1    = _id("tg1"),
      tg2    = _id("tg2"),
      tg3    = _id("tg3"),
      tg4    = _id("tg4");

sb.addEventListener('click', function() {

  let line0 = "" + i_im0.value + i_id0.value + i_cl0.value + i_tg0.value + im0.value + id0.value + cl0.value + tg0.value;
  let line1 = "" + i_im1.value + i_id1.value + i_cl1.value + i_tg1.value + im1.value + id1.value + cl1.value + tg1.value;
  let line2 = "" + i_im2.value + i_id2.value + i_cl2.value + i_tg2.value + im2.value + id2.value + cl2.value + tg2.value;
  let line3 = "" + i_im3.value + i_id3.value + i_cl3.value + i_tg3.value + im3.value + id3.value + cl3.value + tg3.value;
  let line4 = "" + i_im4.value + i_id4.value + i_cl4.value + i_tg4.value + im4.value + id4.value + cl4.value + tg4.value;

  console.log('line0 = ', line0);
  console.log('line1 = ', line1);
  console.log('line2 = ', line2);
  console.log('line3 = ', line3);
  console.log('line4 = ', line4);

  var isline0 = (line0 == "00000013") ? 1 : 0;
  if (isline0 != 1) {alert ("Ошибка в первой строке")};
  var isline1 = (line1 == "00001000") ? 1 : 0;
  if (isline1 != 1) {alert ("Ошибка во второй строке")};
  var isline2 = (line2 == "00000112") ? 1 : 0;
  if (isline2 != 1) {alert ("Ошибка в третьей строке")};
  var isline3 = (line3 == "00130000") ? 1 : 0;
  if (isline3 != 1) {alert ("Ошибка в четвертой строке")};
  var isline4 = (line4 == "10000000") ? 1 : 0;
  if (isline4 != 1) {alert ("Ошибка в пятой строке")};

  console.log('all = ', isline0 + " " + isline1 + " " + isline2 + " " + isline3 + " " + isline4);

  if(isline0 + isline1 + isline2 + isline3 + isline4 === 5) {
    next.style.display = 'inline-block';
    cong.style.display = 'inline-block';
    sb.style.display = 'none';
  }

});
