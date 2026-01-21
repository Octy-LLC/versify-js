import { SemanticVersion } from './semantic-version.type.contract';

export interface IVersionManifest {
    /**
     * The minimum supported version.
     * eg. '1.0.0'
     */
    min: SemanticVersion;
    /**
     * The long-term support version.
     * eg. '1.0.0'
     */
    lts: SemanticVersion;
}
