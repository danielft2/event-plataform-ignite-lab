import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
   query {
      lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
         id
         lessonType
         availableAt
         title
         slug
      }
   }
`

interface GetLessonsQueryResponse {
   lessons: {
      id: string;
      slug: string;
      title: string;
      availableAt: string;
      lessonType: 'live' | 'class'
   }[]
}

interface SidebarProps {
   menuMobileIsActive: boolean;
}

export function Siderbar({ menuMobileIsActive }: SidebarProps) {

   const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

   let mobileStyles = '';
   (menuMobileIsActive) ? mobileStyles = 'right-0' : mobileStyles = '-right-full';
 
   return (
      <aside className={`w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:absolute transition-all ${mobileStyles} top-0 bottom-0 z-10 sm:w-full`}>
         <span className="font-bold text-xl pb-6 mb-6 border-b border-gray-500 block">
            Cronogramas de Aulas
         </span>

         <div className="flex flex-col gap-8">
            {data?.lessons.map(lesson => {
               return <Lesson 
                  key={lesson.id}
                  title={lesson.title}
                  slug={lesson.slug}
                  availableAt={new Date(lesson.availableAt)}
                  type={lesson.lessonType}
               />
            })}
         </div>
      </aside>
    )
}