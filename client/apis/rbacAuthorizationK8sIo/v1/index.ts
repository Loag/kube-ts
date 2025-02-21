/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIResourceListFromDiscriminatorValue, type APIResourceList } from '../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { ClusterrolebindingsRequestBuilderNavigationMetadata, ClusterrolebindingsRequestBuilderRequestsMetadata, type ClusterrolebindingsRequestBuilder } from './clusterrolebindings/index.js';
// @ts-ignore
import { ClusterrolesRequestBuilderNavigationMetadata, ClusterrolesRequestBuilderRequestsMetadata, type ClusterrolesRequestBuilder } from './clusterroles/index.js';
// @ts-ignore
import { NamespacesRequestBuilderNavigationMetadata, type NamespacesRequestBuilder } from './namespaces/index.js';
// @ts-ignore
import { RolebindingsRequestBuilderRequestsMetadata, type RolebindingsRequestBuilder } from './rolebindings/index.js';
// @ts-ignore
import { RolesRequestBuilderRequestsMetadata, type RolesRequestBuilder } from './roles/index.js';
// @ts-ignore
import { type WatchRequestBuilder, WatchRequestBuilderNavigationMetadata } from './watch/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/rbac.authorization.k8s.io/v1/
 */
export interface V1RequestBuilder extends BaseRequestBuilder<V1RequestBuilder> {
    /**
     * The clusterrolebindings property
     */
    get clusterrolebindings(): ClusterrolebindingsRequestBuilder;
    /**
     * The clusterroles property
     */
    get clusterroles(): ClusterrolesRequestBuilder;
    /**
     * The namespaces property
     */
    get namespaces(): NamespacesRequestBuilder;
    /**
     * The rolebindings property
     */
    get rolebindings(): RolebindingsRequestBuilder;
    /**
     * The roles property
     */
    get roles(): RolesRequestBuilder;
    /**
     * The watch property
     */
    get watch(): WatchRequestBuilder;
    /**
     * get available resources
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<APIResourceList>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<APIResourceList | undefined>;
    /**
     * get available resources
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const V1RequestBuilderUriTemplate = "{+baseurl}/apis/rbac.authorization.k8s.io/v1/";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const V1RequestBuilderNavigationMetadata: Record<Exclude<keyof V1RequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    clusterrolebindings: {
        requestsMetadata: ClusterrolebindingsRequestBuilderRequestsMetadata,
        navigationMetadata: ClusterrolebindingsRequestBuilderNavigationMetadata,
    },
    clusterroles: {
        requestsMetadata: ClusterrolesRequestBuilderRequestsMetadata,
        navigationMetadata: ClusterrolesRequestBuilderNavigationMetadata,
    },
    namespaces: {
        navigationMetadata: NamespacesRequestBuilderNavigationMetadata,
    },
    rolebindings: {
        requestsMetadata: RolebindingsRequestBuilderRequestsMetadata,
    },
    roles: {
        requestsMetadata: RolesRequestBuilderRequestsMetadata,
    },
    watch: {
        navigationMetadata: WatchRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const V1RequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: V1RequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIResourceListFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
