'use client'
import {CenteredContent} from '@/components/layouts/CenteredContent'
import {cn} from '@/lib/utils'
import React from 'react'
import {Input} from '@/components/ui/input'
import Image from '@/components/shared/Image'
import {Button} from '@/components/ui/button'

const SimpleCalculator = () => {
  const [sum, setSum] = React.useState<number>(0)
  const [input, setInput] = React.useState<{ firstNum: number, secondNum: number }>({
    firstNum: 0,
    secondNum: 0,
  })

  React.useEffect(() => {
    const addOperation = input.firstNum + input.secondNum

    setSum(addOperation)
  }, [input])

  function handleReset() {
    setInput({
      firstNum: 0,
      secondNum: 0
    })
  }


  return (
    <CenteredContent className={cn(['flex-col gap-8 lg:gap-16'])}>
      <h1 className={cn(['text-6xl text-center'])}>Simple Calculator</h1>

      <div className={cn(['flex flex-col items-center gap-2.5'])}>
        <div className={cn(['flex flex-col md:flex-row items-center gap-2.5'])}>
          <Input
            value={input.firstNum.toString()}
            onChange={(event) => setInput(prevState => ({
              ...prevState,
              firstNum: event.target.value ? event.target.valueAsNumber : 0
            }))}
            placeholder={'Enter First Number'}
            type={'number'}
          />

          <Image alt={'Add Operator Icon'} src={'/svg/add.svg'} width={24} height={24}/>

          <Input
            value={input.secondNum.toString()}
            onChange={(event) => setInput(prevState => ({
              ...prevState,
              secondNum: event.target.value ? event.target.valueAsNumber : 0
            }))}
            placeholder={'Enter Second Number'}
            type={'number'}
          />
        </div>

        <h2 className={cn(['text-base my-4 animate-fade-out',
          {'invisible ': input.firstNum === 0 || input.secondNum === 0},
          {'animate-fade-in': input.firstNum !== 0 && input.secondNum !== 0}])}
        >
          {`The sum of two numbers is ${sum}`}
        </h2>

        <Button
          className={cn('min-w-52 gap-3')}
          variant={'outline'}
          onClick={handleReset}
          disabled={input.firstNum === 0 || input.secondNum === 0}
        >
          <Image alt={'Reset Icon'} src={'/svg/reset.svg'} width={24} height={24}/>
          Reset
        </Button>
      </div>
    </CenteredContent>
  )
}

export default SimpleCalculator
