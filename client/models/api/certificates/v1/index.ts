/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListMetaFromDiscriminatorValue, createObjectMetaFromDiscriminatorValue, serializeListMeta, serializeObjectMeta, type ListMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.Kubelets use this API to obtain: 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName). 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 */
export interface CertificateSigningRequest extends AdditionalDataHolder, Parsable {
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
     * CertificateSigningRequestSpec contains the certificate request.
     */
    spec?: CertificateSigningRequestSpec | null;
    /**
     * CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate.
     */
    status?: CertificateSigningRequestStatus | null;
}
/**
 * CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
 */
export interface CertificateSigningRequestCondition extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    lastTransitionTime?: Date | null;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    lastUpdateTime?: Date | null;
    /**
     * message contains a human readable message with details about the request state
     */
    message?: string | null;
    /**
     * reason indicates a brief reason for the request state
     */
    reason?: string | null;
    /**
     * status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown".
     */
    status?: string | null;
    /**
     * type of the condition. Known conditions are "Approved", "Denied", and "Failed".An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.Only one condition of a given type is allowed.
     */
    type?: string | null;
}
/**
 * CertificateSigningRequestList is a collection of CertificateSigningRequest objects
 */
export interface CertificateSigningRequestList extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * items is a collection of CertificateSigningRequest objects
     */
    items?: CertificateSigningRequest[] | null;
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
 * CertificateSigningRequestSpec contains the certificate request.
 */
export interface CertificateSigningRequestSpec extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * expirationSeconds is the requested duration of validity of the issued certificate. The certificate signer may issue a certificate with a different validity duration so a client must check the delta between the notBefore and and notAfter fields in the issued certificate to determine the actual duration.The v1.22+ in-tree implementations of the well-known Kubernetes signers will honor this field as long as the requested duration is not greater than the maximum duration they will honor per the --cluster-signing-duration CLI flag to the Kubernetes controller manager.Certificate signers may not honor this field for various reasons:  1. Old signer that is unaware of the field (such as the in-tree     implementations prior to v1.22)  2. Signer whose configured maximum is shorter than the requested duration  3. Signer whose configured minimum is longer than the requested durationThe minimum valid value for expirationSeconds is 600, i.e. 10 minutes.
     */
    expirationSeconds?: number | null;
    /**
     * extra contains extra attributes of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
     */
    extra?: CertificateSigningRequestSpec_extra | null;
    /**
     * groups contains group membership of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
     */
    groups?: string[] | null;
    /**
     * request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded.
     */
    request?: string | null;
    /**
     * signerName indicates the requested signer, and is a qualified name.List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.Well-known Kubernetes signers are: 1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.  Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager. 2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.  Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager. 3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.  Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signersCustom signerNames can also be specified. The signer defines: 1. Trust distribution: how trust (CA bundles) are distributed. 2. Permitted subjects: and behavior when a disallowed subject is requested. 3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested. 4. Required, permitted, or forbidden key usages / extended key usages. 5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin. 6. Whether or not requests for CA certificates are allowed.
     */
    signerName?: string | null;
    /**
     * uid contains the uid of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
     */
    uid?: string | null;
    /**
     * usages specifies a set of key usages requested in the issued certificate.Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".Valid values are: "signing", "digital signature", "content commitment", "key encipherment", "key agreement", "data encipherment", "cert sign", "crl sign", "encipher only", "decipher only", "any", "server auth", "client auth", "code signing", "email protection", "s/mime", "ipsec end system", "ipsec tunnel", "ipsec user", "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"
     */
    usages?: string[] | null;
    /**
     * username contains the name of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
     */
    username?: string | null;
}
/**
 * extra contains extra attributes of the user that created the CertificateSigningRequest. Populated by the API server on creation and immutable.
 */
export interface CertificateSigningRequestSpec_extra extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/**
 * CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate.
 */
