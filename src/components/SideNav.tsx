import {cn} from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

type Menu = {
  href: string,
  title: string
}
const menus: Array<Menu> = [
  {
    href: '/hello-world',
    title: 'Hello World',
  },
  {
    href: '/counter-app',
    title: 'Counter Application',
  },
  {
    href: '/simple-calculator',
    title: 'Simple Calculator',
  },
  {
    href: '/centered-button',
    title: 'Grow Button',
  },
  {
    href: '/todo-list',
    title: 'Todo List',
  },
  {
    href: '/card-list',
    title: 'Fetch API',
  },
]

const SideNav = () => {
  return (
    <div className={cn(['side-nav', 'hidden lg:block transition-all ease-in-out duration-500', 'min-w-96', 'border-r-2', 'p-3.5 md:p-10'])}>
      <div className={cn(['py-3.5 md:py-10'])}>
        <h1 className={cn(['text-center text-2xl'])}>Activity 1</h1>
      </div>

      <ul className={cn(['flex flex-col gap-3.5 md:gap-8'])}>
        {
          Array.from(menus, ({title, href}, key) => {
            return (
              <Link
                key={key}
                className={'flex items-center justify-between shadow-md p-2.5 md:p-3.5'}
                href={href}
              >
                {title}
                <Image
                  src={'/svg/chevron_right.svg'}
                  alt={'Chevron Right Icon'}
                  width={24}
                  height={24}
                />
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SideNav
