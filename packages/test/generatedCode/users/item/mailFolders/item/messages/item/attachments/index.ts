/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAttachmentCollectionResponseFromDiscriminatorValue, createAttachmentFromDiscriminatorValue, serializeAttachment, type Attachment, type AttachmentCollectionResponse } from '../../../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AttachmentItemRequestBuilderRequestsMetadata, type AttachmentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments
 */
export interface AttachmentsRequestBuilder extends BaseRequestBuilder<AttachmentsRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.messages.item.attachments.item collection
     * @param attachmentId The unique identifier of attachment
     * @returns {AttachmentItemRequestBuilder}
     */
     byAttachmentId(attachmentId: string) : AttachmentItemRequestBuilder;
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AttachmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AttachmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to attachments for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Attachment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Attachment | undefined>;
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to attachments for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The fileAttachment and itemAttachment attachments for the message.
 */
export interface AttachmentsRequestBuilderGetQueryParameters {
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
export const AttachmentsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messages/{message%2Did}/attachments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AttachmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AttachmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AttachmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAttachmentId: {
        requestsMetadata: AttachmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["attachment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AttachmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttachmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AttachmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttachmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAttachment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
