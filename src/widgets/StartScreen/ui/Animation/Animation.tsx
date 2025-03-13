import React, { useCallback, useLayoutEffect } from "react";
import { animate } from "motion";

import cls from "./Animation.module.scss";

export const Animation = React.memo(() => {
  const animated = useCallback(() => {
    animate(`.${cls.main__before}`, { opacity: [1, 0] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });

    animate(`.${cls.main__after}`, { opacity: [0, 1] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });

    animate(`.${cls.circular}`, { rotate: [0, 180] }, {
      duration: 0.3,
      repeat: Infinity, repeatType: "reverse", repeatDelay: 2
    });
  }, []);
  
  useLayoutEffect(() => {
    animated();
  }, [animated]);
  
  return (
    <div className={cls.images}>
      <img className={cls.main__before} src="/animationParts/start/main_before.png" alt=""/>
      <img className={cls.main__after} src="/animationParts/start/main_after.png" alt=""/>
      <img className={cls.circular} src="/animationParts/start/circular.png" alt=""/>
    </div>
  );
});
