/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMutatingAdmissionPolicyFromDiscriminatorValue, serializeMutatingAdmissionPolicy, type MutatingAdmissionPolicy } from '../../../../../models/api/admissionregistration/v1alpha1/index.js';
// @ts-ignore
import { createStatusFromDiscriminatorValue, serializeDeleteOptions, serializePatch, serializeStatus, type DeleteOptions, type Patch, type Status } from '../../../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicies/{name}
 */
export interface WithNameItemRequestBuilder extends BaseRequestBuilder<WithNameItemRequestBuilder> {
    /**
     * delete a MutatingAdmissionPolicy
     * @param body DeleteOptions may be provided when deleting an API object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Status>}
     */
     delete(body: DeleteOptions, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderDeleteQueryParameters> | undefined) : Promise<Status | undefined>;
    /**
     * read the specified MutatingAdmissionPolicy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MutatingAdmissionPolicy>}
     */
     get(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : Promise<MutatingAdmissionPolicy | undefined>;
    /**
     * partially update the specified MutatingAdmissionPolicy
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MutatingAdmissionPolicy>}
     */
     patch(body: Patch, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPatchQueryParameters> | undefined) : Promise<MutatingAdmissionPolicy | undefined>;
    /**
     * replace the specified MutatingAdmissionPolicy
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MutatingAdmissionPolicy>}
     */
     put(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPutQueryParameters> | undefined) : Promise<MutatingAdmissionPolicy | undefined>;
    /**
     * delete a MutatingAdmissionPolicy
     * @param body DeleteOptions may be provided when deleting an API object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(body: DeleteOptions, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * read the specified MutatingAdmissionPolicy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * partially update the specified MutatingAdmissionPolicy
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Patch, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * replace the specified MutatingAdmissionPolicy
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * delete a MutatingAdmissionPolicy
 */
export interface WithNameItemRequestBuilderDeleteQueryParameters {
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     */
    dryRun?: string;
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     */
    gracePeriodSeconds?: number;
    /**
     * if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
     */
    ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
     */
    orphanDependents?: boolean;
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
     */
    propagationPolicy?: string;
}
/**
 * read the specified MutatingAdmissionPolicy
 */
export interface WithNameItemRequestBuilderGetQueryParameters {
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
}
/**
 * partially update the specified MutatingAdmissionPolicy
 */
export interface WithNameItemRequestBuilderPatchQueryParameters {
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     */
    dryRun?: string;
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     */
    fieldManager?: string;
    /**
     * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     */
    fieldValidation?: string;
    /**
     * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    force?: boolean;
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
}
/**
 * replace the specified MutatingAdmissionPolicy
 */
export interface WithNameItemRequestBuilderPutQueryParameters {
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     */
    dryRun?: string;
    /**
     * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    fieldManager?: string;
    /**
     * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
     */
    fieldValidation?: string;
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
}
/**
 * Uri template for the request builder.
 */
export const WithNameItemRequestBuilderUriTemplate = "{+baseurl}/apis/admissionregistration.k8s.io/v1alpha1/mutatingadmissionpolicies/{name}{?dryRun*,fieldManager*,fieldValidation*,force*,gracePeriodSeconds*,ignoreStoreReadErrorWithClusterBreakingPotential*,orphanDependents*,pretty*,propagationPolicy*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const WithNameItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createStatusFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeleteOptions,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
    get: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createMutatingAdmissionPolicyFromDiscriminatorValue,
    },
    patch: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createMutatingAdmissionPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePatch,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
    put: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createMutatingAdmissionPolicyFromDiscriminatorValue,
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/* tslint:enable */
/* eslint-enable */
