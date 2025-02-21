/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { EndpointslicesRequestBuilderNavigationMetadata, EndpointslicesRequestBuilderRequestsMetadata, type EndpointslicesRequestBuilder } from './endpointslices/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/discovery.k8s.io/v1/watch/namespaces/{namespace}
 */
export interface WithNamespaceItemRequestBuilder extends BaseRequestBuilder<WithNamespaceItemRequestBuilder> {
    /**
     * The endpointslices property
     */
    get endpointslices(): EndpointslicesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WithNamespaceItemRequestBuilderUriTemplate = "{+baseurl}/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithNamespaceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithNamespaceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    endpointslices: {
        requestsMetadata: EndpointslicesRequestBuilderRequestsMetadata,
        navigationMetadata: EndpointslicesRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
