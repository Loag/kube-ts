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
 * @returns {GroupVersionResource}
 */
// @ts-ignore
export function createGroupVersionResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGroupVersionResource;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {MigrationCondition}
 */
// @ts-ignore
export function createMigrationConditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoMigrationCondition;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StorageVersionMigration}
 */
// @ts-ignore
export function createStorageVersionMigrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStorageVersionMigration;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StorageVersionMigrationList}
 */
// @ts-ignore
export function createStorageVersionMigrationListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStorageVersionMigrationList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StorageVersionMigrationSpec}
 */
// @ts-ignore
export function createStorageVersionMigrationSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStorageVersionMigrationSpec;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {StorageVersionMigrationStatus}
 */
// @ts-ignore
export function createStorageVersionMigrationStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoStorageVersionMigrationStatus;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGroupVersionResource(groupVersionResource: Partial<GroupVersionResource> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "group": n => { groupVersionResource.group = n.getStringValue(); },
        "resource": n => { groupVersionResource.resource = n.getStringValue(); },
        "version": n => { groupVersionResource.version = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoMigrationCondition(migrationCondition: Partial<MigrationCondition> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastUpdateTime": n => { migrationCondition.lastUpdateTime = n.getDateValue(); },
        "message": n => { migrationCondition.message = n.getStringValue(); },
        "reason": n => { migrationCondition.reason = n.getStringValue(); },
        "status": n => { migrationCondition.status = n.getStringValue(); },
        "type": n => { migrationCondition.type = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoStorageVersionMigration(storageVersionMigration: Partial<StorageVersionMigration> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { storageVersionMigration.apiVersion = n.getStringValue(); },
        "kind": n => { storageVersionMigration.kind = n.getStringValue(); },
        "metadata": n => { storageVersionMigration.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { storageVersionMigration.spec = n.getObjectValue<StorageVersionMigrationSpec>(createStorageVersionMigrationSpecFromDiscriminatorValue); },
        "status": n => { storageVersionMigration.status = n.getObjectValue<StorageVersionMigrationStatus>(createStorageVersionMigrationStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoStorageVersionMigrationList(storageVersionMigrationList: Partial<StorageVersionMigrationList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { storageVersionMigrationList.apiVersion = n.getStringValue(); },
        "items": n => { storageVersionMigrationList.items = n.getCollectionOfObjectValues<StorageVersionMigration>(createStorageVersionMigrationFromDiscriminatorValue); },
        "kind": n => { storageVersionMigrationList.kind = n.getStringValue(); },
        "metadata": n => { storageVersionMigrationList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoStorageVersionMigrationSpec(storageVersionMigrationSpec: Partial<StorageVersionMigrationSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "continueToken": n => { storageVersionMigrationSpec.continueToken = n.getStringValue(); },
        "resource": n => { storageVersionMigrationSpec.resource = n.getObjectValue<GroupVersionResource>(createGroupVersionResourceFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoStorageVersionMigrationStatus(storageVersionMigrationStatus: Partial<StorageVersionMigrationStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "conditions": n => { storageVersionMigrationStatus.conditions = n.getCollectionOfObjectValues<MigrationCondition>(createMigrationConditionFromDiscriminatorValue); },
        "resourceVersion": n => { storageVersionMigrationStatus.resourceVersion = n.getStringValue(); },
    }
}
/**
 * The names of the group, the version, and the resource.
 */
export interface GroupVersionResource extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the group.
     */
    group?: string | null;
    /**
     * The name of the resource.
     */
    resource?: string | null;
    /**
     * The name of the version.
     */
    version?: string | null;
}
/**
 * Describes the state of a migration at a certain point.
 */
export interface MigrationCondition extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    lastUpdateTime?: Date | null;
    /**
     * A human readable message indicating details about the transition.
     */
    message?: string | null;
    /**
     * The reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * Type of the condition.
     */
    type?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGroupVersionResource(writer: SerializationWriter, groupVersionResource: Partial<GroupVersionResource> | undefined | null = {}) : void {
    if (groupVersionResource) {
        writer.writeStringValue("group", groupVersionResource.group);
        writer.writeStringValue("resource", groupVersionResource.resource);
        writer.writeStringValue("version", groupVersionResource.version);
        writer.writeAdditionalData(groupVersionResource.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeMigrationCondition(writer: SerializationWriter, migrationCondition: Partial<MigrationCondition> | undefined | null = {}) : void {
    if (migrationCondition) {
        writer.writeDateValue("lastUpdateTime", migrationCondition.lastUpdateTime);
        writer.writeStringValue("message", migrationCondition.message);
        writer.writeStringValue("reason", migrationCondition.reason);
        writer.writeStringValue("status", migrationCondition.status);
        writer.writeStringValue("type", migrationCondition.type);
        writer.writeAdditionalData(migrationCondition.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeStorageVersionMigration(writer: SerializationWriter, storageVersionMigration: Partial<StorageVersionMigration> | undefined | null = {}) : void {
    if (storageVersionMigration) {
        writer.writeStringValue("apiVersion", storageVersionMigration.apiVersion);
        writer.writeStringValue("kind", storageVersionMigration.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", storageVersionMigration.metadata, serializeObjectMeta);
        writer.writeObjectValue<StorageVersionMigrationSpec>("spec", storageVersionMigration.spec, serializeStorageVersionMigrationSpec);
        writer.writeObjectValue<StorageVersionMigrationStatus>("status", storageVersionMigration.status, serializeStorageVersionMigrationStatus);
        writer.writeAdditionalData(storageVersionMigration.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeStorageVersionMigrationList(writer: SerializationWriter, storageVersionMigrationList: Partial<StorageVersionMigrationList> | undefined | null = {}) : void {
    if (storageVersionMigrationList) {
        writer.writeStringValue("apiVersion", storageVersionMigrationList.apiVersion);
        writer.writeCollectionOfObjectValues<StorageVersionMigration>("items", storageVersionMigrationList.items, serializeStorageVersionMigration);
        writer.writeStringValue("kind", storageVersionMigrationList.kind);
        writer.writeObjectValue<ListMeta>("metadata", storageVersionMigrationList.metadata, serializeListMeta);
        writer.writeAdditionalData(storageVersionMigrationList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeStorageVersionMigrationSpec(writer: SerializationWriter, storageVersionMigrationSpec: Partial<StorageVersionMigrationSpec> | undefined | null = {}) : void {
    if (storageVersionMigrationSpec) {
        writer.writeStringValue("continueToken", storageVersionMigrationSpec.continueToken);
        writer.writeObjectValue<GroupVersionResource>("resource", storageVersionMigrationSpec.resource, serializeGroupVersionResource);
        writer.writeAdditionalData(storageVersionMigrationSpec.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeStorageVersionMigrationStatus(writer: SerializationWriter, storageVersionMigrationStatus: Partial<StorageVersionMigrationStatus> | undefined | null = {}) : void {
    if (storageVersionMigrationStatus) {
        writer.writeCollectionOfObjectValues<MigrationCondition>("conditions", storageVersionMigrationStatus.conditions, serializeMigrationCondition);
        writer.writeStringValue("resourceVersion", storageVersionMigrationStatus.resourceVersion);
        writer.writeAdditionalData(storageVersionMigrationStatus.additionalData);
    }
}
/**
 * StorageVersionMigration represents a migration of stored data to the latest storage version.
 */
export interface StorageVersionMigration extends AdditionalDataHolder, Parsable {
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
     * Spec of the storage version migration.
     */
    spec?: StorageVersionMigrationSpec | null;
    /**
     * Status of the storage version migration.
     */
    status?: StorageVersionMigrationStatus | null;
}
/**
 * StorageVersionMigrationList is a collection of storage version migrations.
 */
export interface StorageVersionMigrationList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is the list of StorageVersionMigration
     */
    items?: StorageVersionMigration[] | null;
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
 * Spec of the storage version migration.
 */
export interface StorageVersionMigrationSpec extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration.
     */
    continueToken?: string | null;
    /**
     * The names of the group, the version, and the resource.
     */
    resource?: GroupVersionResource | null;
}
/**
 * Status of the storage version migration.
 */
export interface StorageVersionMigrationStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The latest available observations of the migration's current state.
     */
    conditions?: MigrationCondition[] | null;
    /**
     * ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.
     */
    resourceVersion?: string | null;
}
/* tslint:enable */
/* eslint-enable */
