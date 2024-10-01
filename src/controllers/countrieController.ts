import { prisma } from "src/config";
import { ErrorHandler } from "../errors/index";
import { NextFunction, Request, Response } from "express";

export class CountriesController {
    static async getAllCountries(req: Request, res: Response, next: NextFunction) {
        try {

            let dataCountries = await prisma.countries.findMany({
                include: {
                    products: {
                        select: {
                            productname: true
                        }
                    }
                }
            })

            return res.status(200).send({
                success: true,
                message: "All data countries",
                data: dataCountries
            })
        } catch (error: any) {
            next(new ErrorHandler(error.message, error.status))
        }
    }
}