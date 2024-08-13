/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMessageCollectionResponseFromDiscriminatorValue, createMessageFromDiscriminatorValue, serializeMessage, type Message, type MessageCollectionResponse } from '../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MessageItemRequestBuilderNavigationMetadata, MessageItemRequestBuilderRequestsMetadata, type MessageItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages
 */
export interface MessagesRequestBuilder extends BaseRequestBuilder<MessagesRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item.messages.item collection
     * @param messageId The unique identifier of message
     * @returns {MessageItemRequestBuilder}
     */
     byMessageId(messageId: string) : MessageItemRequestBuilder;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageCollectionResponse | undefined>;
    /**
     * Create new navigation property to messages for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Message>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined>;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to messages for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of messages in the mailFolder.
 */
export interface MessagesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean | null;
    /**
     * Expand related entities
     */
    expand?: string[] | null;
    /**
     * Filter items by property values
     */
    filter?: string | null;
    /**
     * Order items by property values
     */
    orderby?: string[] | null;
    /**
     * Search items by search phrases
     */
    search?: string | null;
    /**
     * Select properties to be returned
     */
    select?: string[] | null;
    /**
     * Skip the first n items
     */
    skip?: number | null;
    /**
     * Show only the first n items
     */
    top?: number | null;
}
/**
 * Uri template for the request builder.
 */
export const MessagesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessagesRequestBuilderNavigationMetadata: Record<Exclude<keyof MessagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMessageId: {
        requestsMetadata: MessageItemRequestBuilderRequestsMetadata,
        navigationMetadata: MessageItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["message%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MessagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MessagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MessagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
