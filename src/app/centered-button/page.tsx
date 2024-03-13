'use client'
import {cn} from '@/lib/utils'
import Image from '@/components/shared/Image'
import {Button} from '@/components/ui/button'
import React from 'react'

const CenteredButton = () => {
  const [colors, setColors] = React.useState<{ randomColor1: string, randomColor2: string } | null>(null)
  const [buttonSize, setButtonSize] = React.useState<{ height: number, width: number }>({
    width: 208,
    height: 40
  });

  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref || !colors) return

    const contentElement = ref.current

    if (contentElement) {
      contentElement.style.background = `linear-gradient(to bottom, ${colors.randomColor1}, ${colors.randomColor2})`
    }
  }, [colors, ref])

  function handleOnClick() {
    const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16)
    const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16)

    setColors({
      randomColor1,
      randomColor2,
    })

    // Double the button size
    setButtonSize(prevState => {
      return {
        width: prevState.width * 2,
        height: prevState.height * 2,
      }
    });
  }

  return (
    <div
      className={cn(['h-screen', 'flex items-center justify-center p-16'])}
      ref={ref}
    >
      <Button
        style={{width: buttonSize.width, height: buttonSize.height}} // Set the button size dynamically
        className={cn('min-w-52 gap-3 uppercase')}
        variant={'glass'}
        onClick={handleOnClick}
      >
        <Image alt={'Generate Icon'} src={'/svg/generate.svg'} width={24} height={24}/>
        Grow
      </Button>
    </div>
  )
}

export default CenteredButton
