import { Component, OnInit } from '@angular/core';
import { MaterialList } from 'src/app/dtos/material/list';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-overview',
  templateUrl: './material-overview.component.html',
  styleUrls: ['./material-overview.component.scss']
})
export class MaterialOverviewComponent implements OnInit {

  public materialList: MaterialList[] = [new MaterialList('', '', '', '', 0)];

  constructor(
    public materialService: MaterialService
  ) {}

  ngOnInit(): void {
    this.test();
  }

  test() {
    this.materialService.list().subscribe(
      (
        (response: MaterialList[]) => {
        console.log(response);
        this.materialList = response;
        console.log(this.materialList)
      }
      )
    );
  }
}
