import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KnowledgeQuestionsComponent } from './pages/knowledge-questions/knowledge-questions.component';
import { HttpClientModule } from '@angular/common/http';
import { KnowledgeQuestionsListComponent } from './components/knowledge-questions-list/knowledge-questions-list.component';
import { KnowledgeQuestionPreviewComponent } from './components/knowledge-question-preview/knowledge-question-preview.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    KnowledgeQuestionsComponent,
    KnowledgeQuestionsListComponent,
    KnowledgeQuestionPreviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
