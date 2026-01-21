"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByUrlStrategy = void 0;
const errors_1 = require("../errors");
const semantic_v_lib_1 = require("../semantic-v-lib");
const abstract_strategy_1 = require("./abstract.strategy");
class GetByUrlStrategy extends abstract_strategy_1.GetVersionManifestStrategy {
    url;
    SemanticVLib = semantic_v_lib_1.SemanticVLib;
    constructor(url) {
        super();
        this.url = url;
    }
    async get() {
        const response = await fetch(this.url);
        const manifest = await response.json()
            .catch(() => {
            throw new errors_1.InvalidVersionManifestFormatError;
        });
        if (typeof manifest.min !== 'string' || !this.SemanticVLib.isValid(manifest.min)
            || typeof manifest.lts !== 'string' || !this.SemanticVLib.isValid(manifest.lts)) {
            throw new errors_1.InvalidVersionManifestFormatError;
        }
        return { min: manifest.min, lts: manifest.lts };
    }
}
exports.GetByUrlStrategy = GetByUrlStrategy;
