const PROXY = "PROXY 127.0.0.1:25345"
const DOMAINS = [
  "fivetran.com",
  "openai.com",
  "oaistatic.com",
];

function FindProxyForURL(url, host) {
  if (DOMAINS.some(d => host?.includes(d))) {
    return PROXY;
  }
  return "DIRECT";
}

