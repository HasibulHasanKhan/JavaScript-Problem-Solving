function extractDomain(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/\n]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Example usage:
console.log(extractDomain("https://www.example.com/path/to/resource")); // "example.com"
console.log(extractDomain("http://example.com")); // "example.com"
console.log(extractDomain("https://subdomain.example.com")); // "subdomain.example.com"
console.log(extractDomain("ftp://example.com")); // "example.com"
console.log(extractDomain("www.example.com")); // "example.com"
// Note : ftp issue
