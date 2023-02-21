import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-live-chart',
  template: `
    <canvas #chart></canvas>
  `
})
export class LiveChartComponent {
  chart: any;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.chart = new Chart(this.chartElement.nativeElement, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Live Data',
          data: []
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'realtime'
          }],
          yAxes: [{
            type: 'linear'
          }]
        },
        plugins: {
          streaming: {
            frameRate: 20
          }
        }
      }
    });

    setInterval(() => {
      this.ngZone.runOutsideAngular(() => {
        this.chart.data.labels.push(Date.now());
        this.chart.data.datasets[0].data.push(Math.random() * 100);
        this.chart.update();
      });
    }, 100);
  }
}
