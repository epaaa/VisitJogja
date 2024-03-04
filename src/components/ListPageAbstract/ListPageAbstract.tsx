import { useContext } from 'react';
import ListPageAbstractInfromationTemplate from './ListPageAbstractInfromationTemplate';
import { DataContext } from '../../config/DataContext';
import ListPageBackdrop from '../Home/ListPageBackdrop';

export default function ListPageAbstract() {

  const dataContext = useContext(DataContext)

  return (
    <>
      <ListPageBackdrop/>
      <div className=" flex items-center justify-center  h-screen bg-cream p-5 max-tablet:relative">

        <ListPageAbstractInfromationTemplate title='Jogja Landmarks' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum magnam officia quis suscipit officiis molestias, tenetur quo assumenda enim nisi sequi inventore eius velit corrupti quas qui debitis itaque voluptates reiciendis. Quisquam et doloremque veniam ratione id iusto sequi dignissimos. At fugit vero numquam quidem, officia eius.'/>
        
        <img src={dataContext.imageDic['ornament.png']} className='max-w-72 max-tablet:max-w-52 max-tablet:absolute max-tablet:top-1/2 max-tablet:left-1/2 max-tablet:-translate-x-1/2 max-tablet:-translate-y-1/2 max-tablet:opacity-25' alt="" />
      </div>
    </>
  )
}