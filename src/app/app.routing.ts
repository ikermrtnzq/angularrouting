import { Routes, RouterModule } from "@angular/router"; 
import { ModuleWithProviders } from "@angular/core"; 
import { HomeComponent } from "./components/home-component/home-component"; 
import { CineComponent } from "./components/cine-component/cine-component"; 
import { MusicaComponent } from "./components/musica-component/musica-component"; 
import { NotFoundComponent } from "./components/not-found-component/not-found-component";
import { NumeroDobleComponent } from "./components/numero-doble-component/numero-doble-component";
import { TablaMultiplcarComponent } from "./components/tabla-multiplcar-component/tabla-multiplcar-component";

const appRoutes: Routes = [ 
    { path: "", component: HomeComponent}, 
    { path: "cine", component: CineComponent},
    { path: "musica", component: MusicaComponent},
    { path: "doble", component: NumeroDobleComponent},
    { path: "doble/:numero", component: NumeroDobleComponent},
    { path: "tabla/:numero", component: TablaMultiplcarComponent},
    { path: "**", component: NotFoundComponent} 
] 

export const appRoutingProvider: any[] = [] 
export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes); 