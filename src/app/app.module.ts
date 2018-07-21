

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Angular-Token2 Authentication */
import { Angular2TokenService } from 'angular2-token';

/**Servicios */
import { AuthService } from './servicios/auth.service';

/**Conexion Http */
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Routers */
import { routing } from './app.routing';

/**Forms Module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**Angular Material Add Componentes */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/*Material Import*/
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';

/**Servicios */
import { PostsService } from './servicios/posts.service';

/**Components */
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostsModalComponent } from './posts/posts-modal.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { AccountComponent } from './account/account.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import {AuthenticationModule} from './account/authentication.module'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    PageNoFoundComponent,
    PostEditComponent,
    ArtistasComponent,
    ArtistaDetailComponent,
    LoginComponent,
    SignupComponent,
    PostsModalComponent,
    PostModalComponent,
    AccountComponent,
   // AuthLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatDialogModule,
    AuthenticationModule
  ],
  providers: [
    PostsService,
    Angular2TokenService,
    AuthService
  ],
  bootstrap: [AppComponent],
   // Ventana Modal se puede crear un coponentenente completo o solo un parcial con un html
  // componente completo: PostModalComponent
  // Parcial: PostsModalComponent
   entryComponents: [ PostModalComponent, PostsModalComponent ]
})
export class AppModule { }
