import React from 'react';
import RootLayout from '@/layouts/RootLayout';
import './EditorLayout.scss'
import NavBar from '@/containers/NavBar';
import PageFooter from '@/components/PageFooter';


export default ({children})=>{
  return(
    <RootLayout className="editorPage">
        <NavBar />
        {children}
        <PageFooter />
        
    </RootLayout>
  );
}