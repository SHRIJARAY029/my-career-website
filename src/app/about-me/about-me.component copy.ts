import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {
  skills = ['Programming Languages', 'Libraries & Frameworks', 'Data Management', 'Cloud Platforms & Automation', 
            'AI & Generative Solutions', 'DevOps & CI/CD', 'Visualization', 'Data Governance', 
            'Monitoring & Troubleshooting', 'Operating Systems', 'Software Engineering Practices', 
            'Platforms & Tools'];

  skillConfidence = new Map<string, number>([
    ['Programming Languages', 9],
    ['Libraries & Frameworks', 8],
    ['Data Management', 7],
    ['Cloud Platforms & Automation', 8],
    ['AI & Generative Solutions', 9],
    ['DevOps & CI/CD', 6],
    ['Visualization', 7],
    ['Data Governance', 6],
    ['Monitoring & Troubleshooting', 7],
    ['Operating Systems', 8],
    ['Software Engineering Practices', 9],
    ['Platforms & Tools', 8]
  ]);

  chart: any;

  constructor() {}

  ngAfterViewInit() {
    Chart.register(...registerables); // Register Chart.js components
    this.createPieChart();
  }

  createPieChart() {
    const canvas = document.getElementById('myPieChart') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'pie', // Pie chart type
        data: {
          labels: this.skills, // Labels for each slice
          datasets: [{
            data: Array.from(this.skillConfidence.values()), // Confidence values
            backgroundColor: this.skills.map(() => this.getRandomColor()), // Random color for each slice
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Disable legend
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return tooltipItem.label; // Only show the label (skill name)
                }
              }
            },
            // Data Labels Plugin (shown only on hover and below the slice)
            datalabels: {
              display: false, // Initially hide the labels
              formatter: function(value, context) {
                return context.chart.data.labels[context.dataIndex]; // Display the skill label
              },
              color: 'black', // Label color
              font: {
                weight: 'bold', // Make the font bold
                size: 14 // Font size for the label
              },
              anchor: 'center', // Anchoring the label to the center
              align: 'center', // Aligning the label to the center
              offset: 20, // Offset the label below the slice
            }
          }
        },
        // Hover callback to show/hide labels
        hover: {
          onHover: function(event, chartElement) {
            const chart = event.chart;
            const dataLabelsPlugin = chart.plugins.get('datalabels');
            if (chartElement.length) {
              dataLabelsPlugin.display = true; // Show the label on hover
              chart.update();
            } else {
              dataLabelsPlugin.display = false; // Hide the label when not hovering
              chart.update();
            }
          }
        }
      });
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
