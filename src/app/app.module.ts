//**** ANGULAR MODULES ****//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//**** TEMPLATE COMPONENTS ****//
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopNavComponent } from './top-nav/top-nav.component';

//**** CONTENT COMPONENTS ****//
import { HomeComponent } from './home/home.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';
import { CareerComponent } from './career/career.component';
import { EventsComponent } from './events/events.component';
import { DirectoryComponent } from './directory/directory.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

//**** FIREBASE MODULES ****//
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../environments/environment";

//**** USER MANAGEMENT MODULES ****//
import { UsersService } from './shared/users.service';
import { UserComponent } from './user/user.component';
import { IntranetComponent } from './intranet/intranet.component';

//**** USER MANAGEMENT MODULES ****//
import { CustomerService } from './shared/customer.service';
import { CustomerListComponent } from './student-list/customer-list.component';

//**** NOT YET USED ****//
import { NlRegistrationComponent } from './nl-registration/nl-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    TopNavComponent,
    SidebarHomeComponent,
    CareerComponent,
    EventsComponent,
    DirectoryComponent,
    TestimonialsComponent,
    NlRegistrationComponent,
    UserComponent,
    IntranetComponent,
    CustomerListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [UsersService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
