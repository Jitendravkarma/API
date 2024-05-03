import { memo, useEffect } from 'react'

const ToTop = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
  return null;
}

export default memo(ToTop);