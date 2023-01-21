import {deserializeIntoInferenceClassificationOverrideCollectionResponse} from './deserializeIntoInferenceClassificationOverrideCollectionResponse';
import {InferenceClassificationOverrideCollectionResponse} from './inferenceClassificationOverrideCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInferenceClassificationOverrideCollectionResponse;
}
