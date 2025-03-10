/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { HorizontalpodautoscalersRequestBuilderRequestsMetadata, type HorizontalpodautoscalersRequestBuilder } from './horizontalpodautoscalers/index.js';
// @ts-ignore
import { NamespacesRequestBuilderNavigationMetadata, type NamespacesRequestBuilder } from './namespaces/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/autoscaling/v2/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The horizontalpodautoscalers property
     */
    get horizontalpodautoscalers(): HorizontalpodautoscalersRequestBuilder;
    /**
     * The namespaces property
     */
    get namespaces(): NamespacesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/autoscaling/v2/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    horizontalpodautoscalers: {
        requestsMetadata: HorizontalpodautoscalersRequestBuilderRequestsMetadata,
    },
    namespaces: {
        navigationMetadata: NamespacesRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
