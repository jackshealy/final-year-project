/**
 * d3.js file
 */

var mainw = 960,
    mainh = 500;

d3.select('body').append('svg')
    .attr('width', mainw)
    .attr('height', mainh);

function draw(selection){
    var xy0,
        path,
        keep = false,
        line = d3.svg.line()
            .x(function(d){ return d[0]; })
            .y(function(d){ return d[1]; });

    selection
        .on('mousedown', function(){
            keep = true;
            xy0 = d3.mouse(this);
            path = d3.select('svg')
                .append('path')
                .attr('d', line([xy0, xy0]))
                .style({'stroke': 'black', 'stroke-width': '2px'});
        })
        .on('mouseup', function(){
            keep = false;
        })
        .on('mousemove', function(){
            if (keep) {
                Line = line([xy0, d3.mouse(this).map(function(x){ return x - 1; })]);
                console.log(Line);
                path.attr('d', Line);
            }
        });
}

d3.select('svg').append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', mainw)
    .attr('height', mainh)
    .style({'fill': 'white'})
    .call(draw);

