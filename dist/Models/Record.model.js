"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModel = void 0;
const mongoose_1 = require("mongoose");
const RecordSchema = new mongoose_1.Schema({
    level: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: false,
        default: "anonimous"
    },
    userId: {
        required: false,
        type: String
    }
});
exports.RecordModel = (0, mongoose_1.model)('Record', RecordSchema);
//# sourceMappingURL=Record.model.js.map