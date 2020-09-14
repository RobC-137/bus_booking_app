import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss'],
})
export class StopsComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCities().subscribe((data) => {
      console.log(data);
    });
  }
}
