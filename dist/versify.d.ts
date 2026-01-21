import { GetVersionManifestStrategy } from './get-version-manifest-strategies/abstract.strategy';
import { EVersionChecks } from './contracts/version-checks.enum.contract';
import { IVersionManifest, SemanticVersion } from './contracts';
import { SemanticVLib } from './semantic-v-lib';
export declare class Versify {
    strategy: GetVersionManifestStrategy;
    SemanticVLib: typeof SemanticVLib;
    constructor(strategy: GetVersionManifestStrategy);
    getVersionManifest(): Promise<IVersionManifest>;
    /**
     * @param current The current version string to check against the manifest. Eg: "1.0.0"
     */
    check(current: SemanticVersion): Promise<EVersionChecks>;
}
