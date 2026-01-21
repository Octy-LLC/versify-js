"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Versify = void 0;
const version_checks_enum_contract_1 = require("./contracts/version-checks.enum.contract");
const errors_1 = require("./errors");
const curren_version_higher_lts_1 = require("./errors/curren-version-higher-lts");
const semantic_v_lib_1 = require("./semantic-v-lib");
class Versify {
    strategy;
    SemanticVLib = semantic_v_lib_1.SemanticVLib;
    constructor(strategy) {
        this.strategy = strategy;
    }
    getVersionManifest() {
        return this.strategy.get();
    }
    /**
     * @param current The current version string to check against the manifest. Eg: "1.0.0"
     */
    async check(current) {
        if (!this.SemanticVLib.isValid(current)) {
            throw new errors_1.InvalidSemanticVersionError(current);
        }
        const manifest = await this.getVersionManifest();
        const compareLts = this.SemanticVLib.compare(current, manifest.lts);
        const compareMin = this.SemanticVLib.compare(current, manifest.min);
        if (compareMin < 0)
            return version_checks_enum_contract_1.EVersionChecks.FORCE;
        if (compareLts < 0)
            return version_checks_enum_contract_1.EVersionChecks.SOFT;
        if (compareLts === 0)
            return version_checks_enum_contract_1.EVersionChecks.UP_TO_DATE;
        if (compareLts > 0) {
            throw new curren_version_higher_lts_1.CurrentVersionHigherLTSError(current, manifest.lts);
        }
        ;
    }
}
exports.Versify = Versify;
