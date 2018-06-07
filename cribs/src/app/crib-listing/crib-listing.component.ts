import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { CribCardInterface } from '../crib-card-interface';
import { map } from  'rxjs/operators';
import { CribListServiceService } from '../services/crib-list-service.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

cribs: Array<CribCardInterface>;
error: string;

  constructor( 
    private http: Http, 
    private cribsListService: CribListServiceService 
  ) {   }


  ngOnInit() {

    this.cribsListService.getAllCribs().subscribe(
      (data) => {
        this.cribs = data;
      },
      (err) => {
        console.log(err);
      }

    )

    this.cribsListService.cribSubject.subscribe(
      (data) => {

        this.cribs.push(data);

      }
    );


      
      
  
  }
    
      
     
      
  }


