import { useEffect, useRef, useState } from "react";

const useCilckOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const handleCilckOutside =(event) => {
      if (ref.current && !ref.current.contains(event.target)){
        setExpanded(false)
      }
    }
    document.addEventListener('mouseup', handleCilckOutside)
    return () => {
      document.removeEventListener('mouseup',handleCilckOutside)
    }
  
},[ref]);

    return { expanded, setExpanded, ref }; 
};

export default useCilckOutsideToggle
