import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentacaoComponent } from './features/alimentacao/alimentacao.component';
import { EventosComponent } from './features/eventos/eventos.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { MotivacaoComponent } from './features/psicologia/motivacao/motivacao.component';
import { PsicologiaComponent } from './features/psicologia/psicologia.component';
import { SobrenosComponent } from './features/sobrenos/sobrenos.component';
import { WorkshopsComponent } from './features/eventos/workshops/workshops.component';
import { AccaosocialComponent } from './features/accaosocial/accaosocial.component';
import { DesportoComponent } from './features/desporto/desporto.component';
import { NutricaoComponent } from './features/alimentacao/nutricao/nutricao.component';
import { ReceitasComponent } from './features/alimentacao/receitas/receitas.component';
import { ShowcookingComponent } from './features/alimentacao/showcooking/showcooking.component';
import { MeditacaoComponent } from './features/psicologia/meditacao/meditacao.component';
import { EmpoderamentoComponent } from './features/psicologia/empoderamento/empoderamento.component';
import { ApoioJuridicoComponent } from './features/apoio-juridico/apoio-juridico.component';
import { ActividadesLudicasComponent } from './features/desporto/actividades-ludicas/actividades-ludicas.component';
import { LazerComponent } from './features/desporto/lazer/lazer.component';
import { IdososComponent } from './features/desporto/idosos/idosos.component';
import { CriancasComponent } from './features/desporto/criancas/criancas.component';

const routes: Routes = [

  // USER ROUTES
  { path: '', component: HomepageComponent },

  { path: 'sobrenos', component: SobrenosComponent },

  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/workshops', component: WorkshopsComponent },

  { path: 'alimentacao', component: AlimentacaoComponent },
  { path: 'alimentacao/nutricao', component: NutricaoComponent },
  { path: 'alimentacao/receitas', component: ReceitasComponent },
  { path: 'alimentacao/showcooking', component: ShowcookingComponent },

  { path: 'psicologia', component: PsicologiaComponent},
  { path: 'psicologia/motivacao', component: MotivacaoComponent},
  { path: 'psicologia/meditacao', component: MeditacaoComponent},
  { path: 'psicologia/empoderamento', component: EmpoderamentoComponent},

  { path: 'accaosocial', component: AccaosocialComponent },

  { path: 'apoiojuridico', component: ApoioJuridicoComponent },

  { path: 'desporto', component: DesportoComponent },
  { path: 'desporto/criancas', component: CriancasComponent },
  { path: 'desporto/idosos', component: IdososComponent },
  { path: 'desporto/lazer', component: LazerComponent },
  { path: 'desporto/actividadesludicas', component: ActividadesLudicasComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }