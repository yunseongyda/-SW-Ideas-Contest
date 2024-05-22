$(document).ready(function() {
  $(".wish").click(function() {
    event.preventDefault();

    var n_wished = $(this).find("#n_wished");
    var wished = $(this).find("#wished");

    if (n_wished.hasClass("d-none")) {
      n_wished.removeClass("d-none").addClass("d-inline");
      wished.removeClass("d-inline").addClass("d-none");
    } else {
      n_wished.removeClass("d-inline").addClass("d-none");
      wished.removeClass("d-none").addClass("d-inline");
    }
  });
});

$(document).ready(function() {
  $("#cbx_chkAll").click(function() {
    if($("#cbx_chkAll").is(":checked")) $("input[name=chk]").prop("checked", true);
    else $("input[name=chk]").prop("checked", false);
  });
  
  $("input[name=chk]").click(function() {
    var total = $("input[name=chk]").length;
    var checked = $("input[name=chk]:checked").length;
    
    if(total != checked) $("#cbx_chkAll").prop("checked", false);
    else $("#cbx_chkAll").prop("checked", true); 

    console.log("Hello")
  });
});