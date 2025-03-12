import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";
  console.log(hostname,"hostname")
  // Ensure only subdomains get processed
  if (hostname === "scoopreview.com" || hostname === "localhost" || hostname.includes("::1") || hostname === "www.scoopreview.com") {
    return NextResponse.next();
  }

  const subdomain = hostname.replace(".scoopreview.com", "");

  console.log(`Middleware processing subdomain: ${subdomain}`);

  // Rewrite the request to the correct subdomain route
  url.pathname = `/subdomain-route/${subdomain}`;
  return NextResponse.rewrite(url);
}

// Apply middleware to all paths
export const config = {
  matcher: "/:path*",
};
