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
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import CandidateRoute from "./modules/candidate/candidate.route"
const mongodb_1 = require("./database/mongodb");
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Welcome to the PHE Express Dev Server!!!");
});
// app.use("/candidate", CandidateRoute)
const server = app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongodb_1.connectToMongo)();
    console.log("Express running on port 3001");
}));
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    server.close(() => {
        console.log("Server shutting down");
        (0, mongodb_1.disconnectFromMongo)();
        process.exit(0);
    });
}));
process.on("SIGTERM", () => __awaiter(void 0, void 0, void 0, function* () {
    server.close(() => {
        console.log("Server shutting down");
        (0, mongodb_1.disconnectFromMongo)();
        process.exit(0);
    });
}));
