/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAPIGroupListFromDiscriminatorValue, type APIGroupList } from '../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { AdmissionregistrationK8sIoRequestBuilderNavigationMetadata, AdmissionregistrationK8sIoRequestBuilderRequestsMetadata, type AdmissionregistrationK8sIoRequestBuilder } from './admissionregistrationK8sIo/index.js';
// @ts-ignore
import { ApiextensionsK8sIoRequestBuilderNavigationMetadata, ApiextensionsK8sIoRequestBuilderRequestsMetadata, type ApiextensionsK8sIoRequestBuilder } from './apiextensionsK8sIo/index.js';
// @ts-ignore
import { ApiregistrationK8sIoRequestBuilderNavigationMetadata, ApiregistrationK8sIoRequestBuilderRequestsMetadata, type ApiregistrationK8sIoRequestBuilder } from './apiregistrationK8sIo/index.js';
// @ts-ignore
import { AppsRequestBuilderNavigationMetadata, AppsRequestBuilderRequestsMetadata, type AppsRequestBuilder } from './apps/index.js';
// @ts-ignore
import { AuthenticationK8sIoRequestBuilderNavigationMetadata, AuthenticationK8sIoRequestBuilderRequestsMetadata, type AuthenticationK8sIoRequestBuilder } from './authenticationK8sIo/index.js';
// @ts-ignore
import { AuthorizationK8sIoRequestBuilderNavigationMetadata, AuthorizationK8sIoRequestBuilderRequestsMetadata, type AuthorizationK8sIoRequestBuilder } from './authorizationK8sIo/index.js';
// @ts-ignore
import { AutoscalingRequestBuilderNavigationMetadata, AutoscalingRequestBuilderRequestsMetadata, type AutoscalingRequestBuilder } from './autoscaling/index.js';
// @ts-ignore
import { BatchRequestBuilderNavigationMetadata, BatchRequestBuilderRequestsMetadata, type BatchRequestBuilder } from './batch/index.js';
// @ts-ignore
import { CertificatesK8sIoRequestBuilderNavigationMetadata, CertificatesK8sIoRequestBuilderRequestsMetadata, type CertificatesK8sIoRequestBuilder } from './certificatesK8sIo/index.js';
// @ts-ignore
import { CoordinationK8sIoRequestBuilderNavigationMetadata, CoordinationK8sIoRequestBuilderRequestsMetadata, type CoordinationK8sIoRequestBuilder } from './coordinationK8sIo/index.js';
// @ts-ignore
import { DiscoveryK8sIoRequestBuilderNavigationMetadata, DiscoveryK8sIoRequestBuilderRequestsMetadata, type DiscoveryK8sIoRequestBuilder } from './discoveryK8sIo/index.js';
// @ts-ignore
import { EventsK8sIoRequestBuilderNavigationMetadata, EventsK8sIoRequestBuilderRequestsMetadata, type EventsK8sIoRequestBuilder } from './eventsK8sIo/index.js';
// @ts-ignore
import { FlowcontrolApiserverK8sIoRequestBuilderNavigationMetadata, FlowcontrolApiserverK8sIoRequestBuilderRequestsMetadata, type FlowcontrolApiserverK8sIoRequestBuilder } from './flowcontrolApiserverK8sIo/index.js';
// @ts-ignore
import { InternalApiserverK8sIoRequestBuilderNavigationMetadata, InternalApiserverK8sIoRequestBuilderRequestsMetadata, type InternalApiserverK8sIoRequestBuilder } from './internalApiserverK8sIo/index.js';
// @ts-ignore
import { NetworkingK8sIoRequestBuilderNavigationMetadata, NetworkingK8sIoRequestBuilderRequestsMetadata, type NetworkingK8sIoRequestBuilder } from './networkingK8sIo/index.js';
// @ts-ignore
import { NodeK8sIoRequestBuilderNavigationMetadata, NodeK8sIoRequestBuilderRequestsMetadata, type NodeK8sIoRequestBuilder } from './nodeK8sIo/index.js';
// @ts-ignore
import { PolicyRequestBuilderNavigationMetadata, PolicyRequestBuilderRequestsMetadata, type PolicyRequestBuilder } from './policy/index.js';
// @ts-ignore
import { RbacAuthorizationK8sIoRequestBuilderNavigationMetadata, RbacAuthorizationK8sIoRequestBuilderRequestsMetadata, type RbacAuthorizationK8sIoRequestBuilder } from './rbacAuthorizationK8sIo/index.js';
// @ts-ignore
import { ResourceK8sIoRequestBuilderNavigationMetadata, ResourceK8sIoRequestBuilderRequestsMetadata, type ResourceK8sIoRequestBuilder } from './resourceK8sIo/index.js';
// @ts-ignore
import { SchedulingK8sIoRequestBuilderNavigationMetadata, SchedulingK8sIoRequestBuilderRequestsMetadata, type SchedulingK8sIoRequestBuilder } from './schedulingK8sIo/index.js';
// @ts-ignore
import { StorageK8sIoRequestBuilderNavigationMetadata, StorageK8sIoRequestBuilderRequestsMetadata, type StorageK8sIoRequestBuilder } from './storageK8sIo/index.js';
// @ts-ignore
import { StoragemigrationK8sIoRequestBuilderNavigationMetadata, StoragemigrationK8sIoRequestBuilderRequestsMetadata, type StoragemigrationK8sIoRequestBuilder } from './storagemigrationK8sIo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis
 */
export interface ApisRequestBuilder extends BaseRequestBuilder<ApisRequestBuilder> {
    /**
     * The admissionregistrationK8sIo property
     */
    get admissionregistrationK8sIo(): AdmissionregistrationK8sIoRequestBuilder;
    /**
     * The apiextensionsK8sIo property
     */
    get apiextensionsK8sIo(): ApiextensionsK8sIoRequestBuilder;
    /**
     * The apiregistrationK8sIo property
     */
    get apiregistrationK8sIo(): ApiregistrationK8sIoRequestBuilder;
    /**
     * The apps property
     */
    get apps(): AppsRequestBuilder;
    /**
     * The authenticationK8sIo property
     */
    get authenticationK8sIo(): AuthenticationK8sIoRequestBuilder;
    /**
     * The authorizationK8sIo property
     */
    get authorizationK8sIo(): AuthorizationK8sIoRequestBuilder;
    /**
     * The autoscaling property
     */
    get autoscaling(): AutoscalingRequestBuilder;
    /**
     * The batch property
     */
    get batch(): BatchRequestBuilder;
    /**
     * The certificatesK8sIo property
     */
    get certificatesK8sIo(): CertificatesK8sIoRequestBuilder;
    /**
     * The coordinationK8sIo property
     */
    get coordinationK8sIo(): CoordinationK8sIoRequestBuilder;
    /**
     * The discoveryK8sIo property
     */
    get discoveryK8sIo(): DiscoveryK8sIoRequestBuilder;
    /**
     * The eventsK8sIo property
     */
    get eventsK8sIo(): EventsK8sIoRequestBuilder;
    /**
     * The flowcontrolApiserverK8sIo property
     */
    get flowcontrolApiserverK8sIo(): FlowcontrolApiserverK8sIoRequestBuilder;
    /**
     * The internalApiserverK8sIo property
     */
    get internalApiserverK8sIo(): InternalApiserverK8sIoRequestBuilder;
    /**
     * The networkingK8sIo property
     */
    get networkingK8sIo(): NetworkingK8sIoRequestBuilder;
    /**
     * The nodeK8sIo property
     */
    get nodeK8sIo(): NodeK8sIoRequestBuilder;
    /**
     * The policy property
     */
    get policy(): PolicyRequestBuilder;
    /**
     * The rbacAuthorizationK8sIo property
     */
    get rbacAuthorizationK8sIo(): RbacAuthorizationK8sIoRequestBuilder;
    /**
     * The resourceK8sIo property
     */
    get resourceK8sIo(): ResourceK8sIoRequestBuilder;
    /**
     * The schedulingK8sIo property
     */
    get schedulingK8sIo(): SchedulingK8sIoRequestBuilder;
    /**
     * The storageK8sIo property
     */
    get storageK8sIo(): StorageK8sIoRequestBuilder;
    /**
     * The storagemigrationK8sIo property
     */
    get storagemigrationK8sIo(): StoragemigrationK8sIoRequestBuilder;
    /**
     * get available API versions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<APIGroupList>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<APIGroupList | undefined>;
    /**
     * get available API versions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ApisRequestBuilderUriTemplate = "{+baseurl}/apis/";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApisRequestBuilderNavigationMetadata: Record<Exclude<keyof ApisRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    admissionregistrationK8sIo: {
        requestsMetadata: AdmissionregistrationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: AdmissionregistrationK8sIoRequestBuilderNavigationMetadata,
    },
    apiextensionsK8sIo: {
        requestsMetadata: ApiextensionsK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: ApiextensionsK8sIoRequestBuilderNavigationMetadata,
    },
    apiregistrationK8sIo: {
        requestsMetadata: ApiregistrationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: ApiregistrationK8sIoRequestBuilderNavigationMetadata,
    },
    apps: {
        requestsMetadata: AppsRequestBuilderRequestsMetadata,
        navigationMetadata: AppsRequestBuilderNavigationMetadata,
    },
    authenticationK8sIo: {
        requestsMetadata: AuthenticationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationK8sIoRequestBuilderNavigationMetadata,
    },
    authorizationK8sIo: {
        requestsMetadata: AuthorizationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: AuthorizationK8sIoRequestBuilderNavigationMetadata,
    },
    autoscaling: {
        requestsMetadata: AutoscalingRequestBuilderRequestsMetadata,
        navigationMetadata: AutoscalingRequestBuilderNavigationMetadata,
    },
    batch: {
        requestsMetadata: BatchRequestBuilderRequestsMetadata,
        navigationMetadata: BatchRequestBuilderNavigationMetadata,
    },
    certificatesK8sIo: {
        requestsMetadata: CertificatesK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: CertificatesK8sIoRequestBuilderNavigationMetadata,
    },
    coordinationK8sIo: {
        requestsMetadata: CoordinationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: CoordinationK8sIoRequestBuilderNavigationMetadata,
    },
    discoveryK8sIo: {
        requestsMetadata: DiscoveryK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: DiscoveryK8sIoRequestBuilderNavigationMetadata,
    },
    eventsK8sIo: {
        requestsMetadata: EventsK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: EventsK8sIoRequestBuilderNavigationMetadata,
    },
    flowcontrolApiserverK8sIo: {
        requestsMetadata: FlowcontrolApiserverK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: FlowcontrolApiserverK8sIoRequestBuilderNavigationMetadata,
    },
    internalApiserverK8sIo: {
        requestsMetadata: InternalApiserverK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: InternalApiserverK8sIoRequestBuilderNavigationMetadata,
    },
    networkingK8sIo: {
        requestsMetadata: NetworkingK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: NetworkingK8sIoRequestBuilderNavigationMetadata,
    },
    nodeK8sIo: {
        requestsMetadata: NodeK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: NodeK8sIoRequestBuilderNavigationMetadata,
    },
    policy: {
        requestsMetadata: PolicyRequestBuilderRequestsMetadata,
        navigationMetadata: PolicyRequestBuilderNavigationMetadata,
    },
    rbacAuthorizationK8sIo: {
        requestsMetadata: RbacAuthorizationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: RbacAuthorizationK8sIoRequestBuilderNavigationMetadata,
    },
    resourceK8sIo: {
        requestsMetadata: ResourceK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: ResourceK8sIoRequestBuilderNavigationMetadata,
    },
    schedulingK8sIo: {
        requestsMetadata: SchedulingK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: SchedulingK8sIoRequestBuilderNavigationMetadata,
    },
    storageK8sIo: {
        requestsMetadata: StorageK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: StorageK8sIoRequestBuilderNavigationMetadata,
    },
    storagemigrationK8sIo: {
        requestsMetadata: StoragemigrationK8sIoRequestBuilderRequestsMetadata,
        navigationMetadata: StoragemigrationK8sIoRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApisRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApisRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createAPIGroupListFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
