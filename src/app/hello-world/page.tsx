import {cn} from '@/lib/utils'
import {Metadata} from 'next'
import {CenteredContent} from '@/components/layouts/CenteredContent'

export const generateMetadata = (): Metadata => {
  return {title: 'Hello World'}
}

const HelloWorld = () => {
  return (
    <CenteredContent>
      <h1 className={cn(['text-6xl uppercase'])}>Hello World</h1>
    </CenteredContent>
  )
}

export default HelloWorld
