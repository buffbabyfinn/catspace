$(function() {
  $('#blanks form').submit(function(event) {
    var nameInput = $("input#name").val();
    var numMiceInput = $("input#numMice").val();
    var phoneInput = $("input#phone").val();
    var paymentInput = $("input#payment").val();

    $('.name').text(nameInput);
    $('.numMice').text(numMiceInput);
    $('.phone').text(phoneInput);
    $('.payment').text(paymentInput);

    $('#letter').show();

    event.preventDefault();
  });
  $("button#futureCat").click(function(){
    $(".content").addClass("layout1");
      });
  $("button#futureCat").click(function(){
    $(".content").addClass("layout2");
      });
  $("button#futureCat").click(function(){
    $(".content").addClass("layout3");
  });
});
