import { useRouter } from "next/router"

const Page = () => {
  // Create Router
  const router = useRouter()
  // Get the ID like so
  const { id } = router.query
  return (
    <div>
      {/* The id will be printed on the page beside the Note */}
      <h1>Note #{id}</h1>
    </div>
  )
}

export default Page
