import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { CallbackComponent } from './callback/callback.component';
import { ReviewComponent } from './review/review.component';
import { EduObjectiveComponent } from './eduobjective/eduobjective.component';
import { ChallengeComponent } from './challenge/challenge.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'class', component: GroupComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'eduobjective', component: EduObjectiveComponent },
  { path: 'eduobjective/:id', component: EduObjectiveComponent },
  { path: 'challenge/:id', component: ChallengeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];