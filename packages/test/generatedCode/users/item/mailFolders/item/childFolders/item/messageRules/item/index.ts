/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMessageRuleFromDiscriminatorValue, serializeMessageRule, type MessageRule } from '../../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}
 */
export interface MessageRuleItemRequestBuilder extends BaseRequestBuilder<MessageRuleItemRequestBuilder> {
    /**
     * Delete navigation property messageRules for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MessageRuleItemRequestBuilderGetQueryParameters> | undefined) : Promise<MessageRule | undefined>;
    /**
     * Update the navigation property messageRules in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageRule | undefined>;
    /**
     * Delete navigation property messageRules for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of rules that apply to the user's Inbox folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageRuleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property messageRules in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of rules that apply to the user's Inbox folder.
 */
export interface MessageRuleItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[] | null;
    /**
     * Select properties to be returned
     */
    select?: string[] | null;
}
/**
 * Uri template for the request builder.
 */
export const MessageRuleItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules/{messageRule%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageRuleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageRuleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MessageRuleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        uriTemplate: MessageRuleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageRuleFromDiscriminatorValue,
        queryParametersMapper: MessageRuleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MessageRuleItemRequestBuilderUriTemplate,
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
