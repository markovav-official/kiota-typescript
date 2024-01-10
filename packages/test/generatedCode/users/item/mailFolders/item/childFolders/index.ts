/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMailFolderCollectionResponseFromDiscriminatorValue, createMailFolderFromDiscriminatorValue, deserializeIntoMailFolder, serializeMailFolder, type MailFolder, type MailFolderCollectionResponse } from '../../../../../models/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError, type ODataError } from '../../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MailFolderItemRequestBuilderNavigationMetadata, MailFolderItemRequestBuilderRequestsMetadata, MailFolderItemRequestBuilderUriTemplate, type MailFolderItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestMetadata } from '@microsoft/kiota-abstractions';

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
     * @returns a MailFolderItemRequestBuilder
     */
     byMailFolderId1(mailFolderId1: string) : MailFolderItemRequestBuilder;
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolderCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-list-childfolders?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : Promise<MailFolderCollectionResponse | undefined>;
    /**
     * Create a new mailSearchFolder in the specified user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/mailsearchfolder-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailFolder | undefined>;
    /**
     * The collection of child folders in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ChildFoldersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new mailSearchFolder in the specified user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
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
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Include Hidden Folders
     */
    includeHiddenFolders?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ChildFoldersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ChildFoldersRequestBuilderNavigationMetadata: Record<Exclude<keyof ChildFoldersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    "byMailFolderId1": {
        uriTemplate: MailFolderItemRequestBuilderUriTemplate,
        requestsMetadata: MailFolderItemRequestBuilderRequestsMetadata,
        navigationMetadata: MailFolderItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["mailFolder%2Did1"],
    },
    "count": {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ChildFoldersRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
    "get": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMailFolderCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ChildFoldersRequestBuilderGetQueryParametersMapper,
    },
    "post": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMailFolderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMailFolder,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ChildFoldersRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders{?includeHiddenFolders,%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
