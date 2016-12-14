
function createheadervis(){
    var headerVis = d3.select("#headerVis");

    // Load SVG file into div
    // d3.xml('img/brain-nodes-links.svg', 'image/svg+xml', function (error, data) {
    //
    //     console.log(data.documentElement);
    //
    // });
    var bluenodes;
    var all_bluenodes;
    var greennodes;
    var all_greennodes;
    var aquanodes;
    var all_aquanodes;
    var headernote1 = d3.select("#headernote1");
    var headernote2 = d3.select("#headernote2");

    headernote1.style('opacity',0);
    headernote2.style('opacity',0);

    var delay = 15;
    var duration = 15;

    d3.xml("img/brain-nodes-links.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;

        //console.log(xml.documentElement);
        //console.log(headerVis)
        headerVis.node().appendChild(xml.documentElement);

        headerVisSvg = headerVis.select('svg');
        headerVisSvg.attr("class","header-vis");

        // Get green nodes
        var nodes = headerVisSvg.select('#nodes');
        greennodes = headerVisSvg.select('#greennodes');
        all_greennodes = greennodes.selectAll("path");

        // Get blue nodes
        bluenodes = headerVisSvg.select('#bluenodes');
        all_bluenodes = bluenodes.selectAll("path");

        // Get aqua nodes
        aquanodes = headerVisSvg.select('#aquanodes');
        all_aquanodes = aquanodes.selectAll("path");

        // greennodes.style('opacity',0);
        // bluenodes.style('opacity',0);
        // aquanodes.style('opacity',0);


        greennodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);
        bluenodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);
        aquanodes.style('opacity',0).transition().delay(250).duration(250).style('opacity',1);

        // Apply white to blue nodes
        //bluenodes.style('fill',"#1A86B0").transition().delay(250).duration(250).style('fill',"#ffffff")

        //setTimeout(function () { createelectricsignals(); }, 2000);

        setInterval(function(){
            rand = Math.floor((Math.random() * 3) + 1);
            if(rand==1){
                createelectricsignals(all_bluenodes,"#1A86B0");
            }else if(rand==2){
                createelectricsignals(all_aquanodes,"#45C3D1");
            }else if(rand==3){
                createelectricsignals(all_greennodes,"#4E9443");
            }

        }, 2000);

        function createelectricsignals(all_nodes,baseColor){
            all_nodes.transition()
                .delay(function(d, i) { return delay*i; })
                .duration(function(d, i) { return duration*(i+1); })
                .style('fill',"#ffffff")
                .on('end',function repeat(){
                    d3.select(this)
                        .style('fill',baseColor)
                        .transition()
                        .delay(function(d, i) { return delay*i; })
                        .duration(function(d, i) { return duration*(i+1); })
                        .style('fill',"#ffffff")
                        .on('end',function () {
                            d3.select(this)
                                .style('fill',baseColor);
                        })
                });
        }


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


        // Header notes
        setTimeout(function () {
            headernote1.style('opacity',0).transition().delay(250).duration(1200).style('opacity',1);
            headernote2.style('opacity',0).transition().delay(2000).duration(1200).style('opacity',1);
        }, 800);
    });
}

