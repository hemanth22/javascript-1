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
* ContainerResizePolicy represents resource resize policy for the container.
*/
export class V1ContainerResizePolicy {
    /**
    * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
    */
    'resourceName': string;
    /**
    * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
    */
    'restartPolicy': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string"
        },
        {
            "name": "restartPolicy",
            "baseName": "restartPolicy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerResizePolicy.attributeTypeMap;
    }
}

