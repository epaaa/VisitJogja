export interface NavigationChildInterface {
  className:string,
  responsivePopUp:boolean
}

export default function NavigationChild(prop:NavigationChildInterface){
    return (
      <div className={prop.className}>
        <div className="cursor-pointer text-lg font-medium hover:font-bold">Places to Go</div>
        <div className="cursor-pointer text-lg font-medium hover:font-bold">Things to Do</div>
        <div className="cursor-pointer text-lg font-medium hover:font-bold">Budget Calculator</div>
      </div>
    )
  }