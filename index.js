export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Always fetch from your Tumblr blog
    const target = "https://fullofintent.tumblr.com" + url.pathname + url.search;

    // Forward request to Tumblr
    const response = await fetch(target, {
      method: request.method,
      headers: request.headers
    });

    // Return Tumblr response but rewrite the host in the HTML
    let text = await response.text();
    text = text.replace(/fullofintent\.tumblr\.com/g, "stargym.in");

    return new Response(text, {
      status: response.status,
      headers: response.headers
    });
  }
};
