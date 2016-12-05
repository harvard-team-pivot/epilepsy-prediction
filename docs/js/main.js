// Timestamp to prevent cached templates
var now = new Date();
var ticks = now.getTime();

// Load templates
$(function() {



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

function resetpagescroll(){
    $('body').scrollTop(684);
}

function openoverview() {
    $('#body').load('components/01-overview.html?'+ticks, function() {
        resetpagescroll();
    });
}
function openpreface() {
    $('#body').load('components/05-preface.html?'+ticks, function() {
        resetpagescroll();
    });
}
function opendata() {
    $('#body').load('components/10-data.html?'+ticks, function() {
        resetpagescroll();
    });
}
function openexplore() {
    $('#body').load('components/20-explore.html?'+ticks, function() {
        resetpagescroll();
    });
}
function openmodel() {
    $('#body').load('components/20-explore.html?'+ticks, function() {
        resetpagescroll();
    });
}
function openresults() {
    $('#body').load('components/20-explore.html?'+ticks, function() {
        resetpagescroll();
    });
}
function openreferences() {
    $('#body').load('components/100-references.html?'+ticks, function() {
        resetpagescroll();
    });
}
