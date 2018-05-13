import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { GriffinComponent } from './human/griffin.component';
import { QilinComponent } from './human/qilin.component';
import { NagaComponent } from './human/naga.component';
import { ManticoreComponent } from './human/manticore.component';
import { DragonComponent } from './human/dragon.component';
import { PowerMessagePipe } from './human/custom-msg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    GriffinComponent,
    QilinComponent,
    NagaComponent,
    ManticoreComponent,
    DragonComponent,
    PowerMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
