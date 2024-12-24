import { Component, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common'; // Import CommonModule
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
// import { ChartData, ChartOptions } from 'chart.js';
// import { ChartOptions, ChartData, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import {rksm_logo} from '../images/RKSMLogo2.png'

interface Education {
  title: string;
  board: string;
  major: string;
  details: string;
  logoUrl: string;   // URL for the school's logo
  imageUrl: string;  // URL for a related image
  schoolnameImage:string;
  percentile: string; // Percentile achieved
  CGPA: string;
}
interface WorkExperience {
  title: string;
  details: string;
  companyLogoUrl: string;
  companyName: string;
  duration: string;
}


@Component({
  selector: 'app-about-me',
  // imports: [NgFor, NgForOf, NgIf],
  // standalone: true,
  // imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive,NgFor,NgForOf,NgIf],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {
  educationItems: Education[] = [
    {
      title: 'Ramakrishna Sarada Mission Sister Nivedita Girls\' School',
      board:'WBBSE',
      major: 'General(All)',
      details: 'Qualified Madhyamik(Secondary) Examination in 2015. Completed 10th equivalent .',
      logoUrl: "assets/images/RKSMLogo2.png", // Adjust path as necessary
      imageUrl: "assets/images/RKSMImage2.jpg", // Adjust path as necessary
      schoolnameImage:"assets/images/RKSMSchoolName.png",
      percentile: '87.8',
      CGPA:'N/A'
    },
    {
      title: 'Baghbazar Multipurpose Girls\' School',
      board:'WBCHSE',
      major: 'Science (Physics-Chemistry-Maths-Biology --Eng-Beng)',
      details: 'Qualified Uchcha-Madhyamik(Higher-Secondary) Examination in 2017.Completed (10+2) equivalent.',
      logoUrl: 'assets/images/Baghbazar Logo Sign board.jpg',
      imageUrl: 'assets/images/BMGS.png',
      schoolnameImage:"",
      percentile: '81.2',
      CGPA:'N/A'
    },
    {
      title: ' B. P. Poddar Institute of Management and Technology, Kolkata, West Bengal',
      board:' MAKAUT (Formerly known as WBUT)',
      major: ' ELECTRONICS AND COMMUNICATION ENGINEERING (ECE) ',
      details: 'Completed Bachelor of Technology(B.Tech) degree with Honors.',
      logoUrl: 'assets/images/B.P.Poddar Logo.jfif',
      imageUrl: 'assets/images/B_PPoddar_image.jfif',
      schoolnameImage:"assets/images/BPPIMT_name_logo.png",
      percentile: 'N/A',
      CGPA:'8.86'
    }
  ];

  workItems: WorkExperience[] = [
    {
      title: 'Full-Stack Developer',
      details: 'Developed applications using Angular and Node.js.',
      companyLogoUrl: 'assets/logos/company-a-logo.png',
      companyName: 'Company A',
      duration: '2022 - Present'
    },
    {
      title: 'Intern',
      details: 'Assisted in developing and testing software applications.',
      companyLogoUrl: 'assets/logos/company-b-logo.png',
      companyName: 'Company B',
      duration: '2021 - 2022'
    },
    {
      title: 'Trainee Developer',
      details: 'Participated in the development of client-server applications.',
      companyLogoUrl: 'assets/logos/company-c-logo.png',
      companyName: 'Company C',
      duration: '2020 - 2021'
    }
  ];


  currentEducationIndex: number = 0; // Start with the first education item
  currentWorkIndex: number = 0; // Track the currently displayed work experience item
  imageEducation: string = 'assets/images/icons8-education-64.png';

  isExpanded: Record<string, boolean> = {
    fullStack: false,
    chevron: false,
    GenAI: false
  };

  skills = ['Programming Languages', 'Libraries & Frameworks', 'Data Management', 'Cloud Platforms & Automation', 
    'AI & Generative Solutions', 'DevOps & CI/CD', 'Visualization', 'Data Governance', 
    'Monitoring & Troubleshooting', 'Operating Systems', 'Software Engineering Practices', 
    'Platforms & Tools'];
  skillConfidence = new Map<string, number>
  ([
    ['Programming Languages', 9],
    ['Libraries & Frameworks', 8],
    ['Data Management', 7],
    ['Cloud Platforms & Automation', 8],
    ['AI & Generative Solutions', 9],
    ['DevOps & CI/CD', 7],
    ['Visualization', 7],
    ['Data Governance', 7],
    ['Monitoring & Troubleshooting', 7],
    ['Operating Systems', 8],
    ['Software Engineering Practices', 9],
    ['Platforms & Tools', 8]
  ]);

  skills_2 = ['Python Programming','C Programming','C# Programming','Java Programming', 'Angular.js', 'React.js','html 5', 'css3', 'Azure Devops','Ansible', 
    'Generative AI', 'DevOps & CI/CD'];
  skills_3 = ['Matplotlib', 'Power BI', 'MS Sql Server','Mongo DB', 'Monitoring & Troubleshooting', 'Windows', 'Linux', 'Agile Methodology', 'Scrum', 'SDLC', 'Flask', 'RESTful API (Postman)'];
  skillConfidence_2 = new Map<string, number>
  ([
    ['Python Programming', 9],
    ['C Programming', 8],
    ['C# Programming', 7],
    ['Java Programming', 7],
    ['Angular.JS', 8],
    ['React.js', 8],
    ['html 5', 8],
    ['css3', 8],
    ['Azure Devops', 7],
    ['Ansible', 7],
    ['Generative AI', 9],
    ['DevOps & CI/CD', 7]
    
  ]);

  skillConfidence_3 = new Map<string, number>
  ([
    ['Matplotlib', 7],
    ['Power BI', 8],
    ['MS Sql Server', 7],
    ['Mongo DB', 7],
    ['Monitoring & Troubleshooting', 9],
    ['Windows', 8],
    ['Linux', 8],
    ['Agile Methodology', 9],
    ['Scrum', 9],
    ['SDLC', 9],
    ['Flask', 8],
    ['RESTful API (Postman)',9]
  ]);



  chart: any;

  constructor() {
  // this.skills.forEach(skill => {
  // this.skillConfidence.set(skill, Math.floor(Math.random() * 10) + 1); // Random skill confidence
  // });
  }

  ngAfterViewInit() {
  Chart.register(...registerables); // Register Chart.js components
  this.createPieChart();
  this.createBarChart();
  this.createBarChart2();
  this.createBarChart3();
  }

  // createPieChart() {
  // const canvas = document.getElementById('myPieChart') as HTMLCanvasElement;
  // if (canvas) {
  // this.chart = new Chart(canvas, {
  // type: 'pie',
  // data: {
  //   labels: this.skills,
  //   datasets: [{
  //     data: Array.from(this.skillConfidence.values()),
  //     backgroundColor: this.skills.map(() => this.getRandomColor()),
  //   }]
  // },
  // options: {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display:false,
  //       labels: {
  //         font: {
  //           size: 14, // Font size for legend labels
  //         },
  //         boxWidth: 20, // Width of the color box
  //         padding: 10 // Padding between legend items
  //       }
  //     },    
      
  //   },
   
  // }
  // });
  // }
  // }

  // createPieChart() {
  //   const canvas = document.getElementById('myPieChart') as HTMLCanvasElement;
  //   if (canvas) {
  //     this.chart = new Chart(canvas, {
  //       type: 'pie', // Pie chart type
  //       data: {
  //         labels: this.skills, // Labels for each slice
  //         datasets: [{
  //           data: Array.from(this.skillConfidence.values()), // Confidence values
  //           backgroundColor: this.skills.map(() => this.getRandomColor()), // Random color for each slice
  //         }]
  //       },
  //       options: {
  //         responsive: true,
  //         plugins: {
  //           legend: {
  //             display: false, // Show legend
  //             position: 'top', // Position legend at the top
  //           },
  //           tooltip: {
  //             enabled: true // Enable tooltips
  //           },
  //           datalabels: {
  //             display: true, // Always display datalabels
  //             formatter: (value: any, context: any) => {
  //               const labels = context.chart.data.labels as string[] | undefined; // Ensure labels is an array or undefined
  //               if (Array.isArray(labels)) {
  //                 return labels[context.dataIndex] || ''; // Safely access the label or return an empty string
  //               }
  //               return ''; // Fallback if labels is not an array
  //             },              
  //             color: 'black', // Label text color
  //             font: {
  //               weight: 'bold', // Bold font
  //               size: 12 // Font size
  //             },
  //             anchor: 'center', // Anchor the label at the center of the slice
  //             align: 'center' // Align the label at the center of the slice
  //           }
  //         }
  //       },
  //     });
  //   }
  // }

  createPieChart() {
    const canvas = document.getElementById('myPieChart') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'pie',
        data: {
          labels: this.skills,
          datasets: [{
            data: Array.from(this.skillConfidence.values()),
            backgroundColor: this.skills.map(() => this.getRandomColor()),
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide the legend if needed
            },
            datalabels: {
              color: '#ffffff',
              font: {
                size: 14,
                weight: 'bold',
              },
              anchor: 'center',
              align: 'center',
            }
            
          }
        }
      });
    }
  }
  

  createBarChart() {
    const canvas = document.getElementById('myBarChart') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: this.skills,
          datasets: [{
            label: 'Skill Confidence',
            data: Array.from(this.skillConfidence.values()), // Use the values you provide later
            backgroundColor: this.skills.map(() => this.getRandomColor()),
            borderColor: this.skills.map(() => this.getRandomColor()),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  createBarChart2() {
    const canvas = document.getElementById('myBarChart2') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: this.skills_2,
          datasets: [{
            label: 'Professional Skills Confidence',
            data: Array.from(this.skillConfidence_2.values()), // Use the values you provide later
            backgroundColor: this.skills_2.map(() => this.getRandomColor()),
            borderColor: this.skills_2.map(() => this.getRandomColor()),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  createBarChart3() {
    const canvas = document.getElementById('myBarChart3') as HTMLCanvasElement;
    if (canvas) {
      this.chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels: this.skills_3,
          datasets: [{
            label: 'Professional Skills Confidence',
            data: Array.from(this.skillConfidence_3.values()), // Use the values you provide later
            backgroundColor: this.skills_3.map(() => this.getRandomColor()),
            borderColor: this.skills_3.map(() => this.getRandomColor()),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  navigateToUrl(url: string): void {
    window.open(url, '_blank');
  }

  getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }


  toggleContent(section: string) {
    this.isExpanded[section] = !this.isExpanded[section];
  }

  showNextEducation() {
    if (this.currentEducationIndex < this.educationItems.length - 1) {
      this.currentEducationIndex++; // Move to the next item
    } else {
      this.currentEducationIndex = 0; // Loop back to the first item
    }
  }

  showPreviousEducation() {
    if (this.currentEducationIndex > 0) {
      this.currentEducationIndex--; // Move to the previous item
    } else {
      this.currentEducationIndex = this.educationItems.length - 1; // Loop to the last item
    }
  }

  showNextWork() {
    if (this.currentWorkIndex < this.workItems.length - 1) {
      this.currentWorkIndex++; // Move to the next item
    } else {
      this.currentWorkIndex = 0; // Loop back to the first item
    }
  }

  showPreviousWork() {
    if (this.currentWorkIndex > 0) {
      this.currentWorkIndex--; // Move to the previous item
    } else {
      this.currentWorkIndex = this.workItems.length - 1; // Loop to the last item
    }
  }

  navigateSubsection(index: number, section: string) {
    // Your navigation logic here
    console.log(`Navigating to ${section} subsection index: ${index}`);
  }

  navigate(direction: string) {
    // Your navigation logic for next
    console.log(`Navigating ${direction}`);
  }
  ngOnInit() {
    console.log(this.educationItems);
  }
}
