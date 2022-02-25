$(document).ready(function () {
  $("section:even").on("mouseenter", function () {
    $(this).find("div").slideDown("slow");
  });
  $("section:odd").on("dblclick", function () {
    $(this).find("div").slideDown("slow");
  });
  $("section:even").on("mouseleave", function () {
    $(this).find("div").slideUp("slow");
  });
  $("section div button").on("click", function () {
    $(this).parent().slideUp("slow");
  });

  $("nav > a").on("click", function () {
    let pais = $(this).html();

    if (pais == "London") {
      $("section:last-of-type").slideToggle("slow");
    } else if (pais == "Madrid") {
      $("section:first-of-type").slideToggle("slow");
    } else {
      $("section:nth-of-type(2)").slideToggle("slow");
    }
  });
});
