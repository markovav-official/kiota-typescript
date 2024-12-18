/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
import { type ParseNodeFactory, ParseNodeFactoryRegistry, type SerializationWriterFactory, SerializationWriterFactoryRegistry } from "./serialization";
import { BackingStoreParseNodeFactory, BackingStoreSerializationWriterProxyFactory } from "./store";

/**
 * Registers the default serializer to the registry.
 * @param type the class of the factory to be registered.
 */
export function registerDefaultSerializer(type: new () => SerializationWriterFactory): void {
	if (!type) throw new Error("Type is required");
	const serializer = new type();
	SerializationWriterFactoryRegistry.defaultInstance.contentTypeAssociatedFactories.set(serializer.getValidContentType(), serializer);
}
/**
 * Registers the default deserializer to the registry.
 * @param type the class of the factory to be registered.
 */
export function registerDefaultDeserializer(type: new () => ParseNodeFactory): void {
	if (!type) throw new Error("Type is required");
	const deserializer = new type();
	ParseNodeFactoryRegistry.defaultInstance.contentTypeAssociatedFactories.set(deserializer.getValidContentType(), deserializer);
}
/**
 * Enables the backing store on default serialization writers and the given serialization writer.
 * @param original The serialization writer to enable the backing store on.
 * @returns A new serialization writer with the backing store enabled.
 */
export function enableBackingStoreForSerializationWriterFactory(original: SerializationWriterFactory): SerializationWriterFactory {
	if (!original) throw new Error("Original must be specified");
	let result = original;
	if (original instanceof SerializationWriterFactoryRegistry) {
		enableBackingStoreForSerializationRegistry(original);
	} else {
		result = new BackingStoreSerializationWriterProxyFactory(original);
	}
	enableBackingStoreForSerializationRegistry(SerializationWriterFactoryRegistry.defaultInstance);
	enableBackingStoreForParseNodeRegistry(ParseNodeFactoryRegistry.defaultInstance);
	return result;
}
/**
 * Enables the backing store on default parse node factories and the given parse node factory.
 * @param original The parse node factory to enable the backing store on.
 * @returns A new parse node factory with the backing store enabled.
 */
export function enableBackingStoreForParseNodeFactory(original: ParseNodeFactory): ParseNodeFactory {
	if (!original) throw new Error("Original must be specified");
	let result = original;
	if (original instanceof ParseNodeFactoryRegistry) {
		enableBackingStoreForParseNodeRegistry(original);
	} else {
		result = new BackingStoreParseNodeFactory(original);
	}
	enableBackingStoreForParseNodeRegistry(ParseNodeFactoryRegistry.defaultInstance);
	return result;
}
/**
 * Enables the backing store on the given parse node factory registry.
 * @param registry The parse node factory registry to enable the backing store on.
 */
function enableBackingStoreForParseNodeRegistry(registry: ParseNodeFactoryRegistry): void {
	for (const [k, v] of registry.contentTypeAssociatedFactories) {
		if (!(v instanceof BackingStoreParseNodeFactory || v instanceof ParseNodeFactoryRegistry)) {
			registry.contentTypeAssociatedFactories.set(k, new BackingStoreParseNodeFactory(v));
		}
	}
}
/**
 * Enables the backing store on the given serialization factory registry.
 * @param registry The serialization factory registry to enable the backing store on.
 */
function enableBackingStoreForSerializationRegistry(registry: SerializationWriterFactoryRegistry): void {
	for (const [k, v] of registry.contentTypeAssociatedFactories) {
		if (!(v instanceof BackingStoreSerializationWriterProxyFactory || v instanceof SerializationWriterFactoryRegistry)) {
			registry.contentTypeAssociatedFactories.set(k, new BackingStoreSerializationWriterProxyFactory(v));
		}
	}
}
