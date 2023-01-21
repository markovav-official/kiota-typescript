import {deserializeIntoMailFolderCollectionResponse} from './deserializeIntoMailFolderCollectionResponse';
import {MailFolderCollectionResponse} from './mailFolderCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailFolderCollectionResponse;
}