export interface CertificateSigningRequestStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * certificate is populated with an issued certificate by the signer after an Approved condition is present. This field is set via the /status subresource. Once populated, this field is immutable.If the certificate signing request is denied, a condition of type "Denied" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type "Failed" is added and this field remains empty.Validation requirements: 1. certificate must contain one or more PEM blocks. 2. All PEM blocks must have the "CERTIFICATE" label, contain no headers, and the encoded data  must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280. 3. Non-PEM content may appear before or after the "CERTIFICATE" PEM blocks and is unvalidated,  to allow for explanatory text as described in section 5.2 of RFC7468.If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.The certificate is encoded in PEM format.When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:    base64(    -----BEGIN CERTIFICATE-----    ...    -----END CERTIFICATE-----    )
     */
    certificate?: string | null;
    /**
     * conditions applied to the request. Known conditions are "Approved", "Denied", and "Failed".
     */
    conditions?: CertificateSigningRequestCondition[] | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequestCondition}
 */
// @ts-ignore
export function createCertificateSigningRequestConditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequestCondition;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequest}
 */
// @ts-ignore
export function createCertificateSigningRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequestList}
 */
// @ts-ignore
export function createCertificateSigningRequestListFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequestList;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequestSpec_extra}
 */
// @ts-ignore
export function createCertificateSigningRequestSpec_extraFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequestSpec_extra;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequestSpec}
 */
// @ts-ignore
export function createCertificateSigningRequestSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequestSpec;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CertificateSigningRequestStatus}
 */
