import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/new"!</div>
}
