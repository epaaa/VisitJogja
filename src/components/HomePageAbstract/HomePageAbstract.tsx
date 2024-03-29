import { useContext } from 'react';
import HomePageAbstractInfromationTemplate from './HomePageAbstractInfromationTemplate';
import { DataContext } from '../../config/DataContext';

export default function HomePageAbstract() {

  const dataContext = useContext(DataContext)

  return (
    <div className="relative flex items-center justify-center  h-screen bg-cream p-5">

      <HomePageAbstractInfromationTemplate title='The Cultural Heart of Java' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum magnam officia quis suscipit officiis molestias, tenetur quo assumenda enim nisi sequi inventore eius velit corrupti quas qui debitis itaque voluptates reiciendis. Quisquam et doloremque veniam ratione id iusto sequi dignissimos. At fugit vero numquam quidem, officia eius.'/>
      
      <img className='z-0 max-w-80 absolute top-1/2 right-0 -translate-y-1/2 max-mobile:max-w-64 max-tablet:opacity-20' src={dataContext.imageDic['wayang-gunungan.png']} alt="" />
    </div>
  )
}