import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    // get the observable from the get request to the specified api address
    getWeather(city) {
        return this._http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=b913e1d2697f85dea1f1bd5adf0a07da");
    }
}
