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
import { V1ExecAction } from './v1ExecAction';
import { V1HTTPGetAction } from './v1HTTPGetAction';
import { V1SleepAction } from './v1SleepAction';
import { V1TCPSocketAction } from './v1TCPSocketAction';

/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
export class V1LifecycleHandler {
    'exec'?: V1ExecAction;
    'httpGet'?: V1HTTPGetAction;
    'sleep'?: V1SleepAction;
    'tcpSocket'?: V1TCPSocketAction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exec",
            "baseName": "exec",
            "type": "V1ExecAction"
        },
        {
            "name": "httpGet",
            "baseName": "httpGet",
            "type": "V1HTTPGetAction"
        },
        {
            "name": "sleep",
            "baseName": "sleep",
            "type": "V1SleepAction"
        },
        {
            "name": "tcpSocket",
            "baseName": "tcpSocket",
            "type": "V1TCPSocketAction"
        }    ];

    static getAttributeTypeMap() {
        return V1LifecycleHandler.attributeTypeMap;
    }
}

