import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component'; // Asegúrate de que esta importación esté correcta

// Importa AppRoutingModule para manejar las rutas
import { AppRoutingModule } from './app-routing.module';

// Importa FormsModule para usar ngModel en los formularios
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UbicacionComponent,
    ContactoComponent,
    FooterComponent  // Asegúrate de declarar FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Importa el módulo de rutas
    FormsModule        // Importa FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
