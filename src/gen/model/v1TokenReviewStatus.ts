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
import { V1UserInfo } from './v1UserInfo';

/**
* TokenReviewStatus is the result of the token authentication request.
*/
export class V1TokenReviewStatus {
    /**
    * Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token\'s audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is \"true\", the token is valid against the audience of the Kubernetes API server.
    */
    'audiences'?: Array<string>;
    /**
    * Authenticated indicates that the token was associated with a known user.
    */
    'authenticated'?: boolean;
    /**
    * Error indicates that the token couldn\'t be checked
    */
    'error'?: string;
    'user'?: V1UserInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "audiences",
            "baseName": "audiences",
            "type": "Array<string>"
        },
        {
            "name": "authenticated",
            "baseName": "authenticated",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "V1UserInfo"
        }    ];

    static getAttributeTypeMap() {
        return V1TokenReviewStatus.attributeTypeMap;
    }
}