// @ts-ignore
export function createCertificateSigningRequestStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCertificateSigningRequestStatus;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequest(certificateSigningRequest: Partial<CertificateSigningRequest> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { certificateSigningRequest.apiVersion = n.getStringValue(); },
        "kind": n => { certificateSigningRequest.kind = n.getStringValue(); },
        "metadata": n => { certificateSigningRequest.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { certificateSigningRequest.spec = n.getObjectValue<CertificateSigningRequestSpec>(createCertificateSigningRequestSpecFromDiscriminatorValue); },
        "status": n => { certificateSigningRequest.status = n.getObjectValue<CertificateSigningRequestStatus>(createCertificateSigningRequestStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequestCondition(certificateSigningRequestCondition: Partial<CertificateSigningRequestCondition> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastTransitionTime": n => { certificateSigningRequestCondition.lastTransitionTime = n.getDateValue(); },
        "lastUpdateTime": n => { certificateSigningRequestCondition.lastUpdateTime = n.getDateValue(); },
        "message": n => { certificateSigningRequestCondition.message = n.getStringValue(); },
        "reason": n => { certificateSigningRequestCondition.reason = n.getStringValue(); },
        "status": n => { certificateSigningRequestCondition.status = n.getStringValue(); },
        "type": n => { certificateSigningRequestCondition.type = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequestList(certificateSigningRequestList: Partial<CertificateSigningRequestList> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { certificateSigningRequestList.apiVersion = n.getStringValue(); },
        "items": n => { certificateSigningRequestList.items = n.getCollectionOfObjectValues<CertificateSigningRequest>(createCertificateSigningRequestFromDiscriminatorValue); },
        "kind": n => { certificateSigningRequestList.kind = n.getStringValue(); },
        "metadata": n => { certificateSigningRequestList.metadata = n.getObjectValue<ListMeta>(createListMetaFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequestSpec(certificateSigningRequestSpec: Partial<CertificateSigningRequestSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationSeconds": n => { certificateSigningRequestSpec.expirationSeconds = n.getNumberValue(); },
        "extra": n => { certificateSigningRequestSpec.extra = n.getObjectValue<CertificateSigningRequestSpec_extra>(createCertificateSigningRequestSpec_extraFromDiscriminatorValue); },
        "groups": n => { certificateSigningRequestSpec.groups = n.getCollectionOfPrimitiveValues<string>(); },
        "request": n => { certificateSigningRequestSpec.request = n.getStringValue(); },
        "signerName": n => { certificateSigningRequestSpec.signerName = n.getStringValue(); },
        "uid": n => { certificateSigningRequestSpec.uid = n.getStringValue(); },
        "usages": n => { certificateSigningRequestSpec.usages = n.getCollectionOfPrimitiveValues<string>(); },
        "username": n => { certificateSigningRequestSpec.username = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequestSpec_extra(certificateSigningRequestSpec_extra: Partial<CertificateSigningRequestSpec_extra> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCertificateSigningRequestStatus(certificateSigningRequestStatus: Partial<CertificateSigningRequestStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "certificate": n => { certificateSigningRequestStatus.certificate = n.getStringValue(); },
        "conditions": n => { certificateSigningRequestStatus.conditions = n.getCollectionOfObjectValues<CertificateSigningRequestCondition>(createCertificateSigningRequestConditionFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequest(writer: SerializationWriter, certificateSigningRequest: Partial<CertificateSigningRequest> | undefined | null = {}) : void {
    if (certificateSigningRequest) {
        writer.writeStringValue("apiVersion", certificateSigningRequest.apiVersion);
        writer.writeStringValue("kind", certificateSigningRequest.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", certificateSigningRequest.metadata, serializeObjectMeta);
        writer.writeObjectValue<CertificateSigningRequestSpec>("spec", certificateSigningRequest.spec, serializeCertificateSigningRequestSpec);
        writer.writeObjectValue<CertificateSigningRequestStatus>("status", certificateSigningRequest.status, serializeCertificateSigningRequestStatus);
        writer.writeAdditionalData(certificateSigningRequest.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequestCondition(writer: SerializationWriter, certificateSigningRequestCondition: Partial<CertificateSigningRequestCondition> | undefined | null = {}) : void {
    if (certificateSigningRequestCondition) {
        writer.writeDateValue("lastTransitionTime", certificateSigningRequestCondition.lastTransitionTime);
        writer.writeDateValue("lastUpdateTime", certificateSigningRequestCondition.lastUpdateTime);
        writer.writeStringValue("message", certificateSigningRequestCondition.message);
        writer.writeStringValue("reason", certificateSigningRequestCondition.reason);
        writer.writeStringValue("status", certificateSigningRequestCondition.status);
        writer.writeStringValue("type", certificateSigningRequestCondition.type);
        writer.writeAdditionalData(certificateSigningRequestCondition.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequestList(writer: SerializationWriter, certificateSigningRequestList: Partial<CertificateSigningRequestList> | undefined | null = {}) : void {
    if (certificateSigningRequestList) {
        writer.writeStringValue("apiVersion", certificateSigningRequestList.apiVersion);
        writer.writeCollectionOfObjectValues<CertificateSigningRequest>("items", certificateSigningRequestList.items, serializeCertificateSigningRequest);
        writer.writeStringValue("kind", certificateSigningRequestList.kind);
        writer.writeObjectValue<ListMeta>("metadata", certificateSigningRequestList.metadata, serializeListMeta);
        writer.writeAdditionalData(certificateSigningRequestList.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequestSpec(writer: SerializationWriter, certificateSigningRequestSpec: Partial<CertificateSigningRequestSpec> | undefined | null = {}) : void {
    if (certificateSigningRequestSpec) {
        writer.writeNumberValue("expirationSeconds", certificateSigningRequestSpec.expirationSeconds);
        writer.writeObjectValue<CertificateSigningRequestSpec_extra>("extra", certificateSigningRequestSpec.extra, serializeCertificateSigningRequestSpec_extra);
        writer.writeCollectionOfPrimitiveValues<string>("groups", certificateSigningRequestSpec.groups);
        writer.writeStringValue("request", certificateSigningRequestSpec.request);
        writer.writeStringValue("signerName", certificateSigningRequestSpec.signerName);
        writer.writeStringValue("uid", certificateSigningRequestSpec.uid);
        writer.writeCollectionOfPrimitiveValues<string>("usages", certificateSigningRequestSpec.usages);
        writer.writeStringValue("username", certificateSigningRequestSpec.username);
        writer.writeAdditionalData(certificateSigningRequestSpec.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequestSpec_extra(writer: SerializationWriter, certificateSigningRequestSpec_extra: Partial<CertificateSigningRequestSpec_extra> | undefined | null = {}) : void {
    if (certificateSigningRequestSpec_extra) {
        writer.writeAdditionalData(certificateSigningRequestSpec_extra.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCertificateSigningRequestStatus(writer: SerializationWriter, certificateSigningRequestStatus: Partial<CertificateSigningRequestStatus> | undefined | null = {}) : void {
    if (certificateSigningRequestStatus) {
        writer.writeStringValue("certificate", certificateSigningRequestStatus.certificate);
        writer.writeCollectionOfObjectValues<CertificateSigningRequestCondition>("conditions", certificateSigningRequestStatus.conditions, serializeCertificateSigningRequestCondition);
        writer.writeAdditionalData(certificateSigningRequestStatus.additionalData);
    }
}
/* tslint:enable */
/* eslint-enable */
