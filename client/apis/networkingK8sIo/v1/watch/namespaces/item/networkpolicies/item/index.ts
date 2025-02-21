/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWatchEventFromDiscriminatorValue, type WatchEvent } from '../../../../../../../../models/apimachinery/pkg/apis/meta/v1/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}
 */
export interface WithNameItemRequestBuilder extends BaseRequestBuilder<WithNameItemRequestBuilder> {
    /**
     * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WatchEvent>}
     */
     get(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : Promise<WatchEvent | undefined>;
    /**
     * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WithNameItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
export interface WithNameItemRequestBuilderGetQueryParameters {
    /**
     * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     */
    allowWatchBookmarks?: boolean;
    /**
     * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     */
    continueEscaped?: string;
    /**
     * A selector to restrict the list of returned objects by their fields. Defaults to everything.
     */
    fieldSelector?: string;
    /**
     * A selector to restrict the list of returned objects by their labels. Defaults to everything.
     */
    labelSelector?: string;
    /**
     * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     */
    limit?: number;
    /**
     * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
     */
    pretty?: string;
    /**
     * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.Defaults to unset
     */
    resourceVersion?: string;
    /**
     * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.Defaults to unset
     */
    resourceVersionMatch?: string;
    /**
     * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan  is interpreted as "data at least as new as the provided `resourceVersion`"  and the bookmark event is send when the state is synced  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.  If `resourceVersion` is unset, this is interpreted as "consistent read" and the  bookmark event is send when the state is synced at least to the moment  when request started being processed.- `resourceVersionMatch` set to any other value or unset  Invalid error is returned.Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
     */
    sendInitialEvents?: boolean;
    /**
     * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     */
    timeoutSeconds?: number;
    /**
     * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    watch?: boolean;
}
/**
 * Uri template for the request builder.
 */
export const WithNameItemRequestBuilderUriTemplate = "{+baseurl}/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}{?allowWatchBookmarks*,continue*,fieldSelector*,labelSelector*,limit*,pretty*,resourceVersion*,resourceVersionMatch*,sendInitialEvents*,timeoutSeconds*,watch*}";
/**
 * Metadata for all the requests in the request builder.
 */
export const WithNameItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WithNameItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, application/json;stream=watch",
        adapterMethodName: "send",
        responseBodyFactory:  createWatchEventFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
