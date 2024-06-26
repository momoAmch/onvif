export interface Capabilities {
    /** Indication that the device supports the rules interface and the rules syntax. */
    ruleSupport?: boolean;
    /** Indication that the device supports the scene analytics module interface. */
    analyticsModuleSupport?: boolean;
    /** Indication that the device produces the cell based scene description */
    cellBasedSceneDescriptionSupported?: boolean;
    /** Indication that the device supports the GetRuleOptions operation on the rules interface */
    ruleOptionsSupported?: boolean;
    /** Indication that the device supports the GetAnalyticsModuleOptions operation on the analytics interface */
    analyticsModuleOptionsSupported?: boolean;
    /** Indication that the device supports the GetSupportedMetadata operation. */
    supportedMetadata?: boolean;
    /** Indication what kinds of method that the device support for sending image, acceptable values are defined in tt:ImageSendingType. */
    imageSendingType?: StringList;
}
export interface ConfigOptions {
    /**
                                The RuleType the ConfigOptions applies to if the Name attribute is ambiguous.
                             */
    ruleType?: any;
    /**
                                The Name of the SimpleItemDescription/ElementItemDescription
                                the ConfigOptions applies to.
                             */
    name: string;
    /**
                                Type of the Rule Options represented by a unique QName.
                                The Type defines the element contained in this structure.
                                This attribute is deprecated since its value must be identical to the embedded element.
                             */
    type?: any;
    /**
                                Optional name of the analytics module this constraint applies to. This option is only necessary in cases where different constraints for elements with the same Name exist.
                             */
    analyticsModule?: any;
    /**
                                Minimal number of occurrences. Defaults to one.
                             */
    minOccurs?: number;
    /**
                                Maximum number of occurrences. Defaults to one.
                             */
    maxOccurs?: number;
}
export interface MetadataInfo {
    /** Reference to an AnalyticsModule Type. */
    type: any;
    /** Sample frame content starting with the tt:Frame node. */
    sampleFrame?: Frame;
}
export interface GetServiceCapabilities {
}
export interface GetServiceCapabilitiesResponse {
    /** The capabilities for the analytics service is returned in the Capabilities element. */
    capabilities?: Capabilities;
}
export interface GetSupportedRules {
    /**
                                        References an existing Video Analytics configuration. The list of available tokens can be obtained
                                        via the Media service GetVideoAnalyticsConfigurations method.
                                     */
    configurationToken?: ReferenceToken;
}
export interface GetSupportedRulesResponse {
    supportedRules?: SupportedRules;
}
export interface CreateRules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
    rule?: Config[];
}
export interface DeleteRules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
    /** References the specific rule to be deleted (e.g. "MyLineDetector").  */
    ruleName?: string[];
}
export interface ModifyRules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
    rule?: Config[];
}
export interface GetRules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
}
export interface GetRulesResponse {
    rule?: Config[];
}
export interface GetRuleOptions {
    /** Reference to an SupportedRule Type returned from GetSupportedRules. */
    ruleType?: any;
    /** Reference to an existing analytics configuration. */
    configurationToken?: ReferenceToken;
}
export interface GetRuleOptionsResponse {
    /** A device shall provide respective ConfigOptions.RuleType for each RuleOption if the request does not specify RuleType. The response Options shall not contain any AnalyticsModule attribute. */
    ruleOptions?: ConfigOptions[];
}
export interface GetSupportedAnalyticsModules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
}
export interface GetSupportedAnalyticsModulesResponse {
    supportedAnalyticsModules?: SupportedAnalyticsModules;
}
export interface CreateAnalyticsModules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
    analyticsModule?: Config[];
}
export interface DeleteAnalyticsModules {
    /** Reference to an existing Video Analytics configuration. */
    configurationToken?: ReferenceToken;
    /** Name of the AnalyticsModule to be deleted. */
    analyticsModuleName?: string[];
}
export interface ModifyAnalyticsModules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
    analyticsModule?: Config[];
}
export interface GetAnalyticsModules {
    /** Reference to an existing VideoAnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
}
export interface GetAnalyticsModulesResponse {
    analyticsModule?: Config[];
}
export interface GetAnalyticsModuleOptions {
    /** Reference to an SupportedAnalyticsModule Type returned from GetSupportedAnalyticsModules. */
    type?: any;
    /** Reference to an existing AnalyticsConfiguration. */
    configurationToken?: ReferenceToken;
}
export interface GetAnalyticsModuleOptionsResponse {
    /** List of options for the specified analytics module. The response Options shall not contain any RuleType attribute. */
    options?: ConfigOptions[];
}
export interface GetSupportedMetadata {
    /** Optional reference to an AnalyticsModule Type returned from GetSupportedAnalyticsModules. */
    type?: any;
}
export interface GetSupportedMetadataResponse {
    analyticsModule?: MetadataInfo[];
}