'use client'
import {Children} from '@/types'
import {cn} from '@/lib/utils'
import SideNav from '@/components/SideNav'

const MainLayout = ({children}: Children) => {
  return (
    <main className={cn(['min-h-screen w-full', 'flex'])}>
      <SideNav/>

      <section className={cn(['flex-1'])}>
        {children}
      </section>
    </main>
  )
}

export default MainLayout
