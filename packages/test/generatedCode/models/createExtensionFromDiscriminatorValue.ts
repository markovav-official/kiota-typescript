import {deserializeIntoExtension} from './deserializeIntoExtension';
import {Extension} from './extension';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtension;
}
