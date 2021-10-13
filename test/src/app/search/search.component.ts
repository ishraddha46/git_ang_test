import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() sendChildValue: EventEmitter<string> = new EventEmitter<string>();
  constructor(private applicationRef: ApplicationRef) { 
 
  }
  searchText!: string;
  ngOnInit(): void {
  }

  search(){
    this.sendChildValue.emit(this.searchText);
   // this.applicationRef.tick();
  }
}
