/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/$count
 */
export interface CountRequestBuilder extends BaseRequestBuilder<CountRequestBuilder> {
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<number>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : Promise<number | undefined>;
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the number of the resource
 */
export interface CountRequestBuilderGetQueryParameters {
    /**
     * Filter items by property values
     */
    filter?: string | null;
    /**
     * Search items by search phrases
     */
    search?: string | null;
}
/**
 * Uri template for the request builder.
 */
export const CountRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules/$count{?%24filter,%24search}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CountRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "filter": "%24filter",
    "search": "%24search",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CountRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CountRequestBuilderUriTemplate,
        responseBodyContentType: "text/plain;q=0.9",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "number",
        queryParametersMapper: CountRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
