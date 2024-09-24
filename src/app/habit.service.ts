import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private selectedHabits: string[] = [];

  constructor() { }

  addHabit(habit: string) {
    if (!this.selectedHabits.includes(habit)) {
      this.selectedHabits.push(habit);
    }
  }

  removeHabit(habit: string) {
    this.selectedHabits = this.selectedHabits.filter(h => h !== habit);
  }

  getHabits() {
    return this.selectedHabits;
  }

  clearHabits() {
    this.selectedHabits = [];
  }
}
