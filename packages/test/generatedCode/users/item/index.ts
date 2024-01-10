/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { InferenceClassificationRequestBuilderNavigationMetadata, InferenceClassificationRequestBuilderRequestsMetadata, InferenceClassificationRequestBuilderUriTemplate, type InferenceClassificationRequestBuilder } from './inferenceClassification/';
import { MailFoldersRequestBuilderNavigationMetadata, MailFoldersRequestBuilderRequestsMetadata, MailFoldersRequestBuilderUriTemplate, type MailFoldersRequestBuilder } from './mailFolders/';
import { MessagesRequestBuilderNavigationMetadata, MessagesRequestBuilderRequestsMetadata, MessagesRequestBuilderUriTemplate, type MessagesRequestBuilder } from './messages/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}
 */
export interface UserItemRequestBuilder extends BaseRequestBuilder<UserItemRequestBuilder> {
    /**
     * The inferenceClassification property
     */
    get inferenceClassification(): InferenceClassificationRequestBuilder;
    /**
     * The mailFolders property
     */
    get mailFolders(): MailFoldersRequestBuilder;
    /**
     * The messages property
     */
    get messages(): MessagesRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UserItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    "inferenceClassification": {
        uriTemplate: InferenceClassificationRequestBuilderUriTemplate,
        requestsMetadata: InferenceClassificationRequestBuilderRequestsMetadata,
        navigationMetadata: InferenceClassificationRequestBuilderNavigationMetadata,
    },
    "mailFolders": {
        uriTemplate: MailFoldersRequestBuilderUriTemplate,
        requestsMetadata: MailFoldersRequestBuilderRequestsMetadata,
        navigationMetadata: MailFoldersRequestBuilderNavigationMetadata,
    },
    "messages": {
        uriTemplate: MessagesRequestBuilderUriTemplate,
        requestsMetadata: MessagesRequestBuilderRequestsMetadata,
        navigationMetadata: MessagesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const UserItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}";
/* tslint:enable */
/* eslint-enable */
