import { IVersionManifest } from '../contracts/version-manifest.interface.contract';
import { SemanticVLib } from '../semantic-v-lib';
import { GetVersionManifestStrategy } from './abstract.strategy';
export declare class GetByUrlStrategy extends GetVersionManifestStrategy {
    url: string;
    SemanticVLib: typeof SemanticVLib;
    constructor(url: string);
    get(): Promise<IVersionManifest>;
}
