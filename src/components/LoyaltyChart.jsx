import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LoyaltyChart = ({ points, maxPoints }) => {
  const svgRef = useRef();

  useEffect(() => {
    const percent = (points / maxPoints) * 100;
    const ratio = percent / 100;

    const w = 150;
    const h = 150;
    const outerRadius = w / 2 - 10;
    const innerRadius = 75;
    const color = ["green", "rgba(156,78,176,1)", "#888888"];
    const colorOld = "#F00";
    const colorNew = "#0F0";

    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
      .endAngle(Math.PI);

    const arcLine = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0);

    const svg = d3.select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .attr("class", "shadow")
      .append("g")
      .attr("transform", `translate(${w / 2},${h / 2})`);

    const path = svg.append("path")
      .attr("d", arc)
      .attr("transform", "rotate(-90)")
      .style("fill", color[0])
      .style("border-radius", "20px");

    const pathForeground = svg.append("path")
      .datum({ endAngle: 0 })
      .attr("d", arcLine)
      .attr("transform", "rotate(-90)")
      .style("fill", color[1]);

    const middleCount = svg.append("text")
      .attr("class", "middleText")
      .attr("text-anchor", "middle")
      .attr("dy", 0)
      .attr("dx", 5)
      .style("fill", d3.rgb("#000000"))
      .style("font-size", "36px");

    const oldValue = 0;

    const arcTween = function (newValue, oldValue) {
      const interpolate = d3.interpolate(oldValue, newValue);
      const interpolateCount = d3.interpolate(oldValue, newValue);

      return function (t) {
        const currentValue = interpolate(t);
        const currentAngle = Math.PI * (currentValue / 100);

        pathForeground.attr("d", arcLine.endAngle(currentAngle));

        // change percentage to points before rendering text
        const currentPoints = Math.floor(interpolateCount(t) / 100 * maxPoints);
        // middleCount.text(currentPoints);
      };
    };

    d3.transition()
      .duration(750)
      .ease(d3.easeCubic)
      .tween("progress", () => arcTween(percent, oldValue))
      .on("end", () => {
        // After the transition ends, set the final points value as text content
        middleCount.text(points);
      });

  }, [points, maxPoints]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default LoyaltyChart;
