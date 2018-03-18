"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var callback_component_1 = require("./callback/callback.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map