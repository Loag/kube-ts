/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { HorizontalpodautoscalersRequestBuilderNavigationMetadata, HorizontalpodautoscalersRequestBuilderRequestsMetadata, type HorizontalpodautoscalersRequestBuilder } from './horizontalpodautoscalers/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/autoscaling/v2/watch/namespaces/{namespace}
 */
export interface WithNamespaceItemRequestBuilder extends BaseRequestBuilder<WithNamespaceItemRequestBuilder> {
    /**
     * The horizontalpodautoscalers property
     */
    get horizontalpodautoscalers(): HorizontalpodautoscalersRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WithNamespaceItemRequestBuilderUriTemplate = "{+baseurl}/apis/autoscaling/v2/watch/namespaces/{namespace}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithNamespaceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithNamespaceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    horizontalpodautoscalers: {
        requestsMetadata: HorizontalpodautoscalersRequestBuilderRequestsMetadata,
        navigationMetadata: HorizontalpodautoscalersRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
