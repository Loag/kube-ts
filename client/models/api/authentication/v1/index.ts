/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createObjectMetaFromDiscriminatorValue, serializeObjectMeta, type ObjectMeta } from '../../../apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface BoundObjectReference extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * API version of the referent.
     */
    apiVersion?: string | null;
    /**
     * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
     */
    kind?: string | null;
    /**
     * Name of the referent.
     */
    name?: string | null;
    /**
     * UID of the referent.
     */
    uid?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {BoundObjectReference}
 */
// @ts-ignore
export function createBoundObjectReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBoundObjectReference;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SelfSubjectReview}
 */
// @ts-ignore
export function createSelfSubjectReviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSelfSubjectReview;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SelfSubjectReviewStatus}
 */
// @ts-ignore
export function createSelfSubjectReviewStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSelfSubjectReviewStatus;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenRequest}
 */
// @ts-ignore
export function createTokenRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenRequest;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenRequestSpec}
 */
// @ts-ignore
export function createTokenRequestSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenRequestSpec;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenRequestStatus}
 */
// @ts-ignore
export function createTokenRequestStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenRequestStatus;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenReview}
 */
// @ts-ignore
export function createTokenReviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenReview;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenReviewSpec}
 */
// @ts-ignore
export function createTokenReviewSpecFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenReviewSpec;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {TokenReviewStatus}
 */
// @ts-ignore
export function createTokenReviewStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTokenReviewStatus;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInfo_extra}
 */
// @ts-ignore
export function createUserInfo_extraFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUserInfo_extra;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UserInfo}
 */
// @ts-ignore
export function createUserInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUserInfo;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoBoundObjectReference(boundObjectReference: Partial<BoundObjectReference> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { boundObjectReference.apiVersion = n.getStringValue(); },
        "kind": n => { boundObjectReference.kind = n.getStringValue(); },
        "name": n => { boundObjectReference.name = n.getStringValue(); },
        "uid": n => { boundObjectReference.uid = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSelfSubjectReview(selfSubjectReview: Partial<SelfSubjectReview> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { selfSubjectReview.apiVersion = n.getStringValue(); },
        "kind": n => { selfSubjectReview.kind = n.getStringValue(); },
        "metadata": n => { selfSubjectReview.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "status": n => { selfSubjectReview.status = n.getObjectValue<SelfSubjectReviewStatus>(createSelfSubjectReviewStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSelfSubjectReviewStatus(selfSubjectReviewStatus: Partial<SelfSubjectReviewStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "userInfo": n => { selfSubjectReviewStatus.userInfo = n.getObjectValue<UserInfo>(createUserInfoFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenRequest(tokenRequest: Partial<TokenRequest> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { tokenRequest.apiVersion = n.getStringValue(); },
        "kind": n => { tokenRequest.kind = n.getStringValue(); },
        "metadata": n => { tokenRequest.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { tokenRequest.spec = n.getObjectValue<TokenRequestSpec>(createTokenRequestSpecFromDiscriminatorValue); },
        "status": n => { tokenRequest.status = n.getObjectValue<TokenRequestStatus>(createTokenRequestStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenRequestSpec(tokenRequestSpec: Partial<TokenRequestSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audiences": n => { tokenRequestSpec.audiences = n.getCollectionOfPrimitiveValues<string>(); },
        "boundObjectRef": n => { tokenRequestSpec.boundObjectRef = n.getObjectValue<BoundObjectReference>(createBoundObjectReferenceFromDiscriminatorValue); },
        "expirationSeconds": n => { tokenRequestSpec.expirationSeconds = n.getNumberValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenRequestStatus(tokenRequestStatus: Partial<TokenRequestStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationTimestamp": n => { tokenRequestStatus.expirationTimestamp = n.getDateValue(); },
        "token": n => { tokenRequestStatus.token = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenReview(tokenReview: Partial<TokenReview> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "apiVersion": n => { tokenReview.apiVersion = n.getStringValue(); },
        "kind": n => { tokenReview.kind = n.getStringValue(); },
        "metadata": n => { tokenReview.metadata = n.getObjectValue<ObjectMeta>(createObjectMetaFromDiscriminatorValue); },
        "spec": n => { tokenReview.spec = n.getObjectValue<TokenReviewSpec>(createTokenReviewSpecFromDiscriminatorValue); },
        "status": n => { tokenReview.status = n.getObjectValue<TokenReviewStatus>(createTokenReviewStatusFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenReviewSpec(tokenReviewSpec: Partial<TokenReviewSpec> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audiences": n => { tokenReviewSpec.audiences = n.getCollectionOfPrimitiveValues<string>(); },
        "token": n => { tokenReviewSpec.token = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoTokenReviewStatus(tokenReviewStatus: Partial<TokenReviewStatus> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "audiences": n => { tokenReviewStatus.audiences = n.getCollectionOfPrimitiveValues<string>(); },
        "authenticated": n => { tokenReviewStatus.authenticated = n.getBooleanValue(); },
        "error": n => { tokenReviewStatus.errorEscaped = n.getStringValue(); },
        "user": n => { tokenReviewStatus.user = n.getObjectValue<UserInfo>(createUserInfoFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUserInfo(userInfo: Partial<UserInfo> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "extra": n => { userInfo.extra = n.getObjectValue<UserInfo_extra>(createUserInfo_extraFromDiscriminatorValue); },
        "groups": n => { userInfo.groups = n.getCollectionOfPrimitiveValues<string>(); },
        "uid": n => { userInfo.uid = n.getStringValue(); },
        "username": n => { userInfo.username = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUserInfo_extra(userInfo_extra: Partial<UserInfo_extra> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
/**
 * SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
 */
export interface SelfSubjectReview extends AdditionalDataHolder, Parsable {
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
     * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
     */
    status?: SelfSubjectReviewStatus | null;
}
/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export interface SelfSubjectReviewStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * UserInfo holds the information about the user needed to implement the user.Info interface.
     */
    userInfo?: UserInfo | null;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeBoundObjectReference(writer: SerializationWriter, boundObjectReference: Partial<BoundObjectReference> | undefined | null = {}) : void {
    if (boundObjectReference) {
        writer.writeStringValue("apiVersion", boundObjectReference.apiVersion);
        writer.writeStringValue("kind", boundObjectReference.kind);
        writer.writeStringValue("name", boundObjectReference.name);
        writer.writeStringValue("uid", boundObjectReference.uid);
        writer.writeAdditionalData(boundObjectReference.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSelfSubjectReview(writer: SerializationWriter, selfSubjectReview: Partial<SelfSubjectReview> | undefined | null = {}) : void {
    if (selfSubjectReview) {
        writer.writeStringValue("apiVersion", selfSubjectReview.apiVersion);
        writer.writeStringValue("kind", selfSubjectReview.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", selfSubjectReview.metadata, serializeObjectMeta);
        writer.writeObjectValue<SelfSubjectReviewStatus>("status", selfSubjectReview.status, serializeSelfSubjectReviewStatus);
        writer.writeAdditionalData(selfSubjectReview.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSelfSubjectReviewStatus(writer: SerializationWriter, selfSubjectReviewStatus: Partial<SelfSubjectReviewStatus> | undefined | null = {}) : void {
    if (selfSubjectReviewStatus) {
        writer.writeObjectValue<UserInfo>("userInfo", selfSubjectReviewStatus.userInfo, serializeUserInfo);
        writer.writeAdditionalData(selfSubjectReviewStatus.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenRequest(writer: SerializationWriter, tokenRequest: Partial<TokenRequest> | undefined | null = {}) : void {
    if (tokenRequest) {
        writer.writeStringValue("apiVersion", tokenRequest.apiVersion);
        writer.writeStringValue("kind", tokenRequest.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", tokenRequest.metadata, serializeObjectMeta);
        writer.writeObjectValue<TokenRequestSpec>("spec", tokenRequest.spec, serializeTokenRequestSpec);
        writer.writeObjectValue<TokenRequestStatus>("status", tokenRequest.status, serializeTokenRequestStatus);
        writer.writeAdditionalData(tokenRequest.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenRequestSpec(writer: SerializationWriter, tokenRequestSpec: Partial<TokenRequestSpec> | undefined | null = {}) : void {
    if (tokenRequestSpec) {
        writer.writeCollectionOfPrimitiveValues<string>("audiences", tokenRequestSpec.audiences);
        writer.writeObjectValue<BoundObjectReference>("boundObjectRef", tokenRequestSpec.boundObjectRef, serializeBoundObjectReference);
        writer.writeNumberValue("expirationSeconds", tokenRequestSpec.expirationSeconds);
        writer.writeAdditionalData(tokenRequestSpec.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenRequestStatus(writer: SerializationWriter, tokenRequestStatus: Partial<TokenRequestStatus> | undefined | null = {}) : void {
    if (tokenRequestStatus) {
        writer.writeDateValue("expirationTimestamp", tokenRequestStatus.expirationTimestamp);
        writer.writeStringValue("token", tokenRequestStatus.token);
        writer.writeAdditionalData(tokenRequestStatus.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenReview(writer: SerializationWriter, tokenReview: Partial<TokenReview> | undefined | null = {}) : void {
    if (tokenReview) {
        writer.writeStringValue("apiVersion", tokenReview.apiVersion);
        writer.writeStringValue("kind", tokenReview.kind);
        writer.writeObjectValue<ObjectMeta>("metadata", tokenReview.metadata, serializeObjectMeta);
        writer.writeObjectValue<TokenReviewSpec>("spec", tokenReview.spec, serializeTokenReviewSpec);
        writer.writeObjectValue<TokenReviewStatus>("status", tokenReview.status, serializeTokenReviewStatus);
        writer.writeAdditionalData(tokenReview.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenReviewSpec(writer: SerializationWriter, tokenReviewSpec: Partial<TokenReviewSpec> | undefined | null = {}) : void {
    if (tokenReviewSpec) {
        writer.writeCollectionOfPrimitiveValues<string>("audiences", tokenReviewSpec.audiences);
        writer.writeStringValue("token", tokenReviewSpec.token);
        writer.writeAdditionalData(tokenReviewSpec.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeTokenReviewStatus(writer: SerializationWriter, tokenReviewStatus: Partial<TokenReviewStatus> | undefined | null = {}) : void {
    if (tokenReviewStatus) {
        writer.writeCollectionOfPrimitiveValues<string>("audiences", tokenReviewStatus.audiences);
        writer.writeBooleanValue("authenticated", tokenReviewStatus.authenticated);
        writer.writeStringValue("error", tokenReviewStatus.errorEscaped);
        writer.writeObjectValue<UserInfo>("user", tokenReviewStatus.user, serializeUserInfo);
        writer.writeAdditionalData(tokenReviewStatus.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUserInfo(writer: SerializationWriter, userInfo: Partial<UserInfo> | undefined | null = {}) : void {
    if (userInfo) {
        writer.writeObjectValue<UserInfo_extra>("extra", userInfo.extra, serializeUserInfo_extra);
        writer.writeCollectionOfPrimitiveValues<string>("groups", userInfo.groups);
        writer.writeStringValue("uid", userInfo.uid);
        writer.writeStringValue("username", userInfo.username);
        writer.writeAdditionalData(userInfo.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUserInfo_extra(writer: SerializationWriter, userInfo_extra: Partial<UserInfo_extra> | undefined | null = {}) : void {
    if (userInfo_extra) {
        writer.writeAdditionalData(userInfo_extra.additionalData);
    }
}
/**
 * TokenRequest requests a token for a given service account.
 */
export interface TokenRequest extends AdditionalDataHolder, Parsable {
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
     * TokenRequestSpec contains client provided parameters of a token request.
     */
    spec?: TokenRequestSpec | null;
    /**
     * TokenRequestStatus is the result of a token request.
     */
    status?: TokenRequestStatus | null;
}
/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export interface TokenRequestSpec extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Audiences are the intendend audiences of the token. A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
     */
    audiences?: string[] | null;
    /**
     * BoundObjectReference is a reference to an object that a token is bound to.
     */
    boundObjectRef?: BoundObjectReference | null;
    /**
     * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
     */
    expirationSeconds?: number | null;
}
/**
 * TokenRequestStatus is the result of a token request.
 */
export interface TokenRequestStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    expirationTimestamp?: Date | null;
    /**
     * Token is the opaque bearer token.
     */
    token?: string | null;
}
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface TokenReview extends AdditionalDataHolder, Parsable {
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
     * TokenReviewSpec is a description of the token authentication request.
     */
    spec?: TokenReviewSpec | null;
    /**
     * TokenReviewStatus is the result of the token authentication request.
     */
    status?: TokenReviewStatus | null;
}
/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface TokenReviewSpec extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
     */
    audiences?: string[] | null;
    /**
     * Token is the opaque bearer token.
     */
    token?: string | null;
}
/**
 * TokenReviewStatus is the result of the token authentication request.
 */
export interface TokenReviewStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token's audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is "true", the token is valid against the audience of the Kubernetes API server.
     */
    audiences?: string[] | null;
    /**
     * Authenticated indicates that the token was associated with a known user.
     */
    authenticated?: boolean | null;
    /**
     * Error indicates that the token couldn't be checked
     */
    errorEscaped?: string | null;
    /**
     * UserInfo holds the information about the user needed to implement the user.Info interface.
     */
    user?: UserInfo | null;
}
/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface UserInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Any additional information provided by the authenticator.
     */
    extra?: UserInfo_extra | null;
    /**
     * The names of groups this user is a part of.
     */
    groups?: string[] | null;
    /**
     * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
     */
    uid?: string | null;
    /**
     * The name that uniquely identifies this user among all active users.
     */
    username?: string | null;
}
/**
 * Any additional information provided by the authenticator.
 */
export interface UserInfo_extra extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
}
/* tslint:enable */
/* eslint-enable */
