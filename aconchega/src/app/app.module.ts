import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { SobrenosComponent } from './features/sobrenos/sobrenos.component';
import { EventosComponent } from './features/eventos/eventos.component';
import { AlimentacaoComponent } from './features/alimentacao/alimentacao.component';
import { PsicologiaComponent } from './features/psicologia/psicologia.component';
import { MotivacaoComponent } from './features/psicologia/motivacao/motivacao.component';
import { WorkshopsComponent } from './features/eventos/workshops/workshops.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AccaosocialComponent } from './features/accaosocial/accaosocial.component';
import { NutricaoComponent } from './features/alimentacao/nutricao/nutricao.component';
import { ReceitasComponent } from './features/alimentacao/receitas/receitas.component';
import { ShowcookingComponent } from './features/alimentacao/showcooking/showcooking.component';
import { MeditacaoComponent } from './features/psicologia/meditacao/meditacao.component';
import { EmpoderamentoComponent } from './features/psicologia/empoderamento/empoderamento.component';
import { DesportoComponent } from './features/desporto/desporto.component';
import { LazerComponent } from './features/desporto/lazer/lazer.component';
import { CriancasComponent } from './features/desporto/criancas/criancas.component';
import { IdososComponent } from './features/desporto/idosos/idosos.component';
import { ActividadesLudicasComponent } from './features/desporto/actividades-ludicas/actividades-ludicas.component';
import { ApoioJuridicoComponent } from './features/apoio-juridico/apoio-juridico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobrenosComponent,
    EventosComponent,
    AlimentacaoComponent,
    PsicologiaComponent,
    MotivacaoComponent,
    WorkshopsComponent,
    HomepageComponent,
    AccaosocialComponent,
    NutricaoComponent,
    ReceitasComponent,
    ShowcookingComponent,
    MeditacaoComponent,
    EmpoderamentoComponent,
    DesportoComponent,
    LazerComponent,
    CriancasComponent,
    IdososComponent,
    ActividadesLudicasComponent,
    ApoioJuridicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
