/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeListMeta, serializeObjectMeta, type ListMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { createTolerationFromDiscriminatorValue, serializeToleration, type Toleration } from '../../core/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Overhead_podFixed}
 */
// @ts-ignore
export function createOverhead_podFixedFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoOverhead_podFixed;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Overhead}
 */
// @ts-ignore
export function createOverheadFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoOverhead;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuntimeClass}
 */
// @ts-ignore
export function createRuntimeClassFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRuntimeClass;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RuntimeClassList}
 */
// @ts-ignore
export function createRuntimeClassListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRuntimeClassList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Scheduling_nodeSelector}
 */
// @ts-ignore
export function createScheduling_nodeSelectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoScheduling_nodeSelector;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Scheduling}
 */
// @ts-ignore
export function createSchedulingFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoScheduling;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoOverhead(overhead: Partial<Overhead> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "podFixed": n => { overhead.podFixed = n.getObjectValue<Overhead_podFixed>(createOverhead_podFixedFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoOverhead_podFixed(overhead_podFixed: Partial<Overhead_podFixed> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRuntimeClass(runtimeClass: Partial<RuntimeClass> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { runtimeClass.apiVersion = n.getStringValue(); },
        "handler": n => { runtimeClass.handler = n.getStringValue(); },
        "kind": n => { runtimeClass.kind = n.getStringValue(); },
        "metadata": n => { runtimeClass.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "overhead": n => { runtimeClass.overhead = n.getObjectValue<Overhead>(createOverheadFromDiscriminatorValue); },
        "scheduling": n => { runtimeClass.scheduling = n.getObjectValue<Scheduling>(createSchedulingFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRuntimeClassList(runtimeClassList: Partial<RuntimeClassList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { runtimeClassList.apiVersion = n.getStringValue(); },
        "items": n => { runtimeClassList.items = n.getCollectionOfObjectValues<RuntimeClass>(createRuntimeClassFromDiscriminatorValue); },
        "kind": n => { runtimeClassList.kind = n.getStringValue(); },
        "metadata": n => { runtimeClassList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoScheduling(scheduling: Partial<Scheduling> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "nodeSelector": n => { scheduling.nodeSelector = n.getObjectValue<Scheduling_nodeSelector>(createScheduling_nodeSelectorFromDiscriminatorValue); },
        "tolerations": n => { scheduling.tolerations = n.getCollectionOfObjectValues<Toleration>(createTolerationFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoScheduling_nodeSelector(scheduling_nodeSelector: Partial<Scheduling_nodeSelector> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface Overhead extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * podFixed represents the fixed resource overhead associated with running a pod.
     */
    podFixed?: Overhead_podFixed | null;
}
/**
 * podFixed represents the fixed resource overhead associated with running a pod.
 */
export interface Overhead_podFixed extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
 */
export interface RuntimeClass extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
     */
    handler?: string | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * Overhead structure represents the resource overhead associated with running a pod.
     */
    overhead?: Overhead | null;
    /**
     * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
     */
    scheduling?: Scheduling | null;
}
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 */
export interface RuntimeClassList extends AdditionalDataHolder, Parsable {
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
    items?: RuntimeClass[] | null;
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
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 */
export interface Scheduling extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
     */
    nodeSelector?: Scheduling_nodeSelector | null;
    /**
     * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
     */
    tolerations?: Toleration[] | null;
}
/**
 * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
 */
export interface Scheduling_nodeSelector extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeOverhead(writer: SerializationWriter, overhead: Partial<Overhead> | undefined | null = {}) : void {
    if (overhead) {
        writer.writeObjectValue<Overhead_podFixed>("podFixed", overhead.podFixed, serializeOverhead_podFixed);
        writer.writeAdditionalData(overhead.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeOverhead_podFixed(writer: SerializationWriter, overhead_podFixed: Partial<Overhead_podFixed> | undefined | null = {}) : void {
    if (overhead_podFixed) {
        writer.writeAdditionalData(overhead_podFixed.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRuntimeClass(writer: SerializationWriter, runtimeClass: Partial<RuntimeClass> | undefined | null = {}) : void {
    if (runtimeClass) {
        writer.writeStringValue("apiVersion", runtimeClass.apiVersion);
        writer.writeStringValue("handler", runtimeClass.handler);
        writer.writeStringValue("kind", runtimeClass.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", runtimeClass.metadata, serializeObjectMeta);
        writer.writeObjectValue<Overhead>("overhead", runtimeClass.overhead, serializeOverhead);
        writer.writeObjectValue<Scheduling>("scheduling", runtimeClass.scheduling, serializeScheduling);
        writer.writeAdditionalData(runtimeClass.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRuntimeClassList(writer: SerializationWriter, runtimeClassList: Partial<RuntimeClassList> | undefined | null = {}) : void {
    if (runtimeClassList) {
        writer.writeStringValue("apiVersion", runtimeClassList.apiVersion);
        writer.writeCollectionOfObjectValues<RuntimeClass>("items", runtimeClassList.items, serializeRuntimeClass);
        writer.writeStringValue("kind", runtimeClassList.kind);
        writer.writeObjectValue<ListMeta>("metadata", runtimeClassList.metadata, serializeListMeta);
        writer.writeAdditionalData(runtimeClassList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeScheduling(writer: SerializationWriter, scheduling: Partial<Scheduling> | undefined | null = {}) : void {
    if (scheduling) {
        writer.writeObjectValue<Scheduling_nodeSelector>("nodeSelector", scheduling.nodeSelector, serializeScheduling_nodeSelector);
        writer.writeCollectionOfObjectValues<Toleration>("tolerations", scheduling.tolerations, serializeToleration);
        writer.writeAdditionalData(scheduling.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeScheduling_nodeSelector(writer: SerializationWriter, scheduling_nodeSelector: Partial<Scheduling_nodeSelector> | undefined | null = {}) : void {
    if (scheduling_nodeSelector) {
        writer.writeAdditionalData(scheduling_nodeSelector.additionalData);
    }
}
/* tslint:enable */
/* eslint-enable */
