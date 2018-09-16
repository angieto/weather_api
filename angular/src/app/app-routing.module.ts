import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city/city.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; 

// Configurate routes' rules
const routes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '/', component: CityComponent },
    { path: "**", redirectTo: '/home', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
// make a routingComponents an array that includes all routing components
// export to app.module.ts
export const routingComponents = [ CityComponent, PagenotfoundComponent ]