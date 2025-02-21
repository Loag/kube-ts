/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { StorageversionsRequestBuilderNavigationMetadata, StorageversionsRequestBuilderRequestsMetadata, type StorageversionsRequestBuilder } from './storageversions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/internal.apiserver.k8s.io/v1alpha1/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The storageversions property
     */
    get storageversions(): StorageversionsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/internal.apiserver.k8s.io/v1alpha1/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    storageversions: {
        requestsMetadata: StorageversionsRequestBuilderRequestsMetadata,
        navigationMetadata: StorageversionsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
