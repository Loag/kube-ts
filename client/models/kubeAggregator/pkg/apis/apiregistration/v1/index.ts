/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeListMeta, serializeObjectMeta, type ListMeta, type ObjectMeta } from '../../../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export interface APIService extends AdditionalDataHolder, Parsable {
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
     * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
     */
    spec?: APIServiceSpec | null;
    /**
     * APIServiceStatus contains derived information about an API server
     */
    status?: APIServiceStatus | null;
}
/**
 * APIServiceCondition describes the state of an APIService at a particular point
 */
export interface APIServiceCondition extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    lastTransitionTime?: Date | null;
    /**
     * Human-readable message indicating details about last transition.
     */
    message?: string | null;
    /**
     * Unique, one-word, CamelCase reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Status is the status of the condition. Can be True, False, Unknown.
     */
    status?: string | null;
    /**
     * Type is the type of the condition.
     */
    type?: string | null;
}
/**
 * APIServiceList is a list of APIService objects.
 */
export interface APIServiceList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Items is the list of APIService
     */
    items?: APIService[] | null;
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
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export interface APIServiceSpec extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
     */
    caBundle?: string | null;
    /**
     * Group is the API group name this server hosts
     */
    group?: string | null;
    /**
     * GroupPriorityMinimum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMinimum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
     */
    groupPriorityMinimum?: number | null;
    /**
     * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
     */
    insecureSkipTLSVerify?: boolean | null;
    /**
     * ServiceReference holds a reference to Service.legacy.k8s.io
     */
    service?: ServiceReference | null;
    /**
     * Version is the API version this server hosts.  For example, "v1"
     */
    version?: string | null;
    /**
     * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
     */
    versionPriority?: number | null;
}
/**
 * APIServiceStatus contains derived information about an API server
 */
export interface APIServiceStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Current service state of apiService.
     */
    conditions?: APIServiceCondition[] | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {APIServiceCondition}
 */
// @ts-ignore
export function createAPIServiceConditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAPIServiceCondition;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {APIService}
 */
// @ts-ignore
export function createAPIServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAPIService;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {APIServiceList}
 */
// @ts-ignore
export function createAPIServiceListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAPIServiceList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {APIServiceSpec}
 */
// @ts-ignore
export function createAPIServiceSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAPIServiceSpec;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {APIServiceStatus}
 */
// @ts-ignore
export function createAPIServiceStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAPIServiceStatus;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ServiceReference}
 */
