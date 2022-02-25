var months = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosti",
  "Septiembre",
  "Octubrw",
  "Noviembre",
  "Diciembre"
);

var WeekDays = new Array(
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
);

var f = new Date(); //javascript

var strDate =
  WeekDays[f.getDay()] +
  " - " +
  months[f.getMonth()] +
  " " +
  f.getDate() +
  ", " +
  f.getFullYear();

$(function () {
  $("footer h3:last-child").text(strDate);
});
