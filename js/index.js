$(function () {
  // $('[data-toggle="tooltip"]').tooltip();
  // $('[data-toggle="popover"]').popover();
  $('.carousel').carousel({
    interval: 5000
  });
  $('#modalSubscribe').on('show.bs.modal', function (e) {
    console.log("el modal se está mostrando");
    $("#modalSubscribeBtn").removeClass("btn-outline-primary").addClass("btn-secondary").prop("disabled",
      true).css({
      opacity: 0.25
    });
  });
  $('#modalSubscribe').on('shown.bs.modal', function (e) {
    console.log("el modal se terminó de abrir");
  });
  $('#modalSubscribe').on('hide.bs.modal', function (e) {
    console.log("el modal se está ocultando");
  });
  $('#modalSubscribe').on('hidden.bs.modal', function (e) {
    console.log("el modal se terminó de ocultar");
    $("#modalSubscribeBtn").prop("disabled", false).removeClass("btn-secondary").addClass(
      "btn-outline-primary").css({
      opacity: 1
    });
  });
});