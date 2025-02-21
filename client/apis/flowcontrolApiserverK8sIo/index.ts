/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIGroupFromDiscriminatorValue, type APIGroup } from '../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type V1RequestBuilder, V1RequestBuilderNavigationMetadata, V1RequestBuilderRequestsMetadata } from './v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/flowcontrol.apiserver.k8s.io/
 */
export interface FlowcontrolApiserverK8sIoRequestBuilder extends BaseRequestBuilder<FlowcontrolApiserverK8sIoRequestBuilder> {
    /**
     * The v1 property
     */
    get v1(): V1RequestBuilder;
    /**
     * get information of a group
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<APIGroup>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<APIGroup | undefined>;
    /**
     * get information of a group
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const FlowcontrolApiserverK8sIoRequestBuilderUriTemplate = "{+baseurl}/apis/flowcontrol.apiserver.k8s.io/";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FlowcontrolApiserverK8sIoRequestBuilderNavigationMetadata: Record<Exclude<keyof FlowcontrolApiserverK8sIoRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    v1: {
        requestsMetadata: V1RequestBuilderRequestsMetadata,
        navigationMetadata: V1RequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FlowcontrolApiserverK8sIoRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FlowcontrolApiserverK8sIoRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIGroupFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
