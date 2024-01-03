const PROXY = "SOCKS5 127.0.0.1:25344"
const DOMAINS = [
  "fivetran.com",
  "whatismyipaddress.com",
];

function FindProxyForURL(url, host) {
//    if (DOMAINS.some(d => host?.includes(d))) {
//        return PROXY;
//    }
//    return "DIRECT";
  return PROXY;
}

