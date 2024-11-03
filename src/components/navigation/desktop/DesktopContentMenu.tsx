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
import { getQuizCategories } from '@/services/quizzes/getQuizCategories'
import { axiosServerInstance } from '@/lib/axios/serverAxios'
import { getTopics } from '@/services/topics/getTopics'
export async function DesktopContentMenu () {
  const categories = await getQuizCategories(axiosServerInstance)
  const topics = await getTopics(axiosServerInstance)

  if (!categories.ok || !topics.ok) return null

  const tests = categories.val.map((category) => ({
    title: category.title,
    href: `/tests/categories/${category.tag}`,
    description: category.description
  }))

  const resources = topics.val.map((topic) => ({
    title: topic.title,
    href: `/resources/${topic.id}`,
    description: topic.description
  }))

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
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
