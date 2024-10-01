import { Router } from "express";
import { CountriesController } from "src/controllers";
const countrieRoute: Router = Router()

countrieRoute.get("/countrie/all", CountriesController.getAllCountries)

export default countrieRoute