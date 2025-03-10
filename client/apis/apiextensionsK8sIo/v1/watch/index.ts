/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CustomresourcedefinitionsRequestBuilderNavigationMetadata, CustomresourcedefinitionsRequestBuilderRequestsMetadata, type CustomresourcedefinitionsRequestBuilder } from './customresourcedefinitions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/apiextensions.k8s.io/v1/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The customresourcedefinitions property
     */
    get customresourcedefinitions(): CustomresourcedefinitionsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/apiextensions.k8s.io/v1/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    customresourcedefinitions: {
        requestsMetadata: CustomresourcedefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: CustomresourcedefinitionsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
