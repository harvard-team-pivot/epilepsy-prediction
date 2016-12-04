

// Load templates
$(function() {

    $('#header').load('components/header.html', function() {
        $('#nav').affix({
            offset: {
                top: $('header').height()
            }
        });


    });

    $('#sidebar').load('components/sidebar.html', function() {
        $('#sidebar').affix({
            offset: {
                top: $('header').height()
            }
        });
    });

    $('#body').load('components/01-overview.html', function() {});

    $('#footer').load('components/footer.html', function() {});


});
