import { useContext } from 'react';
import ListPageAbstractInfromationTemplate from './ListPageAbstractInfromationTemplate';
import { DataContext } from '../../config/DataContext';
import ListPageBackdrop from '../Home/ListPageBackdrop';
import { useParams } from 'react-router-dom';
import { DescriptionDic } from '../../config/DescriptionDic';

export default function ListPageAbstract() {

  const dataContext = useContext(DataContext)
  const {navChild} = useParams();
  console.log(DescriptionDic);
  
  return (
    <>
      <ListPageBackdrop/>
      <div className=" flex items-center justify-center  h-screen bg-cream p-5 max-tablet:relative">

        <ListPageAbstractInfromationTemplate title={DescriptionDic[navChild!].title} description={DescriptionDic[navChild!].description}/>
        
        <img src={dataContext.imageDic['ornament.png']} className='max-w-72 max-tablet:max-w-52 max-tablet:absolute max-tablet:top-1/2 max-tablet:left-1/2 max-tablet:-translate-x-1/2 max-tablet:-translate-y-1/2 max-tablet:opacity-25' alt="" />
      </div>
    </>
  )
}