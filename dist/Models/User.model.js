"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false,
    }
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=User.model.js.map