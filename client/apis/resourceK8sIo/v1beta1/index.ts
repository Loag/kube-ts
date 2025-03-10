/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIResourceListFromDiscriminatorValue, type APIResourceList } from '../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { DeviceclassesRequestBuilderNavigationMetadata, DeviceclassesRequestBuilderRequestsMetadata, type DeviceclassesRequestBuilder } from './deviceclasses/index.js';
// @ts-ignore
import { NamespacesRequestBuilderNavigationMetadata, type NamespacesRequestBuilder } from './namespaces/index.js';
// @ts-ignore
import { ResourceclaimsRequestBuilderRequestsMetadata, type ResourceclaimsRequestBuilder } from './resourceclaims/index.js';
// @ts-ignore
import { ResourceclaimtemplatesRequestBuilderRequestsMetadata, type ResourceclaimtemplatesRequestBuilder } from './resourceclaimtemplates/index.js';
// @ts-ignore
import { ResourceslicesRequestBuilderNavigationMetadata, ResourceslicesRequestBuilderRequestsMetadata, type ResourceslicesRequestBuilder } from './resourceslices/index.js';
// @ts-ignore
import { type WatchRequestBuilder, WatchRequestBuilderNavigationMetadata } from './watch/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/resource.k8s.io/v1beta1/
 */
export interface V1beta1RequestBuilder extends BaseRequestBuilder<V1beta1RequestBuilder> {
    /**
     * The deviceclasses property
     */
    get deviceclasses(): DeviceclassesRequestBuilder;
    /**
     * The namespaces property
     */
    get namespaces(): NamespacesRequestBuilder;
    /**
     * The resourceclaims property
     */
    get resourceclaims(): ResourceclaimsRequestBuilder;
    /**
     * The resourceclaimtemplates property
     */
    get resourceclaimtemplates(): ResourceclaimtemplatesRequestBuilder;
    /**
     * The resourceslices property
     */
    get resourceslices(): ResourceslicesRequestBuilder;
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
export const V1beta1RequestBuilderUriTemplate = "{+baseurl}/apis/resource.k8s.io/v1beta1/";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const V1beta1RequestBuilderNavigationMetadata: Record<Exclude<keyof V1beta1RequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deviceclasses: {
        requestsMetadata: DeviceclassesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceclassesRequestBuilderNavigationMetadata,
    },
    namespaces: {
        navigationMetadata: NamespacesRequestBuilderNavigationMetadata,
    },
    resourceclaims: {
        requestsMetadata: ResourceclaimsRequestBuilderRequestsMetadata,
    },
    resourceclaimtemplates: {
        requestsMetadata: ResourceclaimtemplatesRequestBuilderRequestsMetadata,
    },
    resourceslices: {
        requestsMetadata: ResourceslicesRequestBuilderRequestsMetadata,
        navigationMetadata: ResourceslicesRequestBuilderNavigationMetadata,
    },
    watch: {
        navigationMetadata: WatchRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const V1beta1RequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: V1beta1RequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIResourceListFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
