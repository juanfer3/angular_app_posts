import { Component, OnInit, Inject,ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-posts-modal',
  templateUrl: './dialog.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PostsModalComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<PostsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}