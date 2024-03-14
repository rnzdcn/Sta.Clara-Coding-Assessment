'use client'
import {cn} from '@/lib/utils'
import React from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import Image from '@/components/shared/Image'
import {Checkbox} from '@/components/ui/checkbox'

const TodoList = () => {
  const [todo, setTodo] = React.useState<string>('')

  const [todos, setTodos] = React.useState<string[]>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTodos = window.localStorage.getItem('todos')
      return storedTodos ? JSON.parse(storedTodos) : []
    } else {
      return []
    }
  })

  const [checkedItems, setCheckedItems] = React.useState<Array<number>>([])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, todo])
      setTodo('')
    }
  }

  const handleDeleteTodo = () => {
    setTodos(prevTodos => {
      return prevTodos.filter((_, index) => !checkedItems.includes(index))
    })
    setCheckedItems([]); // Clear the checked items after deleting
  }

  const toggleCheck = (index: number) => {
    setCheckedItems(prevState => {
      const isChecked = prevState.includes(index);
      if (isChecked) {
        // If checked, remove it from the array
        return prevState.filter(itemIndex => itemIndex !== index);
      } else {
        // If not checked, add it to the array
        return [...prevState, index];
      }
    })
  }

  return (
    <div className={cn(['flex items-center flex-col gap-3.5 md:gap-8 lg:gap-16', 'p-3.5 md:p-8 lg:p-16'])}>
      <h1 className={cn(['text-6xl text-center'])}>Todo List</h1>

      <div className={cn(['flex flex-col gap-8', 'w-full md:max-w-3xl'])}>
        <div className={cn(['flex flex-col sm:flex-row gap-2.5'])}>
          <Input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            placeholder={'Start typing'}
            type={'text'}
          />

          <div className={cn(['flex gap-2.5'])}>
            <Button
              className={cn('w-full md:min-w-32 gap-3')}
              variant={'outline'}
              onClick={handleAddTodo}
            >
              <Image alt={'Add Icon'} src={'/svg/add.svg'} width={24} height={24}/>
              Add
            </Button>

            <Button
              className={cn('w-full md:min-w-32 gap-3')}
              variant={'outline'}
              onClick={handleDeleteTodo}
            >
              <Image alt={'Delete Icon'} src={'/svg/delete.svg'} width={24} height={24}/>
              Delete
            </Button>
          </div>
        </div>

        <ul className={cn(['flex flex-col gap-3.5'])}>
          {
            Array.from(todos, (value, key) => {
              return (
                <li
                  key={key}
                  className={cn(['flex items-start gap-2.5'])}
                >
                  <Checkbox
                    onClick={() => toggleCheck(key)} // Toggle the checked state
                    checked={checkedItems.includes(key)} // Pass the checked state
                    className={'w-6 h-6'}
                  />
                  {value}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TodoList
