import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueServiceService } from '../catalogue-service.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private myCatalogueService: CatalogueServiceService) { }

  catalogue$!: Observable<Array<Produit>>;
  term!:string;

  ngOnInit(): void {
    this.term=""
    this.catalogue$ = this.myCatalogueService.getCatalogue();
  }

}
