/// <reference path="interfaces/devicemgmt.d.ts"/>

import {NetworkGateway} from "./interfaces/onvif";
import {GetDeviceInformationResponse} from "./interfaces/devicemgmt";
import { SecureContextOptions } from 'node:tls';
import { Agent } from 'node:http';

// declare module "onvif/promises" {
  /**
   * Cam constructor options
   */
  export interface OnvifOptions {
    /** Set true if using `https` protocol, defaults to false. */
    useSecure?: boolean;
    /** Set options for https like ca, cert, ciphers, rejectUnauthorized, secureOptions, secureProtocol, etc. */
    secureOptions?: SecureContextOptions;
    hostname: string;
    username?: string;
    password?: string;
    port?: number;
    path?: string;
    timeout?: number;
    urn?: string;
    /** Supports things like https://www.npmjs.com/package/proxy-agent which provide SOCKS5 and other connections. */
    agent?: Agent | boolean;
    /** Force using hostname and port from constructor for the services (ex.: for proxying), defaults to false. */
    preserveAddress?: boolean;
    /** Set false if the camera should not connect automatically, defaults false. */
    autoConnect?: boolean;
  }

  export class Cam {
    constructor(options: OnvifOptions);
    // events
    on(event: 'connect', listener: () => void): this;
    on(event: 'warning', listener: (warning: Error) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'event', listener: (event: Record<string, object>) => void): this;
    on(event: 'eventsError', listener: (error: Error) => void): this;
    on(event: 'rawRequest', listener: (bode: string) => void): this;
    on(event: 'rawResponse', listener: (xml: string, statusCode: number) => void): this;
    // properties
    /** Username */
    username?: string;
    /** Password */
    password?: string;
    // methods
    /** Connect to the device */
    connect(): Promise<void>;
    getDeviceInformation(): Promise<GetDeviceInformationResponse>
    getNetworkDefaultGateway(): Promise<NetworkGateway>
  }
// }
