import {cn} from '@/lib/utils'

const NotFound = () => {
  return (
    <section className={cn(['flex justify-center items-center flex-col', 'h-screen'])}>
      <h1>Page not found</h1>
      <h3>Could not find requested resource</h3>
    </section>
  )
}

export default NotFound
