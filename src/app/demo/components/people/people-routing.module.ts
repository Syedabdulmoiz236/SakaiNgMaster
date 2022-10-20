import { OthersModule } from './others/others.module';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild([

        { path: 'resource-knowledge', loadChildren: () => import('./resource-knowledge/resource-knowledge.module').then(m => m.ResourceKnowledgeModule) },
        { path: 'resource-training', loadChildren: () => import('./resource-training/resource-training.module').then(m => m.ResourceTrainingModule) },
        { path: 'fte-count-pnl', loadChildren: () => import('./fte-count-pnl/file-count-pnl.module').then(m => m.FteCountPnlModule) },
        { path: 'technology-skills', loadChildren: () => import('./technology-skills/technology-skills.module').then(m => m.TechnologySkillsModule) },
        { path: 'rotation-retention', loadChildren: () => import('./rotation-retention/rotation-retention.module').then(m => m.RotationRetentionModule) },
        { path: 'others', loadChildren: () => import('./others/others.module').then(m => m.OthersModule) },

       
    ])],
    exports:[RouterModule]
})
export class PeopleRoutingModule{}