export interface DockerContainer {
  id: string;
  title: string;
  description: string;
  label?: string;
  logo?: string;
  children?: readonly DockerContainer[];
}

export const DockerContainerList: readonly DockerContainer[] = [
  {
    id: 'jellyfin',
    title: 'Jellyfin',
    label: 'Media Server',
    logo: 'jellyfin.svg',
    description: 'Hosts and streams my movie and TV library to local and remote devices.',
  },
  {
    id: 'sonarr',
    title: 'Sonarr',
    label: 'Media Management',
    logo: 'sonarr.svg',
    description: 'Manages TV series, monitors episodes, and helps organize and download television content.',
  },
  {
    id: 'radarr',
    title: 'Radarr',
    label: 'Media Management',
    logo: 'radarr.svg',
    description: 'Manages movies, monitors releases, and helps organize and download movie content.',
  },
  {
    id: 'immich',
    title: 'Immich',
    label: 'Photo Management',
    logo: 'immich.svg',
    description: 'Hosts, organizes, backs up, and browses my personal photos and videos.',
  },
  {
    id: 'immich-postgres',
    title: 'Immich PostgreSQL',
    label: 'Database',
    logo: 'postgresql.svg',
    description: 'Stores Immich application data, metadata, users, albums, and other structured information.',
  },
  {
    id: 'immich-redis',
    title: 'Immich Redis / Valkey',
    label: 'Cache / Messaging',
    logo: 'valkey.svg',
    description: 'Provides fast caching and background task coordination for Immich.',
  },
  {
    id: 'immich-machine-learning',
    title: 'Immich Machine Learning',
    label: 'AI / Media Processing',
    logo: 'immich.svg',
    description: 'Handles Immich features such as facial recognition, image analysis, and smart search.',
  },
  {
    id: 'nextcloud',
    title: 'Nextcloud',
    label: 'Cloud Storage',
    logo: 'nextcloud.svg',
    description: 'Provides private file storage, syncing, sharing, and remote access to files.',
  },
  {
    id: 'home-assistant',
    title: 'Home Assistant',
    label: 'Home Automation',
    logo: 'home-assistant.svg',
    description: 'Controls and integrates smart-home devices, automations, scenes, and connected services.',
  },
  {
    id: 'guest-portal',
    title: 'Guest Portal',
    label: 'Web Service',
    logo: 'nextcloud.svg',
    description: 'Hosts the guest-facing web portal for my WhiteLotus environment.',
  },
  {
    id: 'nginx-proxy-manager',
    title: 'Nginx Proxy Manager',
    label: 'Reverse Proxy',
    logo: 'nginx-proxy-manager.svg',
    description: 'Routes domain traffic to internal services and manages HTTPS and SSL certificates.',
  },
  {
    id: 'mysql-lab',
    title: 'MySQL Lab',
    label: 'Database',
    logo: 'mysql.svg',
    description: 'Provides a MySQL database environment for learning, development, and storing structured application data.',
  },
  {
    id: 'ssh',
    title: 'SSH',
    label: 'Remote Administration',
    logo: 'nextcloud.svg',
    description: 'Provides command-line remote access to WhiteLotus for management and troubleshooting.',
  },
  {
    id: 'samba',
    title: 'Samba',
    label: 'File Sharing',
    logo: 'samba-server.svg',
    description: 'Shares WhiteLotus storage across the local network, especially with Windows devices.',
  },
  {
    id: 'tailscale',
    title: 'Tailscale',
    label: 'VPN / Remote Access',
    logo: 'tailscale.svg',
    description: 'Creates a private encrypted network for securely accessing WhiteLotus remotely.',
  },
  {
    id: 'avahi-mdns',
    title: 'Avahi / mDNS',
    label: 'Network Discovery',
    logo: 'avahi-logo.svg',
    description: 'Allows devices and services to discover each other automatically on the local network.',
  },
  {
    id: 'go2rtc',
    title: 'go2rtc',
    label: 'Media / Streaming',
    logo: 'go2rtc.png',
    description: 'Provides real-time video and media stream handling used alongside Home Assistant.',
  },
];
