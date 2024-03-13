'use client'
import {CenteredContent} from '@/components/layouts/CenteredContent'
import Image from '@/components/shared/Image'
import React from 'react'
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'

type buttonType = {
  title: string;
  alt: string;
  src: string;
  opt: string;
}

const buttons: Array<buttonType> = [
  {
    title: 'Increment',
    alt: 'Increment Icon',
    src: '/svg/add.svg',
    opt: 'increment',
  },
  {
    title: 'Decrement',
    alt: 'Decrement Icon',
    src: '/svg/remove.svg',
    opt: 'decrement',
  },
  {
    title: 'Reset',
    alt: 'Reset Icon',
    src: '/svg/reset.svg',
    opt: 'reset',
  },
]

const CounterApplication = () => {
  const [count, setCount] = React.useState<number>(0)
  const [isOdd, setIsOdd] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (count % 2 === 0) {
      setIsOdd(false)
    } else {
      setIsOdd(true)
    }
  }, [count])

  function handleCount(operation: string) {
    if (operation === 'increment') {
      setCount(prevState => prevState + 1)
    } else if (operation === 'decrement') {
      setCount(prevState => prevState - 1)
    } else {
      setCount(0)
    }
  }

  return (
    <CenteredContent className={cn(['flex-col gap-3.5 md:gap-8 lg:gap-16'])}>
      <h1 className={cn(['text-6xl'])}>Counter Application</h1>

      <div className={cn(['flex flex-col items-center gap-2.5'])}>
        <h2 className={'text-4xl'}>{count}</h2>
        <h3>{`The number is ${isOdd ? 'odd' : 'even'}`}</h3>

        <div className={cn(['flex items-center gap-3.5 md:gap-8', 'mt-8'])}>
          {
            Array.from(buttons, ({title, src, alt, opt}, key) => (
              <Button
                key={key}
                className={cn('min-w-52 gap-3')}
                variant={'outline'}
                onClick={() => handleCount(opt)}
                disabled={(count === 0 && title === 'Decrement') || count === 0 && title === 'Reset'}
              >
                <Image alt={alt} src={src} width={24} height={24}/>
                {title}
              </Button>
            ))
          }
        </div>

      </div>
    </CenteredContent>
  )
}

export default CounterApplication
