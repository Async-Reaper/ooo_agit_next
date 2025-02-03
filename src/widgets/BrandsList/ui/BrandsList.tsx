import React, {useMemo} from "react";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./BrandsList.module.scss";
import Image from "next/image";

export const BrandsList = React.memo(() => {
   const brandsList = [
      {
         id: 1,
         src: "/la-roshe.webp",
         alt: "Alt name",
      },
      {
         id: 2,
         src: "/aliexpress.webp",
         alt: "Alt name",
      },
      {
         id: 3,
         src: "/la-roshe.webp",
         alt: "Alt name",
      },
      {
         id: 4,
         src: "/papa-johns.webp",
         alt: "Alt name",
      },
      {
         id: 5,
         src: "/aliexpress.webp",
         alt: "Alt name",
      },
   ];

   // const { ref, isVisible } = useViewBox(0.6);
   //
   // useLayoutEffect(() => {
   //    isVisible && animate([
   //       [`.${cls.brands_list__wrapper}`, { opacity: 1 }],
   //       [`.${cls.brand__item}`, { y: [-100, 0], opacity: [0, 1] }, {
   //          duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
   //       }],
   //    ]);
   // }, [isVisible]);

   return (
      <section
         id="brands"
         // ref={ref}
         className={cls.brands_list}>
         <ul className={cls.brands_list__wrapper}>
            {
               brandsList.map((brandItem) => (
                  <li key={brandItem.id} className={cls.brand__item}>
                     <Image src={brandItem.src} width={200} height={100} alt={brandItem.alt} />
                  </li>
               ))
            }
         </ul>
      </section>
   );
});
