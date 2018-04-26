import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.date = new Date();
    }, 10000);
  }

  product: any = [
    {
      title: '小葱拌豆腐',
      price: 20,
      supplyLimit: {
        1: {endedAt: '23:59', startedAt: '00:00'},
        2: {endedAt: '23:59', startedAt: '00:00'},
        3: {endedAt: '23:59', startedAt: '00:00'},
        4: {endedAt: '23:59', startedAt: '00:00'},
        5: {endedAt: '23:59', startedAt: '00:00'},
        6: {endedAt: '23:59', startedAt: '00:00'},
        7: {endedAt: '23:59', startedAt: '00:00'}
      }
    },
    {
      title: '红烧茄子',
      price: 26,
      supplyLimit: {
        1: {endedAt: '23:59', startedAt: '00:00'},
        2: {endedAt: '23:59', startedAt: '00:00'},
        3: {endedAt: '23:59', startedAt: '00:00'},
        4: {endedAt: '23:59', startedAt: '00:00'},
        5: {endedAt: '23:59', startedAt: '00:00'},
        6: {endedAt: '23:59', startedAt: '00:00'},
        7: {endedAt: '23:59', startedAt: '00:00'}
      }
    },
    {
      title: '叉烧肠粉',
      price: 10,
      supplyLimit: {
        1: {endedAt: '09:59', startedAt: '07:00'},
        2: {endedAt: '09:59', startedAt: '07:00'},
        3: {endedAt: '09:59', startedAt: '07:00'},
        4: {endedAt: '09:59', startedAt: '07:00'},
        5: {endedAt: '09:59', startedAt: '07:00'},
        6: {endedAt: '09:59', startedAt: '07:00'},
        7: {endedAt: '09:59', startedAt: '07:00'}
      }
    },
    {
      title: '猪肉炖粉条',
      price: 38,
      supplyLimit: {
        1: {endedAt: '18:19', startedAt: '18:11'},
        2: {endedAt: '18:19', startedAt: '18:11'},
        3: {endedAt: '18:19', startedAt: '18:11'},
        4: {endedAt: '18:19', startedAt: '18:11'},
        5: {endedAt: '18:19', startedAt: '18:11'},
        6: {endedAt: '18:19', startedAt: '18:11'},
        7: {endedAt: '18:19', startedAt: '18:11'}
      }
    },
    {
      title: '精品意面',
      price: 300,
      supplyLimit: {
        1: {endedAt: '19:59', startedAt: '18:19'},
        2: {endedAt: '19:59', startedAt: '18:19'},
        3: {endedAt: '19:59', startedAt: '18:19'},
        4: {endedAt: '19:59', startedAt: '18:19'},
        5: {endedAt: '19:59', startedAt: '18:19'},
        6: {endedAt: '19:59', startedAt: '18:19'},
        7: {endedAt: '19:59', startedAt: '18:19'}
      }
    }
  ];

  ngOnInit() {
  }

}
