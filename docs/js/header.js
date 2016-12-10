
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

        //console.log(xml.documentElement);
        //console.log(headerVis)
        headerVis.node().appendChild(xml.documentElement);

        headerVisSvg = headerVis.select('svg');
        headerVisSvg.attr("class","header-vis");

        // Get green nodes
        var nodes = headerVisSvg.select('#nodes');
        var greennodes = headerVisSvg.select('#greennodes');

        // Get blue nodes
        var bluenodes = headerVisSvg.select('#bluenodes');

        // Get aqua nodes
        var aquanodes = headerVisSvg.select('#aquanodes');

        // greennodes.style('opacity',0);
        // bluenodes.style('opacity',0);
        // aquanodes.style('opacity',0);


        greennodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);
        bluenodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);
        aquanodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);

        // Apply white to blue nodes
        //bluenodes.style('fill',"#1A86B0").transition().delay(250).duration(250).style('fill',"#ffffff")


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

