// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CompanyEditComponent} from './pages/company-edit/company-edit.component';
import { CompanyListComponent} from './pages/company-list/company-list.component';
import { ContactDetailComponent} from './pages/contact-detail/contact-detail.component';
import { ContactEditComponent} from './pages/contact-edit/contact-edit.component';
import { ContactListComponent} from './pages/contact-list/contact-list.component';
import { UserEditComponent} from './pages/user-edit/user-edit.component';
import { UserListComponent} from './pages/user-list/user-list.component';

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

    { path: 'company/:id',  loadChildren: './pages/company-edit/company-edit.module#CompanyEditModule'  },
    { path: 'companys/:id',  loadChildren: './pages/company-edit/company-edit.module#CompanyEditModule' , canActivate: [AuthGuard] },
    { path: 'companys',  loadChildren: './pages/company-list/company-list.module#CompanyListModule'  },
    { path: 'contacts/:id/detail',  loadChildren: './pages/contact-detail/contact-detail.module#ContactDetailModule'  },
    { path: 'contacts/:id',  loadChildren: './pages/contact-edit/contact-edit.module#ContactEditModule'  },
    { path: 'contacts/:id',  loadChildren: './pages/contact-edit/contact-edit.module#ContactEditModule' , canActivate: [AuthGuard] },
    { path: 'contacts',  loadChildren: './pages/contact-list/contact-list.module#ContactListModule'  },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'users/:id',  loadChildren: './pages/user-edit/user-edit.module#UserEditModule' , canActivate: [AuthGuard] },
    { path: 'users',  loadChildren: './pages/user-list/user-list.module#UserListModule' , canActivate: [AuthGuard] },

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
