import { Component, OnInit, Inject,ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostModalComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<PostModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.matDialogRef.close();
  }

}
