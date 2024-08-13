/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMailFolderCollectionResponseFromDiscriminatorValue, createMailFolderFromDiscriminatorValue, serializeMailFolder, type MailFolder, type MailFolderCollectionResponse } from '../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MailFolderItemRequestBuilderNavigationMetadata, MailFolderItemRequestBuilderRequestsMetadata, type MailFolderItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders
 */
export interface ChildFoldersRequestBuilder extends BaseRequestBuilder<ChildFoldersRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the ApiSdk.users.item.mailFolders.item.childFolders.item collection
     * @param mailFolderId1 The unique identifier of mailFolder
     * @returns {MailFolderItemRequestBuilder}
     */
     byMailFolderId1(mailFolderId1: string) : MailFolderItemRequestBuilder;
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailFolderCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : Promise<MailFolderCollectionResponse | undefined>;
    /**
     * Create new navigation property to childFolders for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailFolder>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailFolder | undefined>;
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to childFolders for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of child folders in the mailFolder.
 */
export interface ChildFoldersRequestBuilderGetQueryParameters {
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
     * Include Hidden Folders
     */
    includeHiddenFolders?: string | null;
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
export const ChildFoldersRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top,includeHiddenFolders}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ChildFoldersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ChildFoldersRequestBuilderNavigationMetadata: Record<Exclude<keyof ChildFoldersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMailFolderId1: {
        requestsMetadata: MailFolderItemRequestBuilderRequestsMetadata,
        navigationMetadata: MailFolderItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["mailFolder%2Did1"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ChildFoldersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ChildFoldersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailFolderCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ChildFoldersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ChildFoldersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailFolderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMailFolder,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
