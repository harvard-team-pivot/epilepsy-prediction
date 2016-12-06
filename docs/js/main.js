// Timestamp to prevent cached templates
var now = new Date();
var ticks = now.getTime();

// Load templates
$(function() {



    $('#header').load('components/header.html?'+ticks, function() {


        // Create Header vis
        createheadervis();

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

    //$('#body').load('components/01-overview.html?'+ticks, function() {});

    $('#footer').load('components/footer.html?'+ticks, function() {});


});

var current_page_index = 0;
var sidebar_items = [
    {"id":"01","page":"01-overview.html"}
    ,{"id":"05","page":"05-preface.html"}
    ,{"id":"10","page":"10-data.html"}
    ,{"id":"20","page":"20-explore.html"}
    ,{"id":"100","page":"100-references.html"}
    ]

function resetpagescroll(){
    $('body').scrollTop(500);
}
function openpage(id){

    var item = _.find(sidebar_items, function(o) { return o.id == id; });
    if(!item){
        $('#body').load('components/01-overview.html?'+ticks, function() {
            resetpagescroll();
        });
    }else{
        $('#body').load('components/'+item.page+'?'+ticks, function() {
            resetpagescroll();
        });
    }


}

function previouspage(){
    current_page_index--;
    if(current_page_index <= 0){
        current_page_index =0;
        $('#previous_button').addClass("disabled");
    }else{
        $('#previous_button').removeClass("disabled");
    }
    $('#next_button').removeClass("disabled");
    openpage(sidebar_items[current_page_index].id);
}

function nextpage(){
    current_page_index++;
    if(current_page_index >= sidebar_items.length-1){
        current_page_index = sidebar_items.length-1;
        $('#next_button').addClass("disabled");
    }else{
        $('#next_button').removeClass("disabled");
    }
    $('#previous_button').removeClass("disabled");
    openpage(sidebar_items[current_page_index].id);
}

$(function() {
    $('#previous_button').addClass("disabled");
});

// Init with overview page
//openpage("01");
$('#body').load('components/01-overview.html?'+ticks, function() {
    //resetpagescroll();
});
