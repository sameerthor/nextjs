import NextErrorComponent from "next/error";

export default function ErrorPage({ statusCode }) {
  return <NextErrorComponent statusCode={statusCode} />;
}

ErrorPage.getInitialProps = async (contextData) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(contextData);

  return {
    ...errorInitialProps,
    statusCode: contextData.res?.statusCode || contextData.err?.statusCode || 404,
  };
};
