/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPodFromDiscriminatorValue, serializePod, type Pod } from '../../../../../../models/api/core/v1/index.js';
// @ts-ignore
import { serializeDeleteOptions, serializePatch, type DeleteOptions, type Patch } from '../../../../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { AttachRequestBuilderRequestsMetadata, type AttachRequestBuilder } from './attach/index.js';
// @ts-ignore
import { BindingRequestBuilderRequestsMetadata, type BindingRequestBuilder } from './binding/index.js';
// @ts-ignore
import { EphemeralcontainersRequestBuilderRequestsMetadata, type EphemeralcontainersRequestBuilder } from './ephemeralcontainers/index.js';
// @ts-ignore
import { EvictionRequestBuilderRequestsMetadata, type EvictionRequestBuilder } from './eviction/index.js';
// @ts-ignore
import { ExecRequestBuilderRequestsMetadata, type ExecRequestBuilder } from './exec/index.js';
// @ts-ignore
import { LogRequestBuilderRequestsMetadata, type LogRequestBuilder } from './log/index.js';
// @ts-ignore
import { PortforwardRequestBuilderRequestsMetadata, type PortforwardRequestBuilder } from './portforward/index.js';
// @ts-ignore
import { ProxyRequestBuilderNavigationMetadata, ProxyRequestBuilderRequestsMetadata, type ProxyRequestBuilder } from './proxy/index.js';
// @ts-ignore
import { ResizeRequestBuilderRequestsMetadata, type ResizeRequestBuilder } from './resize/index.js';
// @ts-ignore
import { StatusRequestBuilderRequestsMetadata, type StatusRequestBuilder } from './status/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/v1/namespaces/{namespace-id}/pods/{name}
 */
export interface WithNameItemRequestBuilder extends BaseRequestBuilder<WithNameItemRequestBuilder> {
    /**
     * The attach property
     */
    get attach(): AttachRequestBuilder;
    /**
     * The binding property
     */
    get binding(): BindingRequestBuilder;
    /**
     * The ephemeralcontainers property
     */
    get ephemeralcontainers(): EphemeralcontainersRequestBuilder;
    /**
     * The eviction property
     */
    get eviction(): EvictionRequestBuilder;
    /**
     * The exec property
     */
    get exec(): ExecRequestBuilder;
    /**
     * The log property
     */
    get log(): LogRequestBuilder;
    /**
     * The portforward property
     */
    get portforward(): PortforwardRequestBuilder;
    /**
     * The proxy property
     */
    get proxy(): ProxyRequestBuilder;
    /**
     * The resize property
     */
    get resize(): ResizeRequestBuilder;
    /**
     * The status property
     */
    get status(): StatusRequestBuilder;
    /**
     * delete a Pod
     * @param body DeleteOptions may be provided when deleting an API object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Pod>}
     */
     delete(body: DeleteOptions, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderDeleteQueryParameters> | undefined) : Promise<Pod | undefined>;
    /**
     * read the specified Pod
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Pod>}
     */
     get(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : Promise<Pod | undefined>;
    /**
     * partially update the specified Pod
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Pod>}
     */
     patch(body: Patch, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPatchQueryParameters> | undefined) : Promise<Pod | undefined>;
    /**
     * replace the specified Pod
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Pod>}
     */
     put(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPutQueryParameters> | undefined) : Promise<Pod | undefined>;
    /**
     * delete a Pod
     * @param body DeleteOptions may be provided when deleting an API object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(body: DeleteOptions, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * read the specified Pod
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * partially update the specified Pod
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Patch, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * replace the specified Pod
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * delete a Pod
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
 * read the specified Pod
 */
export interface WithNameItemRequestBuilderGetQueryParameters {
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
}
/**
 * partially update the specified Pod
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
 * replace the specified Pod
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
export const WithNameItemRequestBuilderUriTemplate = "{+baseurl}/api/v1/namespaces/{namespace%2Did}/pods/{name}{?dryRun*,fieldManager*,fieldValidation*,force*,gracePeriodSeconds*,ignoreStoreReadErrorWithClusterBreakingPotential*,orphanDependents*,pretty*,propagationPolicy*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithNameItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithNameItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    attach: {
        requestsMetadata: AttachRequestBuilderRequestsMetadata,
    },
    binding: {
        requestsMetadata: BindingRequestBuilderRequestsMetadata,
    },
    ephemeralcontainers: {
        requestsMetadata: EphemeralcontainersRequestBuilderRequestsMetadata,
    },
    eviction: {
        requestsMetadata: EvictionRequestBuilderRequestsMetadata,
    },
    exec: {
        requestsMetadata: ExecRequestBuilderRequestsMetadata,
    },
    log: {
        requestsMetadata: LogRequestBuilderRequestsMetadata,
    },
    portforward: {
        requestsMetadata: PortforwardRequestBuilderRequestsMetadata,
    },
    proxy: {
        requestsMetadata: ProxyRequestBuilderRequestsMetadata,
        navigationMetadata: ProxyRequestBuilderNavigationMetadata,
    },
    resize: {
        requestsMetadata: ResizeRequestBuilderRequestsMetadata,
    },
    status: {
        requestsMetadata: StatusRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WithNameItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createPodFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeleteOptions,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
    get: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createPodFromDiscriminatorValue,
    },
    patch: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createPodFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePatch,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
    put: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createPodFromDiscriminatorValue,
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/* tslint:enable */
/* eslint-enable */
