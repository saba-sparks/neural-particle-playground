import { useState, useEffect, useRef } from 'react';

export const useAudioContext = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const analyserNode = context.createAnalyser();
    analyserNode.fftSize = 256;
    setAudioContext(context);
    setAnalyser(analyserNode);
  }, []);

  return { audioContext, analyser };
};