// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CompanyComponent} from './pages/company/company.component';
import { CompanyEditComponent} from './pages/company-edit/company-edit.component';
import { ContactDetailComponent} from './pages/contact-detail/contact-detail.component';
import { ContactEditComponent} from './pages/contact-edit/contact-edit.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'company',  loadChildren: './pages/company/company.module#CompanyModule'  },
    { path: 'company/:id',  loadChildren: './pages/company-edit/company-edit.module#CompanyEditModule'  },
    { path: 'contacts/:id/detail',  loadChildren: './pages/contact-detail/contact-detail.module#ContactDetailModule'  },
    { path: 'contacts/:id',  loadChildren: './pages/contact-edit/contact-edit.module#ContactEditModule'  },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule'  },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
