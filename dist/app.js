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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const User_controller_1 = __importDefault(require("./Controllers/User.controller"));
const records_controller_1 = __importDefault(require("./Controllers/records.controller"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("TS App is Running");
});
app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const user = yield User_controller_1.default.CreateUser({
        name: name,
        email: email,
    });
    return res.send({ user });
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_controller_1.default.ListUser();
    return res.send({ user });
}));
app.get('/records', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const records = yield records_controller_1.default.index();
    return res.send(records);
}));
app.post(`/record`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { level, user, userId } = req.body;
    const result = yield records_controller_1.default.Create({
        level: level,
        user: user,
        userId: userId,
    });
    return res.send({ result });
}));
exports.default = app;
//# sourceMappingURL=app.js.map