"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers/index");
const countrieRoute = (0, express_1.Router)();
countrieRoute.get("/countrie/all", controllers_1.CountriesController.getAllCountries);
exports.default = countrieRoute;
