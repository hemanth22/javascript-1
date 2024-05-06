/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ApiextensionsV1WebhookClientConfig } from './apiextensionsV1WebhookClientConfig';

/**
* WebhookConversion describes how to call a conversion webhook
*/
export class V1WebhookConversion {
    'clientConfig'?: ApiextensionsV1WebhookClientConfig;
    /**
    * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
    */
    'conversionReviewVersions': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientConfig",
            "baseName": "clientConfig",
            "type": "ApiextensionsV1WebhookClientConfig"
        },
        {
            "name": "conversionReviewVersions",
            "baseName": "conversionReviewVersions",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1WebhookConversion.attributeTypeMap;
    }
}

