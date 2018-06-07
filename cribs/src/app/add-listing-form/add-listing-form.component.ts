import { Component, OnInit } from '@angular/core';
import { CribListServiceService } from '../services/crib-list-service.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  constructor(private cribListService: CribListServiceService) { }

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];

  ngOnInit() {
  }

  onCribSubmit(data): void
  {
    console.log(data);
    this.cribListService.addCrib(data);
  }

}
