// check off specfic todo by clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(400, function() {
      $(this).remove();
    });
  event.stopPropagation;
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val(""); // setter no getter
    //crceate a new lie
    $("ul").append("<li> <span>X</span> " + todoText + "</li>");
  }
});
