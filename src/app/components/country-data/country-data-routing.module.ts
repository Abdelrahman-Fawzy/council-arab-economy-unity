import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDataComponent } from './country-data.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CountryDataComponent,
      },
      {
        path: "country-details/:id",
        component: CountryDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDataRoutingModule { }
