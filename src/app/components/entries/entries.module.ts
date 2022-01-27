import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../shared/material.module';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntriesRoutes } from './entries.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EntriesRoutes),
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddEntryComponent,
    AllEntriesComponent
  ],
})

export class EntriesModule { }
