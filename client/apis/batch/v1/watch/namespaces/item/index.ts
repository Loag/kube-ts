/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CronjobsRequestBuilderNavigationMetadata, CronjobsRequestBuilderRequestsMetadata, type CronjobsRequestBuilder } from './cronjobs/index.js';
// @ts-ignore
import { JobsRequestBuilderNavigationMetadata, JobsRequestBuilderRequestsMetadata, type JobsRequestBuilder } from './jobs/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/batch/v1/watch/namespaces/{namespace}
 */
export interface WithNamespaceItemRequestBuilder extends BaseRequestBuilder<WithNamespaceItemRequestBuilder> {
    /**
     * The cronjobs property
     */
    get cronjobs(): CronjobsRequestBuilder;
    /**
     * The jobs property
     */
    get jobs(): JobsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WithNamespaceItemRequestBuilderUriTemplate = "{+baseurl}/apis/batch/v1/watch/namespaces/{namespace}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WithNamespaceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WithNamespaceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    cronjobs: {
        requestsMetadata: CronjobsRequestBuilderRequestsMetadata,
        navigationMetadata: CronjobsRequestBuilderNavigationMetadata,
    },
    jobs: {
        requestsMetadata: JobsRequestBuilderRequestsMetadata,
        navigationMetadata: JobsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
