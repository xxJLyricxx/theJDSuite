import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../../navbar/navbar';

type JournalStatus = 'Shipped' | 'In progress' | 'Research';
interface JournalEntry { id: number; date: string; title: string; summary: string; project: string; status: JournalStatus; tags: string[]; duration: string; }

@Component({ selector: 'app-journal', imports: [CommonModule, FormsModule, NavBar], templateUrl: './journal.html', styleUrl: './journal.scss' })
export class JournalComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'jd-engineering-journal';
  searchTerm = ''; activeFilter = 'All entries'; showComposer = false; submitted = false;
  readonly filters = ['All entries', 'Shipped', 'In progress', 'Research'];
  newEntry: Omit<JournalEntry, 'id'> & { tagsInput: string } = this.emptyEntry();
  entries: JournalEntry[] = [
    { id: 1, date: '2026-08-14', title: 'Built the project telemetry pipeline', summary: 'Connected application events to a lightweight observability stack and added a dashboard for deploy health, errors, and request latency.', project: 'The JD Suite', status: 'Shipped', tags: ['Angular', 'Telemetry', 'DevOps'], duration: '3h 40m' },
    { id: 2, date: '2026-08-11', title: 'Redesigned the deployment workflow', summary: 'Moved repeated release steps into one versioned workflow. Preview builds now run before production and report their status automatically.', project: 'Platform', status: 'In progress', tags: ['CI/CD', 'Automation'], duration: '2h 15m' },
    { id: 3, date: '2026-08-07', title: 'Evaluated local-first data sync', summary: 'Compared conflict-resolution approaches for offline edits. Documented the tradeoffs between last-write-wins and operation-based syncing.', project: 'R&D', status: 'Research', tags: ['Architecture', 'Local-first'], duration: '1h 50m' },
  ];
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const stored = localStorage.getItem(this.storageKey);
    if (stored) { try { this.entries = JSON.parse(stored) as JournalEntry[]; } catch { localStorage.removeItem(this.storageKey); } }
  }
  get filteredEntries(): JournalEntry[] {
    const query = this.searchTerm.trim().toLowerCase();
    return this.entries.filter((entry) => (this.activeFilter === 'All entries' || entry.status === this.activeFilter) && (!query || `${entry.title} ${entry.summary} ${entry.project} ${entry.tags.join(' ')}`.toLowerCase().includes(query)));
  }
  get shippedCount(): number { return this.entries.filter((entry) => entry.status === 'Shipped').length; }
  setFilter(filter: string): void { this.activeFilter = filter; }
  openComposer(): void { this.submitted = false; this.showComposer = true; }
  closeComposer(): void { this.showComposer = false; this.newEntry = this.emptyEntry(); }
  saveEntry(): void {
    this.submitted = true;
    if (!this.newEntry.title.trim() || !this.newEntry.summary.trim()) return;
    const { tagsInput, ...entry } = this.newEntry;
    this.entries = [{ ...entry, id: Date.now(), title: entry.title.trim(), summary: entry.summary.trim(), project: entry.project.trim() || 'General', tags: tagsInput.split(',').map((tag) => tag.trim()).filter(Boolean) }, ...this.entries];
    if (isPlatformBrowser(this.platformId)) localStorage.setItem(this.storageKey, JSON.stringify(this.entries));
    this.closeComposer();
  }
  formatDate(date: string): string { return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(date)); }
  private emptyEntry() { return { date: new Date().toISOString().slice(0, 10), title: '', summary: '', project: '', status: 'In progress' as JournalStatus, tags: [], tagsInput: '', duration: '' }; }
}
