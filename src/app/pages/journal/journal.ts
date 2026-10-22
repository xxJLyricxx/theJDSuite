import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JournalService } from '../../services/journal.service';
import { JournalEntry } from '../../models/journal-entry';
import { NavBar } from '../../navbar/navbar';


type JournalStatus = 'Shipped' | 'In progress' | 'Research';

@Component({ 
  selector: 'app-journal', 
  imports: [
    CommonModule, 
    FormsModule, 
    NavBar], 
    templateUrl: './journal.html', 
    styleUrl: './journal.scss' 
  })
export class JournalComponent implements OnInit {
  selectedEntry: JournalEntry | null = null;
 entries = signal<JournalEntry[]>([]);
  expandedEntryIds = new Set<number>();

  constructor(private journalService: JournalService) {}

  toggleEntry(entryId: number): void {
    if (this.expandedEntryIds.has(entryId)) {
      this.expandedEntryIds.delete(entryId);
      return;
    }

    this.expandedEntryIds.add(entryId);
  }

  ngOnInit() {
    this.journalService.getEntries().subscribe({
      next: data => this.entries.set(data),
      error: error => console.error('Failed to load journal entries:', error)
    });
  }
  openEntry(entry: JournalEntry, dialog: HTMLDialogElement): void {
  this.selectedEntry = entry;
  dialog.showModal();
  }

  closeEntry(dialog: HTMLDialogElement): void {
    dialog.close();
    this.selectedEntry = null;
  }

  closeOnBackdrop(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target === dialog) {
      this.closeEntry(dialog);
    }
  }

}
