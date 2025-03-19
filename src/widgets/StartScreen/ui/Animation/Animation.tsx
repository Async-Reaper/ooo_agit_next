import React, { useCallback, useLayoutEffect, useRef } from "react";
import { animate } from "motion";
import { useRouter } from "next/navigation";

import cls from "./Animation.module.scss";

export const Animation = React.memo(() => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const animated = useCallback(() => {
    animate(`.${cls.main__before}`, { opacity: [1, 0] }, {
      duration: 0.6,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });

    animate(`.${cls.main__after}`, { opacity: [0, 1] }, {
      duration: 0.6,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });

    animate(`.${cls.circular}`, { rotate: [0, 180] }, {
      duration: 0.6,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
  }, []);

  useLayoutEffect(() => {
    animated();
  }, [animated]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Получаем данные о размерах и положении элемента
    if (imagesRef.current) {
      const rect = imagesRef.current.getBoundingClientRect();

      // Вычисляем относительные координаты клика
      const relativeX = event.clientX - rect.left;
      const relativeY = event.clientY - rect.top;

      if (
        (relativeX < 431 && relativeX > 256 && relativeY < 206 && relativeY > 83) ||
        (relativeX < 201 && relativeX > 24 && relativeY < 327 && relativeY > 191) ||
        (relativeX < 476 && relativeX > 302 && relativeY < 469 && relativeY > 345) ||
        (relativeX < 706 && relativeX > 538 && relativeY < 311 && relativeY > 179)
      ) {
        router.replace("/cases");
      }
    }
  };

  return (
    <div ref={imagesRef} className={cls.images} onClick={handleClick}>
      <img className={cls.main__before} src="/animationParts/start/main_before.webp" alt=""/>
      <img className={cls.main__after} src="/animationParts/start/main_after.webp" alt=""/>
      <img className={cls.circular} src="/animationParts/start/circular.webp" alt=""/>
    </div>
  );
});
