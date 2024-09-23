"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countrieController_1 = require("../controllers/countrieController");
const express_1 = require("express");
const countrieRoute = (0, express_1.Router)();
countrieRoute.get("/countrie/all", countrieController_1.CountriesController.getAllCountries);
exports.default = countrieRoute;
