"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const candidate_controller_js_1 = require("./candidate.controller.js");
const router = express_1.default.Router();
// router.get("/:id", getCandidateByIdHandler)
router.get("/", candidate_controller_js_1.getAllCandidatesHandler);
router.post("/", candidate_controller_js_1.registerCandidateHandler);
exports.default = router;
