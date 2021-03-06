"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./listeproduit/index");
var index_4 = require("./register/index");
var index_5 = require("./_guards/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_5.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_4.RegisterComponent },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'produits', component: index_3.ListeproduitComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map