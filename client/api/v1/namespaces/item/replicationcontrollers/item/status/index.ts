/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createReplicationControllerFromDiscriminatorValue, serializeReplicationController, type ReplicationController } from '../../../../../../../models/api/core/v1/index.js';
// @ts-ignore
import { serializePatch, type Patch } from '../../../../../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api/v1/namespaces/{namespace-id}/replicationcontrollers/{name}/status
 */
export interface StatusRequestBuilder extends BaseRequestBuilder<StatusRequestBuilder> {
    /**
     * read status of the specified ReplicationController
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ReplicationController>}
     */
     get(requestConfiguration?: RequestConfiguration<StatusRequestBuilderGetQueryParameters> | undefined) : Promise<ReplicationController | undefined>;
    /**
     * partially update status of the specified ReplicationController
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ReplicationController>}
     */
     patch(body: Patch, requestConfiguration?: RequestConfiguration<StatusRequestBuilderPatchQueryParameters> | undefined) : Promise<ReplicationController | undefined>;
    /**
     * replace status of the specified ReplicationController
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ReplicationController>}
     */
     put(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<StatusRequestBuilderPutQueryParameters> | undefined) : Promise<ReplicationController | undefined>;
    /**
     * read status of the specified ReplicationController
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<StatusRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * partially update status of the specified ReplicationController
     * @param body Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Patch, requestConfiguration?: RequestConfiguration<StatusRequestBuilderPatchQueryParameters> | undefined) : RequestInformation;
    /**
     * replace status of the specified ReplicationController
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<StatusRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * read status of the specified ReplicationController
 */
export interface StatusRequestBuilderGetQueryParameters {
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
}
/**
 * partially update status of the specified ReplicationController
 */
export interface StatusRequestBuilderPatchQueryParameters {
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
 * replace status of the specified ReplicationController
 */
export interface StatusRequestBuilderPutQueryParameters {
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
export const StatusRequestBuilderUriTemplate = "{+baseurl}/api/v1/namespaces/{namespace%2Did}/replicationcontrollers/{name}/status{?dryRun*,fieldManager*,fieldValidation*,force*,pretty*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const StatusRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: StatusRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createReplicationControllerFromDiscriminatorValue,
    },
    patch: {
        uriTemplate: StatusRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createReplicationControllerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePatch,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
    put: {
        uriTemplate: StatusRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createReplicationControllerFromDiscriminatorValue,
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/* tslint:enable */
/* eslint-enable */
