import { Router } from "express";
import countrieRoute from "./countriesRoute";

let router: Router = Router()

router.get("/", (req, res) => {res.send(`Hi everyone!`)})
router.use(countrieRoute)

export default router