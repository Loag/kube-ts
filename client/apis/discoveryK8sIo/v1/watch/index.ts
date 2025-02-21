/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { EndpointslicesRequestBuilderRequestsMetadata, type EndpointslicesRequestBuilder } from './endpointslices/index.js';
// @ts-ignore
import { NamespacesRequestBuilderNavigationMetadata, type NamespacesRequestBuilder } from './namespaces/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/discovery.k8s.io/v1/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The endpointslices property
     */
    get endpointslices(): EndpointslicesRequestBuilder;
    /**
     * The namespaces property
     */
    get namespaces(): NamespacesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/discovery.k8s.io/v1/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    endpointslices: {
        requestsMetadata: EndpointslicesRequestBuilderRequestsMetadata,
    },
    namespaces: {
        navigationMetadata: NamespacesRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
