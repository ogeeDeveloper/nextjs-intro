import Link from "next/link"
const Notes = () => {
  return (
    <div>
      <h1>Notes index page</h1>
      <Link href='/notes/[id]' as={`notes/1`}>
        <a>Note 1</a>
      </Link>
    </div>
  )
}

export default Notes
