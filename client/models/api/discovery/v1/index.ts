/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeListMeta, serializeObjectMeta, type ListMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { createObjectReferenceFromDiscriminatorValue, serializeObjectReference, type ObjectReference } from '../../core/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Endpoint_deprecatedTopology}
 */
// @ts-ignore
export function createEndpoint_deprecatedTopologyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpoint_deprecatedTopology;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EndpointConditions}
 */
// @ts-ignore
export function createEndpointConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpointConditions;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Endpoint}
 */
// @ts-ignore
export function createEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpoint;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EndpointHints}
 */
// @ts-ignore
export function createEndpointHintsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpointHints;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EndpointPort}
 */
// @ts-ignore
export function createEndpointPortFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpointPort;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EndpointSlice}
 */
// @ts-ignore
export function createEndpointSliceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpointSlice;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EndpointSliceList}
 */
// @ts-ignore
export function createEndpointSliceListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEndpointSliceList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ForZone}
 */
// @ts-ignore
export function createForZoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoForZone;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpoint(endpoint: Partial<Endpoint> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addresses": n => { endpoint.addresses = n.getCollectionOfPrimitiveValues<string>(); },
        "conditions": n => { endpoint.conditions = n.getObjectValue<EndpointConditions>(createEndpointConditionsFromDiscriminatorValue); },
        "deprecatedTopology": n => { endpoint.deprecatedTopology = n.getObjectValue<Endpoint_deprecatedTopology>(createEndpoint_deprecatedTopologyFromDiscriminatorValue); },
        "hints": n => { endpoint.hints = n.getObjectValue<EndpointHints>(createEndpointHintsFromDiscriminatorValue); },
        "hostname": n => { endpoint.hostname = n.getStringValue(); },
        "nodeName": n => { endpoint.nodeName = n.getStringValue(); },
        "targetRef": n => { endpoint.targetRef = n.getObjectValue<ObjectReference>(createObjectReferenceFromDiscriminatorValue); },
        "zone": n => { endpoint.zone = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpoint_deprecatedTopology(endpoint_deprecatedTopology: Partial<Endpoint_deprecatedTopology> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpointConditions(endpointConditions: Partial<EndpointConditions> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ready": n => { endpointConditions.ready = n.getBooleanValue(); },
        "serving": n => { endpointConditions.serving = n.getBooleanValue(); },
        "terminating": n => { endpointConditions.terminating = n.getBooleanValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpointHints(endpointHints: Partial<EndpointHints> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "forZones": n => { endpointHints.forZones = n.getCollectionOfObjectValues<ForZone>(createForZoneFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpointPort(endpointPort: Partial<EndpointPort> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "appProtocol": n => { endpointPort.appProtocol = n.getStringValue(); },
        "name": n => { endpointPort.name = n.getStringValue(); },
        "port": n => { endpointPort.port = n.getNumberValue(); },
        "protocol": n => { endpointPort.protocol = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpointSlice(endpointSlice: Partial<EndpointSlice> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addressType": n => { endpointSlice.addressType = n.getStringValue(); },
        "apiVersion": n => { endpointSlice.apiVersion = n.getStringValue(); },
        "endpoints": n => { endpointSlice.endpoints = n.getCollectionOfObjectValues<Endpoint>(createEndpointFromDiscriminatorValue); },
        "kind": n => { endpointSlice.kind = n.getStringValue(); },
        "metadata": n => { endpointSlice.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "ports": n => { endpointSlice.ports = n.getCollectionOfObjectValues<EndpointPort>(createEndpointPortFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEndpointSliceList(endpointSliceList: Partial<EndpointSliceList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { endpointSliceList.apiVersion = n.getStringValue(); },
        "items": n => { endpointSliceList.items = n.getCollectionOfObjectValues<EndpointSlice>(createEndpointSliceFromDiscriminatorValue); },
        "kind": n => { endpointSliceList.kind = n.getStringValue(); },
        "metadata": n => { endpointSliceList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoForZone(forZone: Partial<ForZone> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { forZone.name = n.getStringValue(); },
    }
}
/**
 * Endpoint represents a single logical "backend" implementing a service.
 */
export interface Endpoint extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
     */
    addresses?: string[] | null;
    /**
     * EndpointConditions represents the current condition of an endpoint.
     */
    conditions?: EndpointConditions | null;
    /**
     * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
     */
    deprecatedTopology?: Endpoint_deprecatedTopology | null;
    /**
     * EndpointHints provides hints describing how an endpoint should be consumed.
     */
    hints?: EndpointHints | null;
    /**
     * hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
     */
    hostname?: string | null;
    /**
     * nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
     */
    nodeName?: string | null;
    /**
     * ObjectReference contains enough information to let you inspect or modify the referred object.
     */
    targetRef?: ObjectReference | null;
    /**
     * zone is the name of the Zone this endpoint exists in.
     */
    zone?: string | null;
}
/**
 * deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
 */
export interface Endpoint_deprecatedTopology extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/**
 * EndpointConditions represents the current condition of an endpoint.
 */
export interface EndpointConditions extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.
     */
    ready?: boolean | null;
    /**
     * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.
     */
    serving?: boolean | null;
    /**
     * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.
     */
    terminating?: boolean | null;
}
/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export interface EndpointHints extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
     */
    forZones?: ForZone[] | null;
}
/**
 * EndpointPort represents a Port used by an EndpointSlice
 */
export interface EndpointPort extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:* Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).* Kubernetes-defined prefixed names:  * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-  * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455  * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455* Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
     */
    appProtocol?: string | null;
    /**
     * name represents the name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is derived from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string.
     */
    name?: string | null;
    /**
     * port represents the port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
     */
    port?: number | null;
    /**
     * protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     */
    protocol?: string | null;
}
/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export interface EndpointSlice extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
     */
    addressType?: string | null;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
     */
    endpoints?: Endpoint[] | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta | null;
    /**
     * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
     */
    ports?: EndpointPort[] | null;
}
/**
 * EndpointSliceList represents a list of endpoint slices
 */
export interface EndpointSliceList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * items is the list of endpoint slices
     */
    items?: EndpointSlice[] | null;
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
 * ForZone provides information about which zones should consume this endpoint.
 */
export interface ForZone extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * name represents the name of the zone.
     */
    name?: string | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpoint(writer: SerializationWriter, endpoint: Partial<Endpoint> | undefined | null = {}) : void {
    if (endpoint) {
        writer.writeCollectionOfPrimitiveValues<string>("addresses", endpoint.addresses);
        writer.writeObjectValue<EndpointConditions>("conditions", endpoint.conditions, serializeEndpointConditions);
        writer.writeObjectValue<Endpoint_deprecatedTopology>("deprecatedTopology", endpoint.deprecatedTopology, serializeEndpoint_deprecatedTopology);
        writer.writeObjectValue<EndpointHints>("hints", endpoint.hints, serializeEndpointHints);
        writer.writeStringValue("hostname", endpoint.hostname);
        writer.writeStringValue("nodeName", endpoint.nodeName);
        writer.writeObjectValue<ObjectReference>("targetRef", endpoint.targetRef, serializeObjectReference);
        writer.writeStringValue("zone", endpoint.zone);
        writer.writeAdditionalData(endpoint.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpoint_deprecatedTopology(writer: SerializationWriter, endpoint_deprecatedTopology: Partial<Endpoint_deprecatedTopology> | undefined | null = {}) : void {
    if (endpoint_deprecatedTopology) {
        writer.writeAdditionalData(endpoint_deprecatedTopology.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpointConditions(writer: SerializationWriter, endpointConditions: Partial<EndpointConditions> | undefined | null = {}) : void {
    if (endpointConditions) {
        writer.writeBooleanValue("ready", endpointConditions.ready);
        writer.writeBooleanValue("serving", endpointConditions.serving);
        writer.writeBooleanValue("terminating", endpointConditions.terminating);
        writer.writeAdditionalData(endpointConditions.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpointHints(writer: SerializationWriter, endpointHints: Partial<EndpointHints> | undefined | null = {}) : void {
    if (endpointHints) {
        writer.writeCollectionOfObjectValues<ForZone>("forZones", endpointHints.forZones, serializeForZone);
        writer.writeAdditionalData(endpointHints.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpointPort(writer: SerializationWriter, endpointPort: Partial<EndpointPort> | undefined | null = {}) : void {
    if (endpointPort) {
        writer.writeStringValue("appProtocol", endpointPort.appProtocol);
        writer.writeStringValue("name", endpointPort.name);
        writer.writeNumberValue("port", endpointPort.port);
        writer.writeStringValue("protocol", endpointPort.protocol);
        writer.writeAdditionalData(endpointPort.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpointSlice(writer: SerializationWriter, endpointSlice: Partial<EndpointSlice> | undefined | null = {}) : void {
    if (endpointSlice) {
        writer.writeStringValue("addressType", endpointSlice.addressType);
        writer.writeStringValue("apiVersion", endpointSlice.apiVersion);
        writer.writeCollectionOfObjectValues<Endpoint>("endpoints", endpointSlice.endpoints, serializeEndpoint);
        writer.writeStringValue("kind", endpointSlice.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", endpointSlice.metadata, serializeObjectMeta);
        writer.writeCollectionOfObjectValues<EndpointPort>("ports", endpointSlice.ports, serializeEndpointPort);
        writer.writeAdditionalData(endpointSlice.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEndpointSliceList(writer: SerializationWriter, endpointSliceList: Partial<EndpointSliceList> | undefined | null = {}) : void {
    if (endpointSliceList) {
        writer.writeStringValue("apiVersion", endpointSliceList.apiVersion);
        writer.writeCollectionOfObjectValues<EndpointSlice>("items", endpointSliceList.items, serializeEndpointSlice);
        writer.writeStringValue("kind", endpointSliceList.kind);
        writer.writeObjectValue<ListMeta>("metadata", endpointSliceList.metadata, serializeListMeta);
        writer.writeAdditionalData(endpointSliceList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeForZone(writer: SerializationWriter, forZone: Partial<ForZone> | undefined | null = {}) : void {
    if (forZone) {
        writer.writeStringValue("name", forZone.name);
        writer.writeAdditionalData(forZone.additionalData);
    }
}
/* tslint:enable */
/* eslint-enable */
