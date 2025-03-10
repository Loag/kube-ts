/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIVersionsFromDiscriminatorValue, type APIVersions } from '../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type V1RequestBuilder, V1RequestBuilderNavigationMetadata, V1RequestBuilderRequestsMetadata } from './v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /api
 */
export interface ApiRequestBuilder extends BaseRequestBuilder<ApiRequestBuilder> {
    /**
     * The v1 property
     */
    get v1(): V1RequestBuilder;
    /**
     * get available API versions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<APIVersions>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<APIVersions | undefined>;
    /**
     * get available API versions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ApiRequestBuilderUriTemplate = "{+baseurl}/api";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApiRequestBuilderNavigationMetadata: Record<Exclude<keyof ApiRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    v1: {
        requestsMetadata: V1RequestBuilderRequestsMetadata,
        navigationMetadata: V1RequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApiRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApiRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIVersionsFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
