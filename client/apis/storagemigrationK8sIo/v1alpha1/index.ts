/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIResourceListFromDiscriminatorValue, type APIResourceList } from '../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { StorageversionmigrationsRequestBuilderNavigationMetadata, StorageversionmigrationsRequestBuilderRequestsMetadata, type StorageversionmigrationsRequestBuilder } from './storageversionmigrations/index.js';
// @ts-ignore
import { type WatchRequestBuilder, WatchRequestBuilderNavigationMetadata } from './watch/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/storagemigration.k8s.io/v1alpha1/
 */
export interface V1alpha1RequestBuilder extends BaseRequestBuilder<V1alpha1RequestBuilder> {
    /**
     * The storageversionmigrations property
     */
    get storageversionmigrations(): StorageversionmigrationsRequestBuilder;
    /**
     * The watch property
     */
    get watch(): WatchRequestBuilder;
    /**
     * get available resources
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<APIResourceList>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<APIResourceList | undefined>;
    /**
     * get available resources
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const V1alpha1RequestBuilderUriTemplate = "{+baseurl}/apis/storagemigration.k8s.io/v1alpha1/";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const V1alpha1RequestBuilderNavigationMetadata: Record<Exclude<keyof V1alpha1RequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    storageversionmigrations: {
        requestsMetadata: StorageversionmigrationsRequestBuilderRequestsMetadata,
        navigationMetadata: StorageversionmigrationsRequestBuilderNavigationMetadata,
    },
    watch: {
        navigationMetadata: WatchRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const V1alpha1RequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: V1alpha1RequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIResourceListFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
