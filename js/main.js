$(function() {
  $("li.menu").click(function() {
    $("nav#sub-navigation").toggle();
  })
  $("i.close-menu").click(function() {
    $("nav#sub-navigation").toggle();
  })
  $(".contact h2").click(function() {
    $(".contact-form").toggle();
  })
})
