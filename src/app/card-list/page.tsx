import {cn} from "@/lib/utils";
import React from "react";
import {Card} from "@/components/ui/card";
import {User} from "@/types";
import Image from "@/components/shared/Image";

async function getData() {
  const res = await fetch('https://random-data-api.com/api/v2/users?size=20')
  console.info("res", res);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CardList = async () => {
  const data = await getData()

  return (
    <div className={cn(['flex  flex-col gap-3.5 md:gap-8 lg:gap-16', 'p-3.5 md:p-8 lg:p-16'])}>
      <h1 className={cn(['text-6xl text-center'])}>Card List</h1>

      <div className={cn(['flex flex-1 justify-center flex-wrap gap-2.5 lg:gap-8'])}>
        {
          data && data.map((user: User, key: number) => {
            return (
              <Card
                key={user.id}
                className={cn(['p-2.5 md:p-8 min-w-full md:min-w-[320px] lg:min-w-[350px]', 'flex flex-col items-center', 'shadow-md'])}
              >
                <Image
                  className={cn(['rounded-full border bg-black'])}
                  alt={`${user.first_name} ${user.last_name} Photo`}
                  src={user.avatar}
                  width={120}
                  height={120}
                />
                <div className={cn(['my-2.5'])}>
                  <h3 className={cn(['text-center text-base'])}>{user.first_name} {user.last_name}</h3>

                  <div className={'flex flex-col items-start mt-2.5 lg:mt-4 gap-2.5'}>
                    <h3 className={cn(['text-sm'])}>Phone: {user.phone_number}</h3>
                    <h3 className={cn(['text-sm'])}>Email: {user.email}</h3>
                    <h3 className={cn(['text-sm'])}>Gender: {user.gender}</h3>
                  </div>
                </div>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default CardList
