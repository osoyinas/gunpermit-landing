import { Topic } from '@/types/Topic'
import React, { useEffect, useState } from 'react'
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
import { useTopics } from '@hooks/api/quizzes/useTopics'
import { QuizCategory } from '@/types/Quizzes'
import { useQuizzes } from '@hooks/api/quizzes/useQuizzes'

export function DesktopContentMenu () {
  const [topics, setTopics] = useState<Topic[] | undefined>()
  const [categories, setCategories] = useState<QuizCategory[] | undefined>()
  const { getTopics } = useTopics()
  const { getQuizCategories } = useQuizzes()
  useEffect(() => {
    const fetchTopics = async () => {
      const response = await getTopics()
      if (response.ok) {
        setTopics(response.val)
      }
    }
    const fetchCategories = async () => {
      const response = await getQuizCategories()
      if (response.ok) {
        setCategories(response.val)
      }
    }

    fetchTopics()
    fetchCategories()
  }, [])

  const tests = categories?.map((category) => ({
    title: category.title,
    href: `/tests/${category.id}`,
    description: category.description
  }))

  const resources = topics?.map((topic) => ({
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
