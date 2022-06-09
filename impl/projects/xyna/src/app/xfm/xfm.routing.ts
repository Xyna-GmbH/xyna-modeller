import { RouterModule, Routes } from '@angular/router';

import { FactoryManagerRoutes, FactoryManagerRoutingModules, FactoryManagerRoutingProviders } from '@fman/factory-manager.routing';

import { AcmRoutes, AcmRoutingModules, AcmRoutingProviders } from './acm/acm.routing';
import { PlaygroundRoutes, PlaygroundRoutingModules, PlaygroundRoutingProviders } from './playground/playground.routing';
import { ProcessmodellerRoutes, ProcessmodellerRoutingModules, ProcessmodellerRoutingProviders } from './processmodeller/processmodeller.routing';
import { ProcessmonitorRoutes, ProcessmonitorRoutingModules, ProcessmonitorRoutingProviders } from './processmonitor/processmonitor.routing';
import { TestfactoryRoutes, TestfactoryRoutingModules, TestfactoryRoutingProviders } from './testfactory/testfactory.routing';
import { XfmComponent } from './xfm.component';
import { XfmModule } from './xfm.module';


const root = 'xfm';

export const XfmRoutes: Routes = [
    {
        path: '',
        redirectTo: root,
        pathMatch: 'full'
    },
    {
        path: root,
        component: XfmComponent,
        children: [
            /*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2022 GIP SmartMercial GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
            ...ProcessmodellerRoutes,
            ...FactoryManagerRoutes,
            ...ProcessmonitorRoutes,
            ...TestfactoryRoutes,
            ...AcmRoutes,
            ...PlaygroundRoutes
        ]
    }
];

export const XfmRoutingModules = [
    RouterModule.forChild(XfmRoutes),
    XfmModule,
    ...AcmRoutingModules,
    ...FactoryManagerRoutingModules,
    ...ProcessmodellerRoutingModules,
    ...ProcessmonitorRoutingModules,
    ...TestfactoryRoutingModules,
    ...PlaygroundRoutingModules
];

export const XfmRoutingProviders = [
    ...AcmRoutingProviders,
    ...FactoryManagerRoutingProviders,
    ...ProcessmodellerRoutingProviders,
    ...ProcessmonitorRoutingProviders,
    ...TestfactoryRoutingProviders,
    ...PlaygroundRoutingProviders
];
