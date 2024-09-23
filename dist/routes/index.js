"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countriesRoute_1 = __importDefault(require("./countriesRoute"));
let router = (0, express_1.Router)();
router.get("/", (req, res) => { res.send(`Hi everyone!`); });
router.use(countriesRoute_1.default);
exports.default = router;
