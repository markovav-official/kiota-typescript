/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createInferenceClassificationOverrideFromDiscriminatorValue, serializeInferenceClassificationOverride, type InferenceClassificationOverride } from '../../../../../models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/inferenceClassification/overrides/{inferenceClassificationOverride-id}
 */
export interface InferenceClassificationOverrideItemRequestBuilder extends BaseRequestBuilder<InferenceClassificationOverrideItemRequestBuilder> {
    /**
     * Delete navigation property overrides for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<InferenceClassificationOverride>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<InferenceClassificationOverrideItemRequestBuilderGetQueryParameters> | undefined) : Promise<InferenceClassificationOverride | undefined>;
    /**
     * Update the navigation property overrides in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<InferenceClassificationOverride>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InferenceClassificationOverride | undefined>;
    /**
     * Delete navigation property overrides for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InferenceClassificationOverrideItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property overrides in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: InferenceClassificationOverride, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
 */
export interface InferenceClassificationOverrideItemRequestBuilderGetQueryParameters {
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
export const InferenceClassificationOverrideItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides/{inferenceClassificationOverride%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const InferenceClassificationOverrideItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InferenceClassificationOverrideItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: InferenceClassificationOverrideItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        uriTemplate: InferenceClassificationOverrideItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createInferenceClassificationOverrideFromDiscriminatorValue,
        queryParametersMapper: InferenceClassificationOverrideItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: InferenceClassificationOverrideItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createInferenceClassificationOverrideFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInferenceClassificationOverride,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
