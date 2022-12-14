import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { UserComponent } from './components/user/user.component';
import { ResourceComponent } from './components/resource/resource.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { DataEditorComponent } from './components/data-editor/data-editor.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    NavigationComponent,
    ResourcesPageComponent,
    UserComponent,
    ResourceComponent,
    UserInfoPageComponent,
    DataEditorComponent,
    LoaderComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegistrationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
