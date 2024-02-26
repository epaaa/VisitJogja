import NavigationItem from "./NavigationItem";

export default function NavigationPopUp() {
    return (
      <div className="absolute w-screen px-14 py-6 bg-yellow left-0 top-20">
        <NavigationItem text="test" responsivePopUp />
        <NavigationItem text="test" responsivePopUp />
        <NavigationItem text="test" responsivePopUp />
        <NavigationItem text="test" responsivePopUp />
      </div>
      )
  }