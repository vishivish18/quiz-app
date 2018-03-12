import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { ManageQuizComponent } from './manage-quiz/manage-quiz.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

import {FormsModule , ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
import {MatSelectModule, MatFormField, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    NotFoundComponent,
    SampleComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RegisterComponent
      },
    {
      path: 'managequiz',
      component : ManageQuizComponent
    },
    {
      path: 'home' ,
      component: RegisterComponent
    } ,
    {
      path: 'sample' ,
      component: SampleComponent
    } ,
    {
      path: 'addques' ,
      component: AddQuestionsComponent
    } ,
    {
      path: '**',
      component: NotFoundComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
