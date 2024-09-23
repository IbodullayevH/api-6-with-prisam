"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const errorMiddleware_1 = require("./middleware/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use("/*", errorMiddleware_1.ErrorHandlerMiddleware.ErrorHandlerMiddleware);
// server run
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server run: http://localhost:${port}`);
});
