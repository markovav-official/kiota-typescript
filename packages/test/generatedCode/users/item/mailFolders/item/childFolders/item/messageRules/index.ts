/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMessageRuleCollectionResponseFromDiscriminatorValue, createMessageRuleFromDiscriminatorValue, serializeMessageRule, type MessageRule, type MessageRuleCollectionResponse } from '../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MessageRuleItemRequestBuilderRequestsMetadata, type MessageRuleItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules
 */
export interface MessageRulesRequestBuilder extends BaseRequestBuilder<MessageRulesRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item.messageRules.item collection
     * @param messageRuleId The unique identifier of messageRule
     * @returns {MessageRuleItemRequestBuilder}
     */
     byMessageRuleId(messageRuleId: string) : MessageRuleItemRequestBuilder;
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRuleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MessageRulesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageRuleCollectionResponse | undefined>;
    /**
     * Create new navigation property to messageRules for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageRule | undefined>;
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageRulesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to messageRules for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of rules that apply to the user's Inbox folder.
 */
export interface MessageRulesRequestBuilderGetQueryParameters {
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
export const MessageRulesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageRulesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MessageRulesRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageRulesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMessageRuleId: {
        requestsMetadata: MessageRuleItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["messageRule%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageRulesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MessageRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageRuleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MessageRulesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MessageRulesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageRuleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageRule,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
