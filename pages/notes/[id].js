import { useRouter } from "next/router"

const Page = () => {
  // Create Router
  const router = useRouter()
  // Get the ID like so
  const { id } = router.query
  return <div>Note #{id}</div>
}

export default Page
