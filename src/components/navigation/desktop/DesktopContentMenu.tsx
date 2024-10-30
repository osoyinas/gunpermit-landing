import { Topic } from '@/types/Topic'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { ListItem } from './ListItem'
import { QuizCategory } from '@/types/Quizzes'
import { getTopics } from '@/services/topics/getTopics'
import { getQuizCategories } from '@/services/quizzes/getQuizCategories'

export async function DesktopContentMenu () {
  const topicsResponse = await getTopics()

  const categoriesResponse = await getQuizCategories()

  let topics = [] as Topic[]
  let categories = [] as QuizCategory[]

  if (topicsResponse.ok) {
    topics = topicsResponse.val
  }
  if (categoriesResponse.ok) {
    categories = categoriesResponse.val
  }
  const tests = categories.map((category) => ({
    title: category.title,
    href: `/tests/categories/${category.tag}`,
    description: category.description
  }))

  const resources = topics.map((topic) => ({
    title: topic.title,
    href: `/resources/${topic.id}`,
    description: topic.description
  }))

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/tests' legacyBehavior passHref >
            <NavigationMenuTrigger>Hacer Exámenes</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tests?.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Material de estudio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources?.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
