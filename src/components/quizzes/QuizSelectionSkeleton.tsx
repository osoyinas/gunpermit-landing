import * as React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { BreadcrumContainer } from './BreadcrumContainer'
import { Skeleton } from '@components/ui/skeleton'

export async function QuizSelectionSkeleton () {
  return (
    <BreadcrumContainer>
      <Breadcrumb className="mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tests">Tests</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span className="text-xl">/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage></BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Table className="max-w-3xl mt-4">
      <TableHeader>
          <TableRow>
            <TableHead>Test</TableHead>
            <TableHead className="text-right">Nota</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-6 w-28" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-6 w-12 ml-auto" />
              </TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Skeleton className="h-6 w-20" />
                  <aside>
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-3 w-18 mt-1" />
                  </aside>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BreadcrumContainer>
  )
}
