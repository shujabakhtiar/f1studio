import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3';

import { DataSource } from './utils';
let max = 100;

export default function GroupedBarChart({ width, height, margin }) {
    const svg_ref = useRef();
    const data = DataSource.grouped(max);

    useEffect(_ => updateAndDraw({ data, svg_ref, width, height, margin }), []);

    return (
        <div className="chart">
            <svg ref={svg_ref}></svg>
        </div>
    )
}

function updateAndDraw(op) {
    let margin = op.margin,
        data = op.data,
        group_names = [],
        subgroup_names = [],
        svg = null,
        width = op.width - margin.l - margin.r,
        height = op.height - margin.l - margin.r,
        scaleX_grp_based = null,
        scaleX_sgrp_based = null,
        scale_y = null,
        x_axis = null,
        y_axis = null,
        color = null,
        group_spacing = .35,
        bar_spacing = .35;

    // prepare data
    group_names = Object.keys(data);
    subgroup_names = group_names.length ? Object.keys(data[group_names[0]]) : [];

    // get svg selection
    svg = d3.select(op.svg_ref.current)
        .attr('width', width + margin.l + margin.r)
        .attr('height', height + margin.t + margin.b);

    // scale for groups positioning on x axis
    scaleX_grp_based = d3.scaleBand()
        .domain(group_names)
        .range([0, op.width])
        .padding([group_spacing]);

    // Another scale for bar (subgroup) positioning per group on x axis
    scaleX_sgrp_based = d3.scaleBand()
        .domain(subgroup_names)
        .range([0, scaleX_grp_based.bandwidth()])
        .padding([bar_spacing]);

    // scale for y axis
    scale_y = d3.scaleLinear()
        .domain([0, max])       // global variable (on top)
        .range([op.height, 0]);

    // x-axis
    x_axis = d3.axisBottom(scaleX_grp_based).tickSize(0);

    // y-axis
    y_axis = d3.axisLeft(scale_y);

    // add x-axis
    svg.append("g")
        .attr("transform", "translate(0," + op.height + ")")
        .call(x_axis);

    // add y-axis
    svg.append("g").call(y_axis);

    // one color per subgroup
    color = d3.scaleOrdinal()
        .domain(subgroup_names)
        .range(['#92D4DC', '#00A9E0'])

    // Show the bars
    svg.append("g")
        .selectAll("g")
        .data(group_names)
        .join("g")
        .attr("transform", grp_name => "translate(" + scaleX_grp_based(grp_name) + ",0)")
        .selectAll("rect")
        // inside each group create bars for subgroups
        .data(grp_name => subgroup_names.map(sg_name => {
            return {
                key: sg_name,
                val: data[grp_name][sg_name]
            };
        })) // e.g., [{key: 'Budget', value: 30}, {key: 'Spent', value: 40}]
        .join("rect")
        .attr("x", d => scaleX_sgrp_based(d.key))
        .attr("y", d => scale_y(d.val))
        .attr("width", scaleX_sgrp_based.bandwidth())
        .attr("height", d => op.height - scale_y(d.val))
        .attr("fill", d => color(d.key));
}