/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSubjectAccessReviewFromDiscriminatorValue, type SubjectAccessReview } from '../../../../models/api/authorization/v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/authorization.k8s.io/v1/subjectaccessreviews
 */
export interface SubjectaccessreviewsRequestBuilder extends BaseRequestBuilder<SubjectaccessreviewsRequestBuilder> {
    /**
     * create a SubjectAccessReview
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SubjectAccessReview>}
     */
     post(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<SubjectaccessreviewsRequestBuilderPostQueryParameters> | undefined) : Promise<SubjectAccessReview | undefined>;
    /**
     * create a SubjectAccessReview
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<SubjectaccessreviewsRequestBuilderPostQueryParameters> | undefined) : RequestInformation;
}
/**
 * create a SubjectAccessReview
 */
export interface SubjectaccessreviewsRequestBuilderPostQueryParameters {
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
export const SubjectaccessreviewsRequestBuilderUriTemplate = "{+baseurl}/apis/authorization.k8s.io/v1/subjectaccessreviews{?dryRun*,fieldManager*,fieldValidation*,pretty*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const SubjectaccessreviewsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SubjectaccessreviewsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createSubjectAccessReviewFromDiscriminatorValue,
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/* tslint:enable */
/* eslint-enable */
