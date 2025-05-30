'use client'
import { useRef, useEffect , useState} from "react";
import Mysection from "../scrollSection/Mysection";
import client from "@/app/sanity/client";
import ClosiongNav from "../ClosingNav/ClosiongNav";
export default function Home() {
  const [data,setData]=useState()
  useEffect(() => {
    const homeData = async () => {
      try {
        const home = await client.fetch(`*[_type == "home"] {
          heading,
        }`);
        console.log(home);
        setData(home);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    };

    homeData();
  }, []);


  // "banner": banner.asset->{
  //   url
  // }

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();

  const sectionRefs = [section1, section2, section3, section4, section5];

  function scrollTo(section) {
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function goToNextSection(currentSectionRef) {
    const currentIndex = sectionRefs.findIndex(
      (sectionRef) => sectionRef.current === currentSectionRef.current
    );

    const nextIndex = (currentIndex + 1) % sectionRefs.length;
    scrollTo(sectionRefs[nextIndex]);
  }

  return (
    <div>
      <div className='Scroll-container sectionContainer'>
        <div className='dot-btns'>
          <button onClick={() => scrollTo(section1)}></button>
          <button onClick={() => scrollTo(section2)}></button>
          <button onClick={() => scrollTo(section3)}></button>
          {/* <button onClick={() => scrollTo(section4)}></button> */}
          <button onClick={() => scrollTo(section5)}></button>
        </div>
        <div ref={section1}>
          <Mysection
            video='/video/homePage.mp4'
            headline={"Unlisted shares are the shares of the company that are not listed on stock exchanges"}
            goToSectionRef={sectionRefs}
            scrollTo={() => scrollTo(section2)}
            showArrow={true}
            sectionIndex={0}
            totalSections={sectionRefs.length}
            goToNextSection={() => goToNextSection(section1)}
            link='/unlisted-stocks/'
          />
        </div>
        <div ref={section2}>
          <Mysection
            image="/images/Banner2.jpg"
            headline={"Comprehensive Insurance Solutions"}
            goToSectionRef={sectionRefs}
            scrollTo={() => scrollTo(section3)}
            showArrow={true}
            sectionIndex={1}
            totalSections={sectionRefs.length}
            link='/professional-indemnity-insurance/'
            goToNextSection={() => goToNextSection(section2)}
          />
        </div>
        <div ref={section3}>
        <Mysection
            image="/images/Banner3.jpg"
            headline={"Smart Financing for Construction Projects"}
            goToSectionRef={sectionRefs}
            scrollTo={() => scrollTo(section5)}
            showArrow={true}
            sectionIndex={2}
            link='/construction-finance/'
            totalSections={sectionRefs.length}
            goToNextSection={() => goToNextSection(section5)}
          />
          
        </div>
        {/* <div ref={section4}>
        <Mysection
            image="/images/Banner3.svg"
            headline={data && data[2] && data[2].heading}
            goToSectionRef={sectionRefs}
            scrollTo={() => scrollTo(section5)}
            showArrow={true}
            sectionIndex={2}
            link='/billDiscounting/'
            totalSections={sectionRefs.length}
            goToNextSection={() => goToNextSection(section5)}
          />
        </div> */}
        <div ref={section5}>
        <Mysection
            image="/images/Banner5.svg"
            goToSectionRef={sectionRefs}
            scrollTo={() => scrollTo(section4)}
            showArrow={false}
            linkSection={true}
            sectionIndex={2}
            totalSections={sectionRefs.length}
            goToNextSection={() => goToNextSection(section3)}
          />
        </div>
      </div>
    </div>
  );
}
