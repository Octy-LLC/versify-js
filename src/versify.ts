import { GetVersionManifestStrategy } from './get-version-manifest-strategies/abstract.strategy';
import { EVersionChecks } from './contracts/version-checks.enum.contract';
import { IVersionManifest, SemanticVersion } from './contracts';
import { InvalidSemanticVersionError } from './errors';
import { CurrentVersionHigherLTSError } from './errors/curren-version-higher-lts';
import { SemanticVLib } from './semantic-v-lib';

export class Versify {
    strategy: GetVersionManifestStrategy;
    SemanticVLib = SemanticVLib;

    constructor(strategy: GetVersionManifestStrategy) {
        this.strategy = strategy;
    }

    getVersionManifest(): Promise<IVersionManifest> {
        return this.strategy.get();
    }

    /**
     * @param current The current version string to check against the manifest. Eg: "1.0.0"
     */
    async check(current: SemanticVersion): Promise<EVersionChecks> {
        if (!this.SemanticVLib.isValid(current)) {
            throw new InvalidSemanticVersionError(current);
        }

        const manifest = await this.getVersionManifest();
        const compareLts = this.SemanticVLib.compare(current, manifest.lts);
        const compareMin = this.SemanticVLib.compare(current, manifest.min);

        if (compareMin < 0) return EVersionChecks.FORCE;
        if (compareLts < 0) return EVersionChecks.SOFT;
        if (compareLts === 0) return EVersionChecks.UP_TO_DATE;
        if (compareLts > 0) {
            throw new CurrentVersionHigherLTSError(current, manifest.lts);
        };
    }
}
