import {deserializeIntoSizeRange} from './deserializeIntoSizeRange';
import {SizeRange} from './sizeRange';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSizeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSizeRange;
}
