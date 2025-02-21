/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { PriorityclassesRequestBuilderNavigationMetadata, PriorityclassesRequestBuilderRequestsMetadata, type PriorityclassesRequestBuilder } from './priorityclasses/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/scheduling.k8s.io/v1/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The priorityclasses property
     */
    get priorityclasses(): PriorityclassesRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/scheduling.k8s.io/v1/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    priorityclasses: {
        requestsMetadata: PriorityclassesRequestBuilderRequestsMetadata,
        navigationMetadata: PriorityclassesRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
