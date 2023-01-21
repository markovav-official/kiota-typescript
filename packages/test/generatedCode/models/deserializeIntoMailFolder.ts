import {createMailFolderFromDiscriminatorValue} from './createMailFolderFromDiscriminatorValue';
import {createMessageFromDiscriminatorValue} from './createMessageFromDiscriminatorValue';
import {createMessageRuleFromDiscriminatorValue} from './createMessageRuleFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MailFolder, Message, MessageRule, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {DeserializeIntoModelFunction, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailFolder(mailFolder: MailFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mailFolder),
        "childFolderCount": n => { mailFolder.childFolderCount = n.getNumberValue(); },
        "childFolders": n => { mailFolder.childFolders = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); },
        "displayName": n => { mailFolder.displayName = n.getStringValue(); },
        "isHidden": n => { mailFolder.isHidden = n.getBooleanValue(); },
        "messageRules": n => { mailFolder.messageRules = n.getCollectionOfObjectValues<MessageRule>(createMessageRuleFromDiscriminatorValue); },
        "messages": n => { mailFolder.messages = n.getCollectionOfObjectValues<Message>(createMessageFromDiscriminatorValue); },
        "multiValueExtendedProperties": n => { mailFolder.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "parentFolderId": n => { mailFolder.parentFolderId = n.getStringValue(); },
        "singleValueExtendedProperties": n => { mailFolder.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "totalItemCount": n => { mailFolder.totalItemCount = n.getNumberValue(); },
        "unreadItemCount": n => { mailFolder.unreadItemCount = n.getNumberValue(); },
    }
}
