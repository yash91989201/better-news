import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/top')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/top"!</div>
}
