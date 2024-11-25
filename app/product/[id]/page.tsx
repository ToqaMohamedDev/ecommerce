import React from 'react'
interface PageProps {
    params: {
      id: string;
    };
  }
  
export default function OneProduct({params}:PageProps) {
  return (
    <div>{params.id}</div>
  )
}
