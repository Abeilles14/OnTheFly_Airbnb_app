import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: 'main', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: '', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
    { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
    { path: 'rentals', loadChildren: './rentals/rentals.module#RentalsPageModule' },
    { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
    { path: 'create', loadChildren: './create/create.module#CreatePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map