function Page() {
  return <div>You've hit a valid page!</div>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["one"] } }, // See the "paths" section below
      { params: { slug: ["two"] } }, // See the "paths" section below
      { params: { slug: ["nested", "three"] } } // See the "paths" section below
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
	return { props: {} }
}

export default Page
