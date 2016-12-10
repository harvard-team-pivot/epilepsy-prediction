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

        //
        $('.dropdown .dropdown-menu').on({
            "click":function(e){
                e.stopPropagation();
            }
        });
    });

    //$('#body').load('components/01-overview.html?'+ticks, function() {});

    $('#footer').load('components/footer.html?'+ticks, function() {});


});

var current_page_index = 0;
var sidebar_items = [
    {"id":"01","page":"components/01-overview.html"}
    ,{"id":"05","page":"components/05-preface.html"}
    ,{"id":"10","page":"components/10-data.html"}
    ,{"id":"20","page":"components/20-explore.html"}
    ,{"id":"21","page":"ipynb/20_exploratory_data_analysis_01.html"}
    ,{"id":"22","page":"ipynb/20_exploratory_data_analysis_02.html"}
    ,{"id":"23","page":"ipynb/20_exploratory_data_analysis_03.html"}
    ,{"id":"24","page":"ipynb/20_exploratory_data_analysis_04.html"}
    ,{"id":"30","page":"components/30-data-scrubbing.html"}
    ,{"id":"31","page":"ipynb/30_data_scrubbing_01.html"}
    ,{"id":"40","page":"components/40-model.html"}
    ,{"id":"41","page":"ipynb/40_model_01.html"}
    ,{"id":"42","page":"ipynb/40_model_02.html"}
    ,{"id":"43","page":"ipynb/40_model_03.html"}
    ,{"id":"50","page":"components/50-results.html"}
    ,{"id":"100","page":"components/100-references.html"}
    ]

function resetpagescroll(){
    $('body').scrollTop(500);
}
function openpage(li,id){
    console.log(li)

    $('.navbar-nav > li').removeClass("active");
    $('.dropdown-menu > li').removeClass("active");

    $(li).addClass("active");

    var item = _.find(sidebar_items, function(o) { return o.id == id; });
    if(!item){
        $('#body').load('components/01-overview.html?'+ticks, function() {
            resetpagescroll();
        });
    }else{
        $('#body').load(item.page+'?'+ticks, function() {
            resetpagescroll();

            // Hide imports section for ipython files
            if(item.page.match(/ipynb*/)){
                console.log("ipynb file");
                $('div.input').each(function(id) {
                    // el = $(this).find('.cm-variable:first');
                    // if (id == 0 || el.text() == 'hide_me') {
                    //     $(this).hide();
                    // }
                    console.log(id);
                    el = $(this).find('.c1:first');
                    if(el && el.text() == '###Hide'){
                        $(this).hide();
                    }

                });
            }
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


// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

var id = getUrlParameter('id');
console.log(id)
// Init with overview page or the page with id
if(id){
    openpage(null,id)
}else{
    // By default open the overview page
    $('#body').load('components/01-overview.html?'+ticks, function() {
        //resetpagescroll();
    });
}

