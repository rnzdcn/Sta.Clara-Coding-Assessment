import {CenteredContent} from "@/components/layouts/CenteredContent";
import {cn} from "@/lib/utils";

export default function Home() {
  return (
    <CenteredContent className={cn('p-3.5 md:p-8 lg:p-16')}>
      <p>As part of the coding section activity, the webpage offers users a rich assortment of interactive elements and
        dynamic content sourced from APIs. Users can actively engage with various features such as the counter,
        calculator, and todo list functionalities, each providing a hands-on coding experience. Additionally, users can
        explore visually captivating cards displaying information fetched from selected APIs. Furthermore, the inclusion
        of the centered button adds an element of simplicity and enjoyment to the coding activity, enhancing user
        interaction and experience.</p>
    </CenteredContent>
  );
}
