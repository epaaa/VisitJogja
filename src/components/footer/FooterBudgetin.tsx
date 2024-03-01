export default function FooterBudgetin() {
    const floral = '../../../../public/footer/pattern_floral.png';
  
    return <>
        <div className="flex flex-col absolute bottom-0 -left-1">
            
            <img
                src={floral} // Replace with the actual link to your picture
                alt="footer image"
                className="w-full object-cover object-center h-20"
            />
        </div>
    </>
  }