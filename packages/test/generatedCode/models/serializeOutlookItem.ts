import {OutlookItem} from './index';
import {serializeEntity} from './serializeEntity';
import {DeserializeIntoModelFunction, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOutlookItem(writer: SerializationWriter, outlookItem: OutlookItem | undefined = {}) : void {
        serializeEntity(writer, outlookItem)
            writer.writeCollectionOfPrimitiveValues<string>("categories", outlookItem.categories);
            writer.writeStringValue("changeKey", outlookItem.changeKey);
            writer.writeDateValue("createdDateTime", outlookItem.createdDateTime);
            writer.writeDateValue("lastModifiedDateTime", outlookItem.lastModifiedDateTime);
}
