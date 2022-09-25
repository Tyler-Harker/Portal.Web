import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TechfabricModule } from '@techfabric/angular';
import { MSAL_CONFIG_TOKEN } from '@techfabric/msal-ngrx';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    TechfabricModule
  ],
  providers: [
    {
      provide: MSAL_CONFIG_TOKEN,
      useValue: {
        clientId: environment.azureAd.clientId,
        tenantId: environment.azureAd.tenantId,
        redirectUri: environment.azureAd.redirectUri
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
