/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Info}
 */
// @ts-ignore
export function createInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoInfo;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoInfo(info: Partial<Info> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "buildDate": n => { info.buildDate = n.getStringValue(); },
        "compiler": n => { info.compiler = n.getStringValue(); },
        "gitCommit": n => { info.gitCommit = n.getStringValue(); },
        "gitTreeState": n => { info.gitTreeState = n.getStringValue(); },
        "gitVersion": n => { info.gitVersion = n.getStringValue(); },
        "goVersion": n => { info.goVersion = n.getStringValue(); },
        "major": n => { info.major = n.getStringValue(); },
        "minor": n => { info.minor = n.getStringValue(); },
        "platform": n => { info.platform = n.getStringValue(); },
    }
}
/**
 * Info contains versioning information. how we'll want to distribute that information.
 */
export interface Info extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The buildDate property
     */
    buildDate?: string | null;
    /**
     * The compiler property
     */
    compiler?: string | null;
    /**
     * The gitCommit property
     */
    gitCommit?: string | null;
    /**
     * The gitTreeState property
     */
    gitTreeState?: string | null;
    /**
     * The gitVersion property
     */
    gitVersion?: string | null;
    /**
     * The goVersion property
     */
    goVersion?: string | null;
    /**
     * The major property
     */
    major?: string | null;
    /**
     * The minor property
     */
    minor?: string | null;
    /**
     * The platform property
     */
    platform?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeInfo(writer: SerializationWriter, info: Partial<Info> | undefined | null = {}) : void {
    if (info) {
        writer.writeStringValue("buildDate", info.buildDate);
        writer.writeStringValue("compiler", info.compiler);
        writer.writeStringValue("gitCommit", info.gitCommit);
        writer.writeStringValue("gitTreeState", info.gitTreeState);
        writer.writeStringValue("gitVersion", info.gitVersion);
        writer.writeStringValue("goVersion", info.goVersion);
        writer.writeStringValue("major", info.major);
        writer.writeStringValue("minor", info.minor);
        writer.writeStringValue("platform", info.platform);
        writer.writeAdditionalData(info.additionalData);
    }
}
/* tslint:enable */
/* eslint-enable */
