import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
