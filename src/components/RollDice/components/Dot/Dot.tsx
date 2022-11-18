import React from 'react'

export const Dot = () => {
  const styles = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#000',
  } as const

  return <div style={styles}></div>
}