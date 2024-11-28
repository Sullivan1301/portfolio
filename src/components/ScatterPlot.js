'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ScatterPlot = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const scatterData = {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: 2 },
            { x: 4, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 6 },
            { x: 7, y: 5 },
            { x: 8, y: 7 },
            { x: 9, y: 8 },
            { x: 10, y: 9 },
          ],
          backgroundColor: 'rgba(255, 183, 77, 0.6)',
          borderColor: 'rgba(255, 183, 77, 1)',
          borderWidth: 1,
        },
      ],
    };

    const scatterConfig = {
      type: 'scatter',
      data: scatterData,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'X Axis',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Y Axis',
            },
          },
        },
      },
    };

    const scatterChart = new Chart(ctx, scatterConfig);

    return () => {
      scatterChart.destroy();
    };
  }, []);

  return (
    <div className="scatter-plot-container">
      <h2 className="text-center text-2xl font-bold">Scatter Plot</h2>
      <canvas ref={canvasRef} width="400" height="400"></canvas>
    </div>
  );
};

export default ScatterPlot; 