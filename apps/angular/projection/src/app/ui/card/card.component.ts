import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardType } from '../../model/card.model';

export type ListItem = {
  id: number;
  firstName: string;
};

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <ng-content select="[type]"></ng-content>

      <section>
        <ng-content select="[list]"></ng-content>
      </section>

      <button
        class="rounded-sm border border-blue-500 bg-blue-300 p-2"
        (click)="addNewItem.emit()">
        Add
      </button>
    </div>
  `,
  standalone: true,
})
export class CardComponent {
  @Input() customClass = '';
  @Output() addNewItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter<number>();

  CardType = CardType;

  constructor() {}
}
