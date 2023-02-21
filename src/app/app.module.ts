import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AstronautComponent } from './service-interaction/astronaut.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './child-local-interaction/countdown-parent.component';
import { CountdownTimerComponent } from './child-local-interaction/countdown-timer.component';
import { HeroChildComponent } from './parent-child-interaction/hero-child.component';
import { HeroParentComponent } from './parent-child-interaction/hero-parent.component';
import { MissionControlComponent } from './service-interaction/missioncontrol.component';
import { NameChildComponent } from './intercept-input-setter/name-child.component';
import { NameParentComponent } from './intercept-input-setter/name-parent.component';
import { VersionChildComponent } from './intercept-input-ngonchanges/version-child.component';
import { VersionParentComponent } from './intercept-input-ngonchanges/version-parent.component';
import { VoterComponent } from './child-event-interaction/voter.component';
import { VoteTakerComponent } from './child-event-interaction/votetaker.component';
import { LiveChartComponent } from './live-chart/live-chart.component';


@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    AstronautComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    HeroChildComponent,
    HeroParentComponent,
    MissionControlComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    LiveChartComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
