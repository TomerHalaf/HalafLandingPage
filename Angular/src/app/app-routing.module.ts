import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { AboutPageComponent } from "./about-page/about-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const appRoutes:Routes = [    
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: LandingPageComponent},
    {path: "about", component: AboutPageComponent},
    { path: '**', component: LandingPageComponent }
]

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}