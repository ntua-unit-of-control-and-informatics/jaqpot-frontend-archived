import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule, ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {OverlayContainer} from '@angular/cdk/overlay';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldControl,
  MatFormFieldModule ,
  MatFormField,
  MatError,
  MatCard,
  MatAccordion,
  MatPaginator,
  MatPaginatorModule,
  MatSidenav,
  MatOption,
  MatBadgeModule,
  MatTreeModule
} from '@angular/material';
import {AppComponent} from './app.component';

// import { DialogsModule } from './dialogs/dialogs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl } from '@angular/forms';
import { Http , ConnectionBackend, HttpModule} from '@angular/http';
import { SessionService } from './session/session.service';
import { Subscription } from 'rxjs';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms-component/algorithms.component';
import { ModelsComponent } from './models/models.component';
import { DatasetComponent } from './dataset/dataset-component/dataset.component';
import { HomeComponent } from './home/home.component';
// import { AlgorithmsModuleModule } from './algorithms/algorithms-module.module';
// import { DatasetModuleModule } from './dataset/dataset-module.module';
// import { ModelsModuleModule } from './models/models-module.module';
import { AlgorithmsListComponent } from './algorithms/algorithms-list/algorithms-list.component';
import { DatasetListComponent } from './dataset/dataset-list/dataset-list.component';
import { Router } from '@angular/router/src/router';
import { RouterLinkWithHref } from '@angular/router/src/directives/router_link';
import { SessionModule } from './session/session.module';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail/algorithm-detail.component';
import { DatasetDetailComponent } from './dataset/dataset-detail/dataset-detail.component';
import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration, AuthWellKnownEndpoints, OidcConfigService, } from 'angular-auth-oidc-client';
import { HttpClientModule } from '@angular/common/http';
import { SecurityStorage } from './session/security.storage';
import { MarkdownModule } from 'ngx-markdown';
import {  HttkBaseComponent } from './httk/base/httk.base.component';
import { CreatehttkmodelComponent } from './httk/createhttkmodel/createhttkmodel.component';
import { ParameterlistComponent } from './base/components/parameterlist/parameterlist.component';
import { ParameterstepsComponent } from './base/components/parametersteps/parametersteps.component';
import { AccountBaseComponent } from './account/account.base/account.base.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { NgxPicaModule } from '@digitalascetic/ngx-pica';
import { SocialBaseComponent } from './account/social.base/social.base.component';
import { QuotaComponent } from './account/quota/quota.component';
import { OrganizationsComponent } from './account/organizations/organizations.component';
import { OrganizationBaseComponent } from './organization/organization-base/organization-base.component';
import { OrganizationDetailsComponent } from './organization/organization-details/organization-details.component';
import { OrganizationUsersComponent } from './organization/organization-users/organization-users.component';
import { NotificationComponent } from './bar-components/notification/notification.component';
import { FrontComponent } from './front/front.component';
import { DialogsModule } from './dialogs/dialogs.module';
import { DatasetApiFacadeService } from './services/facades/dataset-api-facade.service';
import { DataModelViewComponent } from './home/data-model-view/data-model-view.component';
import { ModelIdComponent } from './models/model-id/model-id.component';
import { WorkbenchBaseComponent } from './workbench/workbench-base/workbench-base.component';
import { DatasetIdComponent } from './dataset/dataset-id/dataset-id.component';
import { MarkdownComponent } from './base/markdown/markdown.component';
import { CommentsComponent } from './base/comments/comments.component';
import { QuickViewComponent } from './home/quick-view/quick-view.component';
import { ModelFeaturesComponent } from './models/model-features/model-features.component';
import { PredictValidateComponent } from './models/predict-validate/predict-validate.component';
import { PredictedComponent } from './base/predicted/predicted.component';
import { SimpleDatasetComponent } from './base/simple-dataset/simple-dataset.component';
import { ValidateComponent } from './models/validate/validate.component';
import { ValidationReportComponent } from './base/validation-report/validation-report.component';
import { SearchAllComponentComponent } from './bar-components/search-all-component/search-all-component.component';
import { SearchBaseComponent } from './search/search-base/search-base.component';
import { SearchQuickViewComponent } from './search/search-quick-view/search-quick-view.component';
import { PredArchiveComponent } from './models/pred-archive/pred-archive.component';
import { JaqpotNotificationsComponent } from './jaqpot-notifications/jaqpot-notifications.component';
import { ViewNotifsComponent } from './jaqpot-notifications/view-notifs/view-notifs.component';
import { HttkmodelsComponent } from './httk/httkmodels/httkmodels.component';
import { PbpkPredictedComponent } from './base/pbpk-predicted/pbpk-predicted.component';
import { MultiLineComponent } from './d3/multi-line/multi-line.component';
/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */

// export function loadConfig(oidcConfigService: OidcConfigService) {
//   console.log('APP_INITIALIZER STARTING');
//   return () => oidcConfigService.load_using_stsServer('http://147.102.86.129:30008/auth/realms/Jaqpan');
// }

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    ScrollingModule,
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatTreeModule,
    MatTableModule,
    MatFormFieldModule
  ],
  declarations: [],

  providers: [
    // OidcConfigService,
    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: loadConfig,
    //     deps: [OidcConfigService],
    //     multi: true
    // }
  ]
})
export class MaterialModule {}

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogsModule,
    // HttpModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ImageCropperModule,
    // NgxPicaModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    // AuthModule.forRoot( { storage:SecurityStorage } ),
    AuthModule.forRoot( ),
    CommonModule,
    
  ],
  exports: [DialogsModule, MaterialModule, AppRoutingModule, RouterModule],
  declarations: [AppComponent,
    BaseComponent,
    AlgorithmsComponent,
    AlgorithmsListComponent,
    AlgorithmDetailComponent,
    DatasetComponent,
    DatasetListComponent,
    DatasetDetailComponent,
    ModelsComponent,
    ModelFeaturesComponent,
    PredictValidateComponent,
    HomeComponent,
    HttkBaseComponent,
    HttkmodelsComponent,
    CreatehttkmodelComponent,
    ParameterlistComponent,
    ParameterstepsComponent,
    AccountBaseComponent,
    SocialBaseComponent,
    QuotaComponent,
    OrganizationsComponent,
    OrganizationBaseComponent,
    OrganizationDetailsComponent,
    OrganizationUsersComponent,
    NotificationComponent,
    FrontComponent,
    DataModelViewComponent,
    ModelIdComponent,
    DatasetIdComponent,
    WorkbenchBaseComponent,
    CommentsComponent,
    QuickViewComponent,
    MarkdownComponent,
    PredictedComponent,
    SimpleDatasetComponent,
    ValidateComponent,
    ValidationReportComponent,SearchAllComponentComponent,SearchBaseComponent, SearchQuickViewComponent,
    PredArchiveComponent, JaqpotNotificationsComponent, ViewNotifsComponent ,PbpkPredictedComponent,MultiLineComponent
  ],
  bootstrap: [AppComponent],
  providers: [SessionService],
  entryComponents: []
})
export class AppModule {

  subscription:Subscription;
  theme:string;
  constructor(private overlayContainer: OverlayContainer
              , private sessionService: SessionService
              , private oidcConfigService: OidcConfigService
              , public oidcSecurityService: OidcSecurityService) {
    
    var _theme = sessionService.get('theme');
    if(_theme === 'dark-theme'){
      this.overlayContainer.getContainerElement().classList.remove('default-theme'); 
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    }else{
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('default-theme');
    }

    this.subscription= this.sessionService
    .getTheme().subscribe(theme => {
      var the = (<any>Object).values(theme);
      if(the[0] === 'dark-theme'){
        this.theme = 'dark-theme';
        this.overlayContainer.getContainerElement().classList.remove('default-theme'); 
        this.overlayContainer.getContainerElement().classList.add('dark-theme');
      }else{
        this.theme = 'default-theme'
        this.overlayContainer.getContainerElement().classList.remove('dark-theme');
        this.overlayContainer.getContainerElement().classList.add('default-theme');
      }
    }
  )

    let openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
    
    // openIDImplicitFlowConfiguration.stsServer = 'https://login.jaqpot.org/auth/realms/jaqpot';
    openIDImplicitFlowConfiguration.stsServer = 'https://sso.prod.openrisknet.org/auth/realms/openrisknet';
    openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200/home';
    // openIDImplicitFlowConfiguration.redirect_url = 'https://ui-jaqpot.prod.openrisknet.org/home';
    // openIDImplicitFlowConfiguration.redirect_url = 'https://app.jaqpot.org/home';
    openIDImplicitFlowConfiguration.client_id = 'jaqpot-ui';
    openIDImplicitFlowConfiguration.response_type = 'id_token token';
    openIDImplicitFlowConfiguration.scope = 'openid email profile';
    openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'https://login.jaqpot.org/auth/realms/jaqpot/Unauthorized';
    openIDImplicitFlowConfiguration.start_checksession = false;
    openIDImplicitFlowConfiguration.silent_renew = true;
    openIDImplicitFlowConfiguration.silent_renew_offset_in_seconds = 0;
    openIDImplicitFlowConfiguration.post_login_route = '/home';
    openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
    openIDImplicitFlowConfiguration.unauthorized_route = '/home';
    openIDImplicitFlowConfiguration.auto_userinfo = true;
    openIDImplicitFlowConfiguration.log_console_warning_active = true;
    openIDImplicitFlowConfiguration.log_console_debug_active = false;
    openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 20;
    // openIDImplicitFlowConfiguration.override_well_known_configuration = false;
    // openIDImplicitFlowConfiguration.override_well_known_configuration_url = 'http://147.102.86.129:30008/auth/realms/Jaqpan/.well-known/openid-configuration';
    openIDImplicitFlowConfiguration.storage = localStorage;
          
    const authWellKnownEndpoints = new AuthWellKnownEndpoints();
    // authWellKnownEndpoints.issuer = 'https://login.jaqpot.org/auth/realms/jaqpot'; 
    authWellKnownEndpoints.issuer = openIDImplicitFlowConfiguration.stsServer;
    authWellKnownEndpoints.jwks_uri = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/certs'
    // authWellKnownEndpoints.jwks_uri = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/certs';
    authWellKnownEndpoints.authorization_endpoint = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/auth'
    // authWellKnownEndpoints.authorization_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/auth';
    authWellKnownEndpoints.token_endpoint = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/token';
    // authWellKnownEndpoints.token_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/token';
    authWellKnownEndpoints.userinfo_endpoint = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/userinfo';
    // authWellKnownEndpoints.userinfo_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/userinfo';
    authWellKnownEndpoints.end_session_endpoint = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/logout';
    // authWellKnownEndpoints.end_session_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/logout';
    authWellKnownEndpoints.check_session_iframe = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/login-status-iframe.html';
    // authWellKnownEndpoints.check_session_iframe = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/login-status-iframe.html';
    // authWellKnownEndpoints.revocation_endpoint = 'http://147.102.86.129:30008/auth/realms/Jaqpan/.well-known/openid-configuration/revocation';
    authWellKnownEndpoints.introspection_endpoint = openIDImplicitFlowConfiguration.stsServer + '/protocol/openid-connect/token/introspect';
    // authWellKnownEndpoints.introspection_endpoint = 'https://login.jaqpot.org/auth/realms/jaqpot/protocol/openid-connect/token/introspect';
    this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);

  }

  changeTheme(theme:string){
    this.overlayContainer.getContainerElement().classList.add(theme);
  }
}
