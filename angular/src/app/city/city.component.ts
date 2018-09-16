import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
    public citites = [];
    constructor( private _httpService: HttpService, 
                 private _route: ActivatedRoute,
                 private _router: Router) { }

    ngOnInit() {

    }

}
