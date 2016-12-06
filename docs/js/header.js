
function createheadervis(){
    var headerVis = d3.select("#headerVis");

    // Load SVG file into div
    // d3.xml('img/brain-nodes-links.svg', 'image/svg+xml', function (error, data) {
    //
    //     console.log(data.documentElement);
    //
    // });

    d3.xml("img/brain-nodes-links.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;

        console.log(xml.documentElement);
        console.log(headerVis)
        headerVis.node().appendChild(xml.documentElement);

        headerVisSvg = headerVis.select('svg');
        headerVisSvg.attr("class","header-vis")


        $('#nav').affix({
            offset: {
                top: $('header').height()
            }
        });

        $('#sidebar').affix({
            offset: {
                top: $('header').height()
            }
        });
    });
}

