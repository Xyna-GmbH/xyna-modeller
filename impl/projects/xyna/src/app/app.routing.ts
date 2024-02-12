/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
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
import { RouterModule, Routes } from '@angular/router';

import { authGuardCanActivate } from '@zeta/auth';
import { ZetaRoutes, ZetaRoutingModules, ZetaRoutingProviders } from '@zeta/zeta.routing';

import { XfmRoutes, XfmRoutingModules, XfmRoutingProviders } from './xfm/xfm.routing';


export const AppRoutes: Routes = [
    { path: '', children: XfmRoutes, canActivate: [authGuardCanActivate] },
    ...ZetaRoutes
];

export const AppRoutingModules = [
    RouterModule.forRoot(AppRoutes),
    ...XfmRoutingModules,
    ...ZetaRoutingModules
];

export const AppRoutingProviders = [
    ...XfmRoutingProviders,
    ...ZetaRoutingProviders
];
