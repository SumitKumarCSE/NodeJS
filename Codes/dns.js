const dns = require('dns');

// Resolving a domain name to an IP address
dns.lookup('example.com', (err, address, family) => {
  if (err) {
    console.error(err);
  } else {
    console.log('IP address:', address);
    console.log('IP version:', family === 4 ? 'IPv4' : 'IPv6');
  }
});

// Performing a reverse IP address lookup
dns.reverse('192.0.2.1', (err, hostnames) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Hostnames:', hostnames);
  }
});

// Resolving DNS records
dns.resolve('example.com', 'MX', (err, records) => {
  if (err) {
    console.error(err);
  } else {
    console.log('MX records:', records);
  }
});

// Resolving CNAME record
dns.resolveCname('www.example.com', (err, cname) => {
  if (err) {
    console.error(err);
  } else {
    console.log('CNAME:', cname);
  }
});
