import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
    cityData;
    city: string;
    img: string;
    constructor( private _httpService: HttpService, 
                 private _route: ActivatedRoute,
                 private _router: Router) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.city = params.city;
            console.log("City name", this.city);
            const obs = this._httpService.getWeather(this.city);
            obs.subscribe(cityData => {
                this.cityData = cityData;
                console.log("Your cityData returned by obs:", this.cityData);
            });
            if (this.city === "seattle") {
                this.img = "https://en.wikipedia.org/wiki/Seattle#/media/File:Space_Needle002.jpg";
            } else if (this.city === "san jose") {
                this.img = "https://www.digitalwest.com/wp-content/uploads/2015/09/colocation_san_jose.png";
            } else if (this.city === "burbank") {
                this.img = "http://www.burbankca.gov/Home/ShowImage?id=9847&t=636107353006770000";
            } else if (this.city === "dallas") {
                this.img = "https://www.avhomesinc.com/wp-content/uploads/2018/07/shutterstock_145616482-1920x1080.jpg";
            } else if (this.city === "washington") {
                this.img = "http://gosunshinetours.com.cdn.pronetsweb.com/wp-content/uploads/2017/01/Capital-Building.jpg";
            } else if (this.city === "chicago") {
                this.img = "https://warwickhotels.com/imagegen.ashx?align=center&crop=resize&image=/media/6503944/chicago1.jpg&width=1400&height=597&altImage=/images/defaultwarwick.jpg";
            }
        })
    }

}
