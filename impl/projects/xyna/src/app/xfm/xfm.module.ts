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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FactoryManagerModule } from '@fman/factory-manager.module';
import { MessageBusModule } from '@yggdrasil/events';
import { ZetaModule } from '@zeta/zeta.module';

import { AcmModule } from './acm/acm.module';
import { ProcessmodellerModule } from './processmodeller/processmodeller.module';
import { ProcessmonitorModule } from './processmonitor/processmonitor.module';
import { TestfactoryModule } from './testfactory/testfactory.module';
import { XfmComponent } from './xfm.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ZetaModule,

        AcmModule,
        FactoryManagerModule,
        ProcessmodellerModule,
        ProcessmonitorModule,
        TestfactoryModule,
        MessageBusModule
    ],
    declarations: [
        XfmComponent
    ]
})
export class XfmModule {
}
