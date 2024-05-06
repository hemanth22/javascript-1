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

/**
* ScaleSpec describes the attributes of a scale subresource.
*/
export class V1ScaleSpec {
    /**
    * replicas is the desired number of instances for the scaled object.
    */
    'replicas'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1ScaleSpec.attributeTypeMap;
    }
}

