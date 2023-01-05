/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { RequestOption } from "@microsoft/kiota-abstractions";

export const UserAgentHandlerOptionKey = "UserAgentHandlerOptionKey";

export class UserAgentHandlerOption implements RequestOption {
	getKey(): string {
		return UserAgentHandlerOptionKey;
	}
	/**
	 * @public
	 * @constructor
	 * To create an instance of UserAgentHandlerOption
	 * @param {boolean} [enable = true] - Whether to add the user agent header to the request
	 * @param {string} [productName = "kiota-typescript"] - The product name to be added to the user agent header
	 * @param {string} [productVersion = "1.0.0-preview.12"] - The product version to be added to the user agent header
	 */
	public constructor(public enable: boolean = true, public productName: string = "kiota-typescript", public productVersion: string = "1.0.0-preview.12") {}
}
