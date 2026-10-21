import { Routes, RouterModule } from "@angular/router"; 
import { ModuleWithProviders } from "@angular/core"; 
import { HomeComponent } from "./components/home-component/home-component"; 
import { CineComponent } from "./components/cine-component/cine-component"; 
import { MusicaComponent } from "./components/musica-component/musica-component"; 

const appRoutes: Routes = [ 
    { path: "", component: HomeComponent}, 
    { path: "cine", component: CineComponent},
    { path: "musica", component: MusicaComponent} 
] 

export const appRoutingProvider: any[] = [] 
export const routing: ModuleWithProviders<any> =  

RouterModule.forRoot(appRoutes); 