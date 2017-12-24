$("#collapse-navbar").on('shown.bs.collapse', function() {
    $(".topCasaFina-banner").css("transform", "translate(-40%, -10%)")
});

$("#collapse-navbar").on('hide.bs.collapse', function() {
    $(".topCasaFina-banner").css("transform", "translate(-40%, -50%)")
});