"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const connect_1 = __importDefault(require("./connect"));
const PORT = process.env.PORT;
const db = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "mongodb://localhost:27017/test";
(0, connect_1.default)({ db });
app_1.default.listen(PORT, () => console.log(`Server ready at: http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map