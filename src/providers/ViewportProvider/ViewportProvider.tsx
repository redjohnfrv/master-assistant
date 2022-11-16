import React, {createContext, ReactNode, useEffect, useState} from 'react'export const ViewportContext = createContext({  width: 0,  height: 0,});type Props = {  children: ReactNode}export const ViewportProvider = ({ children }: Props) => {  const [width, setWidth] = useState(0);  const [height, setHeight] = useState(0);  const handleWindowResize = () => {    setWidth(window.innerWidth);    setHeight(window.innerHeight);  };  useEffect(() => {    if (typeof window !== 'undefined') {      handleWindowResize();    }  }, []);  useEffect(() => {    window.addEventListener('resize', handleWindowResize);    return () => window.removeEventListener('resize', handleWindowResize);  }, []);  /* Now we are dealing with a context instead of a Hook, so instead     of returning the width and height we store the values in the     value of the Provider */  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;};