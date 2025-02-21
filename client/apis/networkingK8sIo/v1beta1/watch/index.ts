/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { IpaddressesRequestBuilderNavigationMetadata, IpaddressesRequestBuilderRequestsMetadata, type IpaddressesRequestBuilder } from './ipaddresses/index.js';
// @ts-ignore
import { ServicecidrsRequestBuilderNavigationMetadata, ServicecidrsRequestBuilderRequestsMetadata, type ServicecidrsRequestBuilder } from './servicecidrs/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/networking.k8s.io/v1beta1/watch
 */
export interface WatchRequestBuilder extends BaseRequestBuilder<WatchRequestBuilder> {
    /**
     * The ipaddresses property
     */
    get ipaddresses(): IpaddressesRequestBuilder;
    /**
     * The servicecidrs property
     */
    get servicecidrs(): ServicecidrsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const WatchRequestBuilderUriTemplate = "{+baseurl}/apis/networking.k8s.io/v1beta1/watch";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WatchRequestBuilderNavigationMetadata: Record<Exclude<keyof WatchRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    ipaddresses: {
        requestsMetadata: IpaddressesRequestBuilderRequestsMetadata,
        navigationMetadata: IpaddressesRequestBuilderNavigationMetadata,
    },
    servicecidrs: {
        requestsMetadata: ServicecidrsRequestBuilderRequestsMetadata,
        navigationMetadata: ServicecidrsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
