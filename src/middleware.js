import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  // Skip if the request is for the main domain
  if (subdomain === "www" || hostname === "scoopreview.com") {
    return NextResponse.next();
  }

  // Rewrite the URL to match the dynamic route
  url.pathname = `/subdomain-route/${subdomain}`;
  return NextResponse.rewrite(url);
}