// @ts-ignore
export function createServiceReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoServiceReference;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAPIService(aPIService: Partial<APIService> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { aPIService.apiVersion = n.getStringValue(); },
        "kind": n => { aPIService.kind = n.getStringValue(); },
        "metadata": n => { aPIService.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { aPIService.spec = n.getObjectValue<APIServiceSpec>(createAPIServiceSpecFromDiscriminatorValue); },
        "status": n => { aPIService.status = n.getObjectValue<APIServiceStatus>(createAPIServiceStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAPIServiceCondition(aPIServiceCondition: Partial<APIServiceCondition> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastTransitionTime": n => { aPIServiceCondition.lastTransitionTime = n.getDateValue(); },
        "message": n => { aPIServiceCondition.message = n.getStringValue(); },
        "reason": n => { aPIServiceCondition.reason = n.getStringValue(); },
        "status": n => { aPIServiceCondition.status = n.getStringValue(); },
        "type": n => { aPIServiceCondition.type = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAPIServiceList(aPIServiceList: Partial<APIServiceList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { aPIServiceList.apiVersion = n.getStringValue(); },
        "items": n => { aPIServiceList.items = n.getCollectionOfObjectValues<APIService>(createAPIServiceFromDiscriminatorValue); },
        "kind": n => { aPIServiceList.kind = n.getStringValue(); },
        "metadata": n => { aPIServiceList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAPIServiceSpec(aPIServiceSpec: Partial<APIServiceSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "caBundle": n => { aPIServiceSpec.caBundle = n.getStringValue(); },
        "group": n => { aPIServiceSpec.group = n.getStringValue(); },
        "groupPriorityMinimum": n => { aPIServiceSpec.groupPriorityMinimum = n.getNumberValue(); },
        "insecureSkipTLSVerify": n => { aPIServiceSpec.insecureSkipTLSVerify = n.getBooleanValue(); },
        "service": n => { aPIServiceSpec.service = n.getObjectValue<ServiceReference>(createServiceReferenceFromDiscriminatorValue); },
        "version": n => { aPIServiceSpec.version = n.getStringValue(); },
        "versionPriority": n => { aPIServiceSpec.versionPriority = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAPIServiceStatus(aPIServiceStatus: Partial<APIServiceStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "conditions": n => { aPIServiceStatus.conditions = n.getCollectionOfObjectValues<APIServiceCondition>(createAPIServiceConditionFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoServiceReference(serviceReference: Partial<ServiceReference> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { serviceReference.name = n.getStringValue(); },
        "namespace": n => { serviceReference.namespace = n.getStringValue(); },
        "port": n => { serviceReference.port = n.getNumberValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAPIService(writer: SerializationWriter, aPIService: Partial<APIService> | undefined | null = {}) : void {
    if (aPIService) {
        writer.writeStringValue("apiVersion", aPIService.apiVersion);
        writer.writeStringValue("kind", aPIService.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", aPIService.metadata, serializeObjectMeta);
        writer.writeObjectValue<APIServiceSpec>("spec", aPIService.spec, serializeAPIServiceSpec);
        writer.writeObjectValue<APIServiceStatus>("status", aPIService.status, serializeAPIServiceStatus);
        writer.writeAdditionalData(aPIService.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAPIServiceCondition(writer: SerializationWriter, aPIServiceCondition: Partial<APIServiceCondition> | undefined | null = {}) : void {
    if (aPIServiceCondition) {
        writer.writeDateValue("lastTransitionTime", aPIServiceCondition.lastTransitionTime);
        writer.writeStringValue("message", aPIServiceCondition.message);
        writer.writeStringValue("reason", aPIServiceCondition.reason);
        writer.writeStringValue("status", aPIServiceCondition.status);
        writer.writeStringValue("type", aPIServiceCondition.type);
        writer.writeAdditionalData(aPIServiceCondition.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAPIServiceList(writer: SerializationWriter, aPIServiceList: Partial<APIServiceList> | undefined | null = {}) : void {
    if (aPIServiceList) {
        writer.writeStringValue("apiVersion", aPIServiceList.apiVersion);
        writer.writeCollectionOfObjectValues<APIService>("items", aPIServiceList.items, serializeAPIService);
        writer.writeStringValue("kind", aPIServiceList.kind);
        writer.writeObjectValue<ListMeta>("metadata", aPIServiceList.metadata, serializeListMeta);
        writer.writeAdditionalData(aPIServiceList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAPIServiceSpec(writer: SerializationWriter, aPIServiceSpec: Partial<APIServiceSpec> | undefined | null = {}) : void {
    if (aPIServiceSpec) {
        writer.writeStringValue("caBundle", aPIServiceSpec.caBundle);
        writer.writeStringValue("group", aPIServiceSpec.group);
        writer.writeNumberValue("groupPriorityMinimum", aPIServiceSpec.groupPriorityMinimum);
        writer.writeBooleanValue("insecureSkipTLSVerify", aPIServiceSpec.insecureSkipTLSVerify);
        writer.writeObjectValue<ServiceReference>("service", aPIServiceSpec.service, serializeServiceReference);
        writer.writeStringValue("version", aPIServiceSpec.version);
        writer.writeNumberValue("versionPriority", aPIServiceSpec.versionPriority);
        writer.writeAdditionalData(aPIServiceSpec.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAPIServiceStatus(writer: SerializationWriter, aPIServiceStatus: Partial<APIServiceStatus> | undefined | null = {}) : void {
    if (aPIServiceStatus) {
        writer.writeCollectionOfObjectValues<APIServiceCondition>("conditions", aPIServiceStatus.conditions, serializeAPIServiceCondition);
        writer.writeAdditionalData(aPIServiceStatus.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeServiceReference(writer: SerializationWriter, serviceReference: Partial<ServiceReference> | undefined | null = {}) : void {
    if (serviceReference) {
        writer.writeStringValue("name", serviceReference.name);
        writer.writeStringValue("namespace", serviceReference.namespace);
        writer.writeNumberValue("port", serviceReference.port);
        writer.writeAdditionalData(serviceReference.additionalData);
    }
}
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface ServiceReference extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name is the name of the service
     */
    name?: string | null;
    /**
     * Namespace is the namespace of the service
     */
    namespace?: string | null;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     */
    port?: number | null;
}
/* tslint:enable */
/* eslint-enable */
