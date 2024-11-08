import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Asegúrate de que las rutas sean correctas según la ubicación de los componentes
import { HomeComponent } from './components/home/home.component';  // Ruta corregida
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';  // Ruta corregida
import { ContactoComponent } from './components/contacto/contacto.component';  // Ruta corregida

// Define las rutas
const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal - Home
  { path: 'ubicacion', component: UbicacionComponent },  // Ruta para "Ubícanos"
  { path: 'contacto', component: ContactoComponent },  // Ruta para "Contáctanos"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutador
  exports: [RouterModule]  // Exporta el RouterModule para que las rutas puedan ser utilizadas en otros módulos
})
export class AppRoutingModule { }