"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false },
    githubUrl: { type: String },
    liveUrl: { type: String },
    order: { type: Number, default: 0 },
}, { timestamps: true });
exports.ProjectModel = (0, mongoose_1.model)('Project', ProjectSchema);
