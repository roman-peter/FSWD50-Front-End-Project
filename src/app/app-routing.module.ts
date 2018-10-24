import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { EventsComponent } from './events/events.component';
import { DirectoryComponent } from './directory/directory.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { IntranetComponent } from './intranet/intranet.component';



const routes: Routes = 
[
	{ path: '', component: HomeComponent },
	{ path: 'career', component: CareerComponent},
	{ path: 'events', component: EventsComponent},
	{ path: 'directory', component: DirectoryComponent},
	{ path: 'stories', component: TestimonialsComponent},
	{ path: 'intranet', component: IntranetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
