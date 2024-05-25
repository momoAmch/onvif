/** Type used to represent the numbers from 1 ,2 , 3,... */
export type PositiveInteger = number;
/** Recognition/identification types supported by ONVIF. */
export type RecognitionType = 'pt:Card' | 'pt:PIN' | 'pt:Fingerprint' | 'pt:Face' | 'pt:Iris' | 'pt:Vein' | 'pt:Palm' | 'pt:Retina' | 'pt:LicensePlate' | 'pt:REX';
/** General datastructure referenced by a token.
                Should be used as extension base.
             */
export interface DataEntity {
    /** A service-unique identifier of the item. */
    token: ReferenceToken;
}
/**
                Attributes contains a Name and an optional Value and type.
             */
export interface Attribute {
    /** Name of attribute. Key names starting with "ONVIF" (any case) are reserved for ONVIF
                        use.
                     */
    name: string;
    /** Value of attribute */
    value?: string;
}
