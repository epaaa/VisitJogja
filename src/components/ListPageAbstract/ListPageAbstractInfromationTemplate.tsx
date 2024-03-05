import { AbstractInfromationTemplateInterface } from "../../config/Interface";

export default function ListPageAbstractInfromationTemplate(prop:AbstractInfromationTemplateInterface) {
  return (
    <div className="max-w-[800px] grid gap-5 p-5">
        <div className="text-5xl font-semibold text-center max-mobile:text-3xl">{prop.title}</div>

        <div className="w-full h-[2px] bg-brown"></div>

        <div className="text-center text-xl">{prop.description}</div>
      </div>
  )
}
