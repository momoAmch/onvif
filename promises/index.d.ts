/// <reference path="interfaces/devicemgmt.d.ts"/>

import {
  MediaUri,
  NetworkGateway,
  OSDConfiguration,
  OSDConfigurationOptions,
  Profile,
  PTZPreset
} from "./interfaces/onvif";
import { GetDeviceInformationResponse } from "./interfaces/devicemgmt";
import { SecureContextOptions } from 'node:tls';
import { Agent } from 'node:http';
import { GetPresets, GetPresetsResponse } from "./interfaces/ptz";
import { UUID } from "node:crypto";
import {
  Capabilities as MediaCapabilities,
  GetOSDOptions,
  GetOSDOptionsResponse,
  GetOSDs,
  GetSnapshotUri, GetStreamUri
} from "./interfaces/media";

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
    /// events
    on(event: 'connect', listener: () => void): this;
    on(event: 'warning', listener: (warning: Error) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'event', listener: (event: Record<string, object>) => void): this;
    on(event: 'eventsError', listener: (error: Error) => void): this;
    on(event: 'rawRequest', listener: (bode: string) => void): this;
    on(event: 'rawResponse', listener: (xml: string, statusCode: number) => void): this;
    /// properties
    /** Username */
    username?: string;
    /** Password */
    password?: string;
    /** Device presets */
    presets?: Record<string, string>;
    // methods
    /** Connect to the device */
    connect(): Promise<void>;
    /// devicemgmt
    getDeviceInformation(): Promise<GetDeviceInformationResponse>
    getNetworkDefaultGateway(): Promise<NetworkGateway>
    /// ptz
    getPresets(options?: GetPresets): Promise<PTZPreset[]>
    /// media
    getMediaServiceCapabilities(): Promise<MediaCapabilities>;
    getProfiles(): Promise<Profile[]>;
    getMediaProfiles(): Promise<Profile[]>;
    getOSDs(options?: GetOSDs): Promise<OSDConfiguration[]>;
    getOSDOptions(options?: GetOSDOptions): Promise<OSDConfigurationOptions>;
    getSnapshotUri(options?: GetSnapshotUri): Promise<MediaUri>;
    getStreamUri(options?: GetStreamUri): Promise<>;
  }

  export interface DiscoveyOptions {
    /** Timeout in milliseconds for discovery responses (defaults 5000)*/
    timeout?: number;
    /** Return a Cam object in the `device` event (defaults true). Set to `false` to return just information records */
    resolve?: boolean;
    /** WS-Discovery message id */
    messageId?: UUID;
    /** Interface to bind on for discovery ex. `eth0` (defaults defaultroute) */
    device?: string;
    /** Client will listen to discovery data device sent (defaults null) */
    listeningPort?: number;
  }

  export class Discovery {
    probe(): Promise<void>;
    on(event: 'device', listener: (cam: Cam | object, rinfo: object, xml: string) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
  }

  export const promisifiedMethods: string[];
// }
