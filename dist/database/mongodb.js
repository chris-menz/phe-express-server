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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromMongo = exports.connectToMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnString = "mongodb+srv://phe-dev-db:phe-dev-db-pw@phe-dev-cluster.baefg.mongodb.net/?retryWrites=true&w=majority";
function connectToMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(mongoConnString);
            console.log("Successfully connected to Dev DB");
        }
        catch (e) {
            console.log(e);
            console.log("failed to connect");
            process.exit(1);
        }
    });
}
exports.connectToMongo = connectToMongo;
function disconnectFromMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
        console.log("Disconnecting from db...");
        return;
    });
}
exports.disconnectFromMongo = disconnectFromMongo;
