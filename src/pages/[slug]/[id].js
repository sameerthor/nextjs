import Error from 'next/error'
import { useEffect } from 'react'

export default function RedirectById({ page }) {

  useEffect(() => {
    if (page?.type === 'redirect') {
      const timer = setTimeout(() => {
        window.location.href = page.affiliate_url
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [page])

  if (page?.type === 'redirect') {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Redirecting you to the store…</h2>
        <p>Please wait a moment.</p>
        <p>
          If nothing happens,{' '}
          <a href={page.affiliate_url}>click here</a>.
        </p>
      </div>
    )
  }

  return <Error statusCode={404} />
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const res = await fetch(
    `https://nowthisreview.com/wp-json/ref/v1/store/${id}`
  )

  if (!res.ok) {
    return { notFound: true }
  }

  const data = await res.json()

  if (!data?.affiliate_url) {
    return { notFound: true }
  }

  return {
    props: {
      page: {
        type: 'redirect',
        affiliate_url: data.affiliate_url
      }
    }
  }
}
