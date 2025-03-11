import { useRouter } from "next/router";
import LRUCache from "lru-cache"; // ✅ Default import for v6
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

// Setup LRU cache (use maxAge instead of ttl in v6)
const cache = new LRUCache({
  max: 100, 
  maxAge: 60 * 60 * 1000 // Cache for 1 hour
});

export async function getServerSideProps({ params }) {
  const subdomain = params.dynamic;
  const cacheKey = `subdomain:${subdomain}`;

  // Check cache first
  let data = cache.get(cacheKey);

  if (!data) {
    try {
      const res = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slug/${subdomain}`);
      data = await res.json();
      cache.set(cacheKey, data);
    } catch (error) {
      return { notFound: true }; // Return 404 if API fails
    }
  }

  return { props: { data, subdomain } };
}

export default function SubdomainPage({ data, subdomain }) {
  return (
    <div>
      <h1>Welcome to {subdomain}</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
