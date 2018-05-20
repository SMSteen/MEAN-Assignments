import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WilmingtonComponent } from './location/wilmington.component';
import { SeattleComponent } from './location/seattle.component';
import { SanjoseComponent } from './location/sanjose.component';
import { BurbankComponent } from './location/burbank.component';
import { DallasComponent } from './location/dallas.component';
import { DcComponent } from './location/dc.component';
import { ChicagoComponent } from './location/chicago.component';

const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        component: WilmingtonComponent
    },
    { 
        path: 'images/wilmington', 
        pathMatch: 'full', 
        component: WilmingtonComponent
    },
    { 
        path: 'seattle', 
        pathMatch: 'full', 
        component: SeattleComponent
    },
    { 
        path: 'images/seattle', 
        pathMatch: 'full', 
        component: SeattleComponent
    },
    { 
        path: 'sanjose', 
        pathMatch: 'full', 
        component: SanjoseComponent
    },
    { 
        path: 'images/sanjose', 
        pathMatch: 'full', 
        component: SanjoseComponent
    },
    { 
        path: 'burbank', 
        pathMatch: 'full', 
        component: BurbankComponent
    },
    { 
        path: 'images/burbank', 
        pathMatch: 'full', 
        component: BurbankComponent
    },
    { 
        path: 'dallas', 
        pathMatch: 'full', 
        component: DallasComponent
    },
    { 
        path: 'images/dallas', 
        pathMatch: 'full', 
        component: DallasComponent
    },
    { 
        path: 'dc', 
        pathMatch: 'full', 
        component: DcComponent
    },
    { 
        path: 'images/dc', 
        pathMatch: 'full', 
        component: DcComponent
    },
    { 
        path: 'chicago', 
        pathMatch: 'full', 
        component: ChicagoComponent
    },
    { 
        path: 'images/chicago', 
        pathMatch: 'full', 
        component: ChicagoComponent
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }