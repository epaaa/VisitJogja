export interface NavigationChildInterface {
  className:string
}

export default function NavigationChild(prop:NavigationChildInterface){
    return (
      <div className={prop.className}>
        <div className="text-lg font-bold">Home</div>
        <div className="text-lg font-bold">Places to Go</div>
        <div className="text-lg font-bold">Things to Do</div>
        <div className="text-lg font-bold">Budget Calculator</div>
      </div>
    )
  }