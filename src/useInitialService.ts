import * as esbuild from 'esbuild-wasm'
import { useState, useEffect, useRef } from 'react'


const useInitialService = () => {
  const ref = useRef<any>()
  const [input, setInput] = useState<string>('')
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    startService()
  },[])

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015"
    })

    setCode(result.code)
  }

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    })
  }

  return {
    code,
    input,
    onClick,
    setInput,
  }
}

export default useInitialService;
