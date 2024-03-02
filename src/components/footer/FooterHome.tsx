export default function FooterHome() {
    const diamond = '../../../../public/footer/pattern_diamond.png';
    const tunas = '../../../../public/footer/tunas1.png';
  
    return <>
        <div className="flex flex-col absolute bottom-0">
            <div className="flex justify-center">
                <img
                    src={tunas} // Replace with the actual link to your picture
                    alt="footer image"
                    className="w-8"
                />
            </div>
            
            <img
                src={diamond} // Replace with the actual link to your picture
                alt="footer image"
                className="w-full object-cover object-center h-20"
            />
        </div>
    </>
  }