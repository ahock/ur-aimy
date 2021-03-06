"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./../auth.service");
var user_service_1 = require("./user.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(auth, user) {
        this.auth = auth;
        this.user = user;
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log("UserComponentInit:", this.user.user);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-home',
            templateUrl: 'client/app/user/user.component.html',
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map