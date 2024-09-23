"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _controllers_1 = require("@controllers");
const express_1 = require("express");
const countrieRoute = (0, express_1.Router)();
countrieRoute.get("/countrie/all", _controllers_1.CountriesController.getAllCountries);
exports.default = countrieRoute;
