/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type WithNamespaceItemRequestBuilder, WithNamespaceItemRequestBuilderNavigationMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/autoscaling/v1/watch/namespaces
 */
export interface NamespacesRequestBuilder extends BaseRequestBuilder<NamespacesRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.apis.autoscaling.v1.watch.namespaces.item collection
     * @param namespace Unique identifier of the item
     * @returns {WithNamespaceItemRequestBuilder}
     */
     byNamespace(namespace: string) : WithNamespaceItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const NamespacesRequestBuilderUriTemplate = "{+baseurl}/apis/autoscaling/v1/watch/namespaces";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const NamespacesRequestBuilderNavigationMetadata: Record<Exclude<keyof NamespacesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byNamespace: {
        navigationMetadata: WithNamespaceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["namespace"],
    },
};
/* tslint:enable */
/* eslint-enable */
