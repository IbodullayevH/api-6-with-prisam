"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const config_1 = require("../config");
const index_1 = require("../errors/index");
class CountriesController {
    static getAllCountries(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dataCountries = yield config_1.prisma.countries.findMany({
                    include: {
                        products: {
                            select: {
                                productname: true
                            }
                        }
                    }
                });
                return res.status(200).send({
                    success: true,
                    message: "All data countries",
                    data: dataCountries
                });
            }
            catch (error) {
                next(new index_1.ErrorHandler(error.message, error.status));
            }
        });
    }
}
exports.CountriesController = CountriesController;
