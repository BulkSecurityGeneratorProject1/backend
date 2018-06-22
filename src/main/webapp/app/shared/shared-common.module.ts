import { NgModule } from '@angular/core';

import { BackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BackendSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BackendSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BackendSharedCommonModule {}
