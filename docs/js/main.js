

// Load templates
$(function() {

    // Timestamp to prevent cached templates
    var now = new Date();
    var ticks = now.getTime();

    $('#header').load('components/header.html?'+ticks, function() {
        $('#nav').affix({
            offset: {
                top: $('header').height()
            }
        });


    });

    $('#sidebar').load('components/sidebar.html?'+ticks, function() {
        $('#sidebar').affix({
            offset: {
                top: $('header').height()
            }
        });
    });

    $('#body').load('components/01-overview.html?'+ticks, function() {});

    $('#footer').load('components/footer.html?'+ticks, function() {});


});
