/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeListMeta, serializeObjectMeta, type ListMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Lease}
 */
// @ts-ignore
export function createLeaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoLease;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LeaseList}
 */
// @ts-ignore
export function createLeaseListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoLeaseList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LeaseSpec}
 */
// @ts-ignore
export function createLeaseSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoLeaseSpec;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoLease(lease: Partial<Lease> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { lease.apiVersion = n.getStringValue(); },
        "kind": n => { lease.kind = n.getStringValue(); },
        "metadata": n => { lease.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { lease.spec = n.getObjectValue<LeaseSpec>(createLeaseSpecFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoLeaseList(leaseList: Partial<LeaseList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { leaseList.apiVersion = n.getStringValue(); },
        "items": n => { leaseList.items = n.getCollectionOfObjectValues<Lease>(createLeaseFromDiscriminatorValue); },
        "kind": n => { leaseList.kind = n.getStringValue(); },
        "metadata": n => { leaseList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoLeaseSpec(leaseSpec: Partial<LeaseSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "acquireTime": n => { leaseSpec.acquireTime = n.getDateValue(); },
        "holderIdentity": n => { leaseSpec.holderIdentity = n.getStringValue(); },
        "leaseDurationSeconds": n => { leaseSpec.leaseDurationSeconds = n.getNumberValue(); },
        "leaseTransitions": n => { leaseSpec.leaseTransitions = n.getNumberValue(); },
        "preferredHolder": n => { leaseSpec.preferredHolder = n.getStringValue(); },
        "renewTime": n => { leaseSpec.renewTime = n.getDateValue(); },
        "strategy": n => { leaseSpec.strategy = n.getStringValue(); },
    }
}
/**
 * Lease defines a lease concept.
 */
export interface Lease extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * LeaseSpec is a specification of a Lease.
     */
    spec?: LeaseSpec | null;
}
/**
 * LeaseList is a list of Lease objects.
 */
export interface LeaseList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * items is a list of schema objects.
     */
    items?: Lease[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta | null;
}
/**
 * LeaseSpec is a specification of a Lease.
 */
export interface LeaseSpec extends AdditionalDataHolder, Parsable {
    /**
     * MicroTime is version of Time with microsecond level precision.
     */
    acquireTime?: Date | null;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field.
     */
    holderIdentity?: string | null;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measured against the time of last observed renewTime.
     */
    leaseDurationSeconds?: number | null;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     */
    leaseTransitions?: number | null;
    /**
     * PreferredHolder signals to a lease holder that the lease has a more optimal holder and should be given up. This field can only be set if Strategy is also set.
     */
    preferredHolder?: string | null;
    /**
     * MicroTime is version of Time with microsecond level precision.
     */
    renewTime?: Date | null;
    /**
     * Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
     */
    strategy?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeLease(writer: SerializationWriter, lease: Partial<Lease> | undefined | null = {}) : void {
    if (lease) {
        writer.writeStringValue("apiVersion", lease.apiVersion);
        writer.writeStringValue("kind", lease.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", lease.metadata, serializeObjectMeta);
        writer.writeObjectValue<LeaseSpec>("spec", lease.spec, serializeLeaseSpec);
        writer.writeAdditionalData(lease.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeLeaseList(writer: SerializationWriter, leaseList: Partial<LeaseList> | undefined | null = {}) : void {
    if (leaseList) {
        writer.writeStringValue("apiVersion", leaseList.apiVersion);
        writer.writeCollectionOfObjectValues<Lease>("items", leaseList.items, serializeLease);
        writer.writeStringValue("kind", leaseList.kind);
        writer.writeObjectValue<ListMeta>("metadata", leaseList.metadata, serializeListMeta);
        writer.writeAdditionalData(leaseList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeLeaseSpec(writer: SerializationWriter, leaseSpec: Partial<LeaseSpec> | undefined | null = {}) : void {
    if (leaseSpec) {
        writer.writeDateValue("acquireTime", leaseSpec.acquireTime);
        writer.writeStringValue("holderIdentity", leaseSpec.holderIdentity);
        writer.writeNumberValue("leaseDurationSeconds", leaseSpec.leaseDurationSeconds);
        writer.writeNumberValue("leaseTransitions", leaseSpec.leaseTransitions);
        writer.writeStringValue("preferredHolder", leaseSpec.preferredHolder);
        writer.writeDateValue("renewTime", leaseSpec.renewTime);
        writer.writeStringValue("strategy", leaseSpec.strategy);
        writer.writeAdditionalData(leaseSpec.additionalData);
    }
}
/* tslint:enable */
/* eslint-enable */
