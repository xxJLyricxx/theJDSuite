export interface LotusSentinelFeature {
  id: string;
  title: string;
  description: string;
  label?: string;
  logo?: string;
  children?: readonly LotusSentinelFeature[];
}

export const LotusSentinelFeatureList: readonly LotusSentinelFeature[] = [
  {
  id: 'uptime-kuma',
  title: 'Uptime Kuma',
  label: 'Service Monitoring',
  description: 'Monitors the availability of WhiteLotus, its services, and external endpoints and sends outage notifications.',
  logo: 'uptimekuma.svg',
},
{
  id: 'uptime-robot',
  title: 'UptimeRobot',
  label: 'External Monitoring',
  description: 'Monitors my public-facing services from outside my home network to detect external outages and connectivity problems.',
  logo: 'uptimekuma.svg',
},
{
  id: 'adguard-home',
  title: 'AdGuard Home',
  label: 'DNS Server',
  description: 'Provides local DNS services, network-wide DNS filtering, and local domain overrides for my network.',
  logo: 'adguard_home.svg',
},
{
  id: 'local-monitoring',
  title: 'Local Service Monitoring',
  label: 'Network Monitoring',
  description: 'Checks WhiteLotus and its services directly over the local network to identify server or service failures.',
  logo: 'local-monitoring-logo.svg',
},
{
  id: 'external-monitoring',
  title: 'External Service Monitoring',
  label: 'External Monitoring',
  description: 'Checks my public-facing services from their domain endpoints to identify external access, DNS, proxy, or internet failures.',
  logo: 'external-monitoring-logo.svg',
},
{
  id: 'local-dns',
  title: 'Local DNS',
  label: 'Network Infrastructure',
  description: 'Routes local requests for my public service domains directly to WhiteLotus while devices are connected to my home network.',
  logo: 'local-dns-logo.svg',
},
];
