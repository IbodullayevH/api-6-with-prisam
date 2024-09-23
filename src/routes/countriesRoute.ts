import { CountriesController } from "@controllers";
import { Router } from "express";
const countrieRoute: Router = Router()

countrieRoute.get("/countrie/all", CountriesController.getAllCountries)

export default countrieRoute