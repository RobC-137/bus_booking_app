import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { Stop } from '../../../models/stops';

@Component({
  selector: 'app-add-stop',
  templateUrl: './add-stop.component.html',
  styleUrls: ['./add-stop.component.scss'],
})
export class AddStopComponent implements OnInit {
  myForm: FormGroup;
  cities;
  constructor(private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.cities = this.api.getCities();
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  displayFn(city): string {
    return city && city.name ? city.name : '';
  }

  onSubmit(form: FormGroup) {
    const newStop: Stop = {
      name: form.value.name,
      cities_id: form.value.city.id,
    };

    this.api.postStop(newStop).subscribe((response) => console.log(response));
    // console.log(newStop);
  }
}
