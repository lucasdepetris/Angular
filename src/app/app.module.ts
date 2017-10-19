import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { LeftComponent } from './common/left.component';
import { RightComponent } from './common/right.component';
import { HeroesComponent }     from './heroes.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,LeftComponent,RightComponent,HeroesComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroesComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
