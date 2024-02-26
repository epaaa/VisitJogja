export interface NavigationChildInterface {
    responsivePopUp:boolean
    className:string,
}

export interface NavigationItemInterface{
    text:string,
    responsivePopUp:boolean
}

export interface NavigationPopUpInterface{
    option:string[]
}

export interface NavigationTemplateItemInterface{
    text:string
}

export interface AbstractInfromationTemplateInterface{
    title:string,
    description:string
}

export default interface DefaultInterface {}