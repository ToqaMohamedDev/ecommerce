'use client'
import { useEffect } from 'react';

interface ScrollableProps {
    enableScroll:boolean,
}
const Scrollable = ({ enableScroll }:ScrollableProps) => {
  useEffect(() => {
    document.body.style.overflowY = enableScroll ? 'scroll' : 'hidden';

    return () => {
      document.body.style.overflowY = 'hidden'
    };
  }, [enableScroll]);

  return null;
};

export default Scrollable;
