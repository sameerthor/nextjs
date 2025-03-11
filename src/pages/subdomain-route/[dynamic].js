import { useRouter } from "next/router";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

// Setup LRU cache (use maxAge instead of ttl in v6)


export async function getServerSideProps({ params }) {
  const subdomain = params.dynamic;



    try {
      const res = await fetch(`${publicRuntimeConfig.apiBaseUrl}/api/slug/${subdomain}`);
     var data = await res.json();
   
    } catch (error) {
      return { notFound: true }; // Return 404 if API fails
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
