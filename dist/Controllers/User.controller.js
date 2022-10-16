"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../Models/User.model");
function CreateUser({ email, name }) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = new User_model_1.UserModel({ email, name });
        yield user.save();
        return user;
    });
}
function ListUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return User_model_1.UserModel.find();
    });
}
exports.default = {
    CreateUser, ListUser
};
//# sourceMappingURL=User.controller.js.map