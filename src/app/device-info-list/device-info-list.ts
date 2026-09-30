import { Component, input } from '@angular/core';
import { DockerContainerList, type DockerContainer } from '../constants/DockerContainerList';

export interface DeviceInfoItem {
  id: string;
  title: string;
  description: string;
  label?: string;
  logo?: string;
}

function createDeviceInfoItems(containers: readonly DockerContainer[]): DeviceInfoItem[] {
  return containers.flatMap(({ children, ...item }) => [
    item,
    ...createDeviceInfoItems(children ?? []),
  ]);
}

@Component({
  selector: 'app-device-info-list',
  templateUrl: './device-info-list.html',
  styleUrl: './device-info-list.scss',
})
export class DeviceInfoList {
  readonly items = input<readonly DeviceInfoItem[]>(createDeviceInfoItems(DockerContainerList));
}
