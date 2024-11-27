'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Line, Bar, Scatter, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import Icon from './common/Icon';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Sample data generation functions
const generateLinearData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    x: i,
    y: 2 * i + 5 + (Math.random() - 0.5) * 5
  }));
};

const generateCategoricalData = () => {
  const categories = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
  return categories.map(cat => ({
    category: cat,
    value: Math.floor(Math.random() * 100)
  }));
};

const generateScatterData = () => {
  return Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));
};

const generateDoughnutData = () => {
  return [
    { label: 'Segment 1', value: 30 },
    { label: 'Segment 2', value: 50 },
    { label: 'Segment 3', value: 20 },
    { label: 'Segment 4', value: 40 },
    { label: 'Segment 5', value: 15 }
  ];
};

const ChartTab = ({ children, isSelected }) => (
  <Tab
    className={`${
      isSelected
        ? 'bg-interactive text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    } px-4 py-2 rounded-lg font-medium transition-colors`}
  >
    {children}
  </Tab>
);

export default function DataScienceSection() {
  const [linearData] = useState(generateLinearData());
  const [categoricalData] = useState(generateCategoricalData());
  const [scatterData] = useState(generateScatterData());
  const [doughnutData] = useState(generateDoughnutData());

  const commonOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
  };

  const charts = [
    {
      name: 'Linear Regression',
      chart: (
        <Line
          data={{
            datasets: [
              {
                label: 'Data Points',
                data: linearData,
                backgroundColor: '#FF5656',
                borderColor: '#FF5656',
                pointRadius: 6,
                pointHoverRadius: 8,
              },
              {
                label: 'Regression Line',
                data: linearData.map(point => ({ x: point.x, y: 2 * point.x + 5 })),
                backgroundColor: '#6A7EFC',
                borderColor: '#6A7EFC',
                pointRadius: 0,
                borderWidth: 2,
              },
            ],
          }}
          options={{
            ...commonOptions,
            scales: {
              x: { title: { display: true, text: 'X Values' } },
              y: { title: { display: true, text: 'Y Values' } },
            },
          }}
        />
      ),
      description: 'A linear regression model showing the relationship between X and Y variables.',
    },
    {
      name: 'Bar Chart',
      chart: (
        <Bar
          data={{
            labels: categoricalData.map(d => d.category),
            datasets: [
              {
                label: 'Category Values',
                data: categoricalData.map(d => d.value),
                backgroundColor: '#6A7EFC',
                hoverBackgroundColor: '#FF5656',
              },
            ],
          }}
          options={{
            ...commonOptions,
            scales: {
              y: { beginAtZero: true, title: { display: true, text: 'Value' } },
            },
          }}
        />
      ),
      description: 'A bar chart comparing values across different categories.',
    },
    {
      name: 'Scatter Plot',
      chart: (
        <Scatter
          data={{
            datasets: [
              {
                label: 'Scatter Data',
                data: scatterData,
                backgroundColor: '#FF5656',
                pointRadius: 6,
                pointHoverRadius: 8,
              },
            ],
          }}
          options={{
            ...commonOptions,
            scales: {
              x: { title: { display: true, text: 'X Axis' } },
              y: { title: { display: true, text: 'Y Axis' } },
            },
          }}
        />
      ),
      description: 'A scatter plot showing the distribution of data points in a 2D space.',
    },
    {
      name: 'Doughnut Chart',
      chart: (
        <Doughnut
          data={{
            labels: doughnutData.map(d => d.label),
            datasets: [
              {
                data: doughnutData.map(d => d.value),
                backgroundColor: ['#FF5656', '#6A7EFC', '#FFA500', '#4CAF50', '#9C27B0'],
                hoverBackgroundColor: ['#FF8080', '#9EACFD', '#FFC04D', '#81C784', '#BA68C8'],
              },
            ],
          }}
          options={{
            ...commonOptions,
            cutout: '50%',
          }}
        />
      ),
      description: 'A doughnut chart showing the proportion of different segments in the data.',
    },
  ];

  return (
    <section id="data-science" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            <span className="flex items-center justify-center gap-4">
              <Icon section="skills" name="technical" size={32} className="text-interactive" />
              Data Science Visualizations
            </span>
          </h2>
          <p className="mt-4 text-theme/80 max-w-2xl mx-auto">
            Explore various data visualization techniques used in data science projects.
            Interact with the charts to see different perspectives on the data.
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex space-x-4 mb-8 justify-center">
            {charts.map((chart, index) => (
              <ChartTab key={index}>{chart.name}</ChartTab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {charts.map((chart, index) => (
              <Tab.Panel key={index}>
                {chart.chart}
                <p className="mt-4 text-theme/80">{chart.description}</p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/yourusername/data-science-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-interactive hover:text-accent"
          >
            <Icon section="projects" name="github" size={24} />
            View More Data Science Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
} 