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

export interface DataInterface {
    id:string,
    name:string,
    address:string,
    description:string,
    profile:string,
    image:string,
    price:number,
    navbar:string,
    navbarChild:string
}

export interface DataContextInterface {
    places:DataInterface[],
    things:DataInterface[]
}

