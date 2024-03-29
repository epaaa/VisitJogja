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
    things:DataInterface[],
    responsivePopUp:boolean, 
    setResponsivePopUp?:(e:boolean)=>void,
    toggleResponsivePopUp:()=>void,
    handleClosePopUpMobile:()=>void,
    imageDic:Dictionary<string>
}

export interface PlaceCardInterface {
    placeName: string;
    placePic:  string;
    placeURL: string;
} 

export interface ThingsToDoSectionInterface {
    activityType: string;
    activityDesc: string;
    isOutdoor: boolean;
  }

export interface ThingsToDoSectionImages {
    url: string;
    name: string;
}

export interface Dictionary<T> {
    [key:string]:T
}

export interface BudgetinCardInterface {
    pic: string;
    title: string;
}

export interface BudgetinCardImages {
    url: string;
    name: string;
}

export interface OuterPopUpInterface {
    data : DataInterface,
    handlePopUp:()=>void
}