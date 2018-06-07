import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { CribCardInterface } from '../crib-card-interface';
import { map } from  'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CribListServiceService {


  public cribSubject = new Subject<CribCardInterface>();

  constructor(private http: Http) { }

   getAllCribs()
  {

    return this.http.get('data/cribs.json')
    .pipe( 
      map((res) => res.json()))
  
  }


  addCrib(data)
  {
    data.image = 'default-crib';
    this.cribSubject.next(data);
  }
}
