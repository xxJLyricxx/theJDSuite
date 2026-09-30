import { Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { DeviceInfoList } from '../../device-info-list/device-info-list';
import { NavBar } from '../../navbar/navbar';
import { LotusSentinelFeatureList } from '../../constants/LotusSentinelFeatureList';

@Component({
  selector: 'app-lab',
  imports: [DeviceInfoList, NavBar],
  templateUrl: './lab.html',
  styleUrl: './lab.scss',
  host: { '(keydown.escape)': 'closeDevice()' },
})
export class Lab implements OnDestroy {
  readonly lotusSentinelFeatures = LotusSentinelFeatureList;
  readonly selectedDevice = signal<string | null>(null);
  readonly fadingOut = signal(false);
  readonly infoPanel = viewChild<ElementRef<HTMLElement>>('infoPanel');
  private trigger: HTMLButtonElement | null = null;
  private transitionTimer?: ReturnType<typeof setTimeout>;
  private focusTimer?: ReturnType<typeof setTimeout>;

  openDevice(name: string, event: MouseEvent) {
    this.trigger = event.currentTarget as HTMLButtonElement;
    this.clearTimers();

    if (this.selectedDevice() && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.fadingOut.set(true);
      // Keep the old content visible until its fade-out finishes.
      this.transitionTimer = setTimeout(() => this.showDevice(name), 300);
    } else {
      this.showDevice(name);
    }
  }

  private showDevice(name: string) {
    this.selectedDevice.set(name);
    this.fadingOut.set(false);
    this.focusTimer = setTimeout(() => this.infoPanel()?.nativeElement.focus());
  }

  closeDevice() {
    if (!this.selectedDevice()) return;
    this.clearTimers();
    this.fadingOut.set(false);
    this.selectedDevice.set(null);
    this.trigger?.focus();
  }

  ngOnDestroy() {
    this.clearTimers();
  }

  private clearTimers() {
    clearTimeout(this.transitionTimer);
    clearTimeout(this.focusTimer);
  }
}
