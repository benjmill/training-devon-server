angular.module("app",["ui.select","ngRoute","app.main","app.tableMgmt","app.offerMgmt","app.salesMgmt"]).config(["$locationProvider","uiSelectConfig",function(a,b){"use strict";a.html5Mode(!1),b.theme="bootstrap"}]).run(["globalSpinner",function(a){"use strict";a.showOnRouteChangeStartAndHideWhenComplete()}]),angular.module("oasp.templates",[]).run(["$templateCache",function(a){a.put("html/main/oasp-grid.html",'<div class="oasp-grid">\n    <h2 data-ng-show="!noTitleDefined()"><span data-ng-bind="title"></span></h2>\n    <table class="table table-striped">\n        <thead>\n        <tr>\n            <th data-ng-repeat="columnDef in columnDefs" class="column"><span data-ng-bind="columnDef.label"></span></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr data-ng-repeat="row in rows"\n            data-ng-click="rowSelection.select(row)"\n            data-ng-dblclick="onRowDblClick(row)"\n            data-ng-class="{\'selected-row\': rowSelection.isSelected(row)}">\n            <td data-ng-repeat="columnDef in columnDefs" data-ng-bind-html="render(row,columnDef)"></td>\n        </tr>\n        </tbody>\n    </table>\n    <p>\n        <button data-ng-repeat="buttonDef in buttonDefs"\n                data-ng-click="onButtonClick(buttonDef)"\n                data-ng-disabled="isButtonDisabled(buttonDef)"\n                class="btn btn-sm btn-primary">\n            <span data-ng-bind="buttonDef.label"></span>\n        </button>\n    </p>\n</div>'),a.put("html/main/page-not-found.html",'<!DOCTYPE html>\n<html>\n<body>\n<div class="row">\n    <div class="col-md-12">\n        <h2>Page Not Found!</h2>\n        <p>The page you trying to reach could not be found.</p>\n    </div>\n</div>\n</body>\n</html>'),a.put("html/main/sign-in-modal.html",'<div>\n    <form name="loginForm" novalidate>\n    <div class="modal-header">\n        <h3 class="modal-title">Sign In</h3>\n    </div>\n    <div class="modal-body">\n        <div class="row">\n            <div class="col-md-12">\n                <alert data-ng-show="errorMessage.hasOne()" data-close="errorMessage.clear()" data-type="danger">\n                    <span data-ng-bind="errorMessage.text"></span>\n                </alert>\n                <p>\n                     <span class="label label-danger" data-ng-show="validation.userNameNotProvided()">Please enter your user name!</span>\n                     <input type="text" placeholder="User Name" name="userName" class="form-control" data-ng-model="credentials.j_username" data-ng-required="true">\n                </p>\n                <p>\n                    <span class="label label-danger" data-ng-show="validation.passwordNotProvided()">Please enter your password!</span>\n                    <input type="password" placeholder="Password" name="password" class="form-control" data-ng-model="credentials.j_password" data-ng-required="true">\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class="modal-footer">\n        <button class="btn btn-success" data-ng-click="signIn()">Sign In</button>\n        <button class="btn btn-warning" ng-click="$dismiss()">Cancel</button>\n    </div>\n    </form>\n</div>'),a.put("html/main/sign-in.html",'<!DOCTYPE html>\n<html>\n<body>\n<div class="row">\n    <div class="col-md-4" data-ng-controller="SignInCntl">\n        <h2>Sign In</h2>\n        <alert data-ng-show="errorMessage.hasOne()" data-close="errorMessage.clear()" data-type="danger"><span data-ng-bind="errorMessage.text"></span></alert>\n        <form name="loginForm" novalidate>\n            <p>\n                <span class="label label-danger" data-ng-show="validation.userNameNotProvided()">Please enter your user name!</span>\n                <input type="text" placeholder="User Name" name="userName" class="form-control" data-ng-model="credentials.j_username" data-ng-required="true">\n            </p>\n            <p>\n                <span class="label label-danger" data-ng-show="validation.passwordNotProvided()">Please enter your password!</span>\n                <input type="password" placeholder="Password" name="password" class="form-control" data-ng-model="credentials.j_password" data-ng-required="true">\n            </p>\n            <p>\n            <button type="submit" class="btn btn-success" data-ng-click="signIn()">Sign In</button>\n            </p>\n        </form>\n    </div>\n    <div class="col-md-8">\n    </div>\n</div>\n</body>\n</html>'),a.put("html/main/spinner.html",'<div class="spinner-container" data-ng-show="spinnerVisible">\n    <div class="spinner-backdrop"></div>\n    <span us-spinner="spinnerOptions"\n          data-spinner-start-active="1"></span>\n</div>'),a.put("html/table-mgmt/table-details.html",'<div>\n    <div class="modal-header">\n        <h3 class="modal-title">Details for Table #<span data-ng-bind="table.id"></span></h3>\n    </div>\n    <div class="modal-body">\n        <form name="forms.tableForm" novalidate>\n\n            <div class="row">\n                <div class="col-md-12">\n                    <label>Status:</label>&nbsp;\n                    <span data-ng-bind="table.state"></span>\n                </div>\n            </div>\n\n\n            <div class="page-header">\n                <h4>Order</h4>\n            </div>\n\n            <div class="row" data-ng-show="noOrderAssigned()">\n                <div class="col-md-12" >\n                    <div class="alert alert-info" role="alert">\n                        No order currently assigned to this table. <a data-ng-click="assignNewOrder()">Assign a new order...</a>\n                    </div>\n                </div>\n            </div>\n            <div data-ng-show="orderAssigned()">\n                <div class="row">\n                    <div class="col-md-12">\n                        <label>State:</label>&nbsp;\n                        <span data-ng-bind="table.order.orderState"></span>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="col-md-6">\n                        <label>Order Positions:</label>&nbsp;\n                    </div>\n                    <div class="col-md-4">\n                        <ui-select ng-model="model.selected">\n                            <ui-select-match placeholder="Select offer...">{{$select.selected.description}}</ui-select-match>\n                            <ui-select-choices repeat="o in allOffers | filter: $select.search">\n                                <div ng-bind-html="trustAsHtml((o.description | highlight: $select.search))"></div>\n                            </ui-select-choices>\n                        </ui-select>\n                    </div>\n                    <div class="col-md-1">\n                        <button class="btn btn-sm btn-primary" data-ng-click="addPosition(model.selected)">+Add</button>&nbsp;\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="col-md-12">\n                        <div data-oasp-grid=""\n                             data-column-defs="columnDefs"\n                             data-button-defs="buttonDefs"\n                             data-rows="model.order.positions">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button class="btn btn-primary" data-ng-disabled="!model.order" ng-click="submit()">Submit</button>\n        <button class="btn btn-warning" ng-click="$close()">Cancel</button>\n    </div>\n</div>')}]),angular.module("oasp-ui",["ui.bootstrap","angularSpinner","oasp.templates"]),angular.module("app.main",["ngRoute","pascalprecht.translate","oasp-ui","oasp-security"]).constant("SIGN_IN_DLG_PATH","/main/sign-in").config(["SIGN_IN_DLG_PATH","$routeProvider","$translateProvider",function(a,b,c){"use strict";b.when("/",{redirectTo:a}).when(a,{templateUrl:"html/main/sign-in.html"}).otherwise({templateUrl:"html/main/page-not-found.html"}),c.useStaticFilesLoader({prefix:"i18n/locale-",suffix:".json"}),c.preferredLanguage("en")}]),angular.module("app.main").controller("SignInCntl",["$scope","$location","appContext","signIn",function(a,b,c,d){"use strict";d(a,function(){var a=c.getCurrentUser();b.url(a.getHomeDialogPath())})}]),angular.module("app.main").controller("SignInModalCntl",["$scope","signIn",function(a,b){"use strict";b(a,function(b){a.$close(b)})}]),angular.module("app.main").controller("AppCntl",["SIGN_IN_DLG_PATH","$scope","$location","$window","appContext","security","globalSpinner",function(a,b,c,d,e,f,g){"use strict";b.currentUser=e.getCurrentUser(),b.logOff=function(){var b=function(){c.path(a),d.location.href=c.absUrl(),d.location.reload()};g.decorateCallOfFunctionReturningPromise(function(){return f.logOff()}).then(function(){b()})}}]),angular.module("app.main").controller("LanguageChangeCntl",["$scope","$translate",function(a,b){"use strict";a.supportedLanguages=[{key:"en",label:"Englisch"},{key:"de",label:"German"}],a.changeLanguage=function(a){b.use(a)},a.getCurrentLanguage=function(){return b.use()}}]),angular.module("app.main").factory("signIn",["security","globalSpinner",function(a,b){"use strict";return function(c,d){c.errorMessage={text:"",hasOne:function(){return this.text?!0:!1},clear:function(){this.text=""}},c.credentials={},c.validation={userNameNotProvided:function(){return(c.loginForm.userName.$dirty||this.forceShowingValidationErrors)&&c.loginForm.userName.$error.required},passwordNotProvided:function(){return(c.loginForm.password.$dirty||this.forceShowingValidationErrors)&&c.loginForm.password.$error.required},forceShowingValidationErrors:!1},c.signIn=function(){var e=function(a){c.errorMessage.text=a,c.credentials={},c.validation.forceShowingValidationErrors=!1,c.loginForm.$setPristine()};c.loginForm.$invalid?c.validation.forceShowingValidationErrors=!0:b.decorateCallOfFunctionReturningPromise(function(){return a.logIn(c.credentials)}).then(function(a){d(a)},function(){e("Authentication failed. Please try again!")})}}}]),angular.module("app.main").factory("currentContextPath",["$window",function(a){"use strict";var b="";return{get:function(){var c,d,e,f=b?!1:!0;return f&&(b="/",c=a.location.pathname,c&&(d=c.split("/"),d.length>1&&(e=d[1],e&&(b+=e+"/")))),b}}}]),angular.module("app.main").factory("appContext",function(){"use strict";var a={isLoggedIn:!1},b=function(a){return{isLoggedIn:function(){return a.isLoggedIn},getUserName:function(){var b="";return a.profile&&a.profile.firstName&&a.profile.lastName&&(b=a.profile.firstName+" "+a.profile.lastName),b},getHomeDialogPath:function(){return a.profile&&a.profile.homeDialogPath||""}}}(a),c=function(b){a.isLoggedIn=!0,a.profile=b,angular.isUndefined(b.homeDialogPath)&&(a.profile.homeDialogPath="/table-mgmt/table-search")},d=function(){a.isLoggedIn=!1,a.profile=void 0};return{getCurrentUser:function(){return b},onLoggingIn:function(a){c(a)},onLoggingOff:function(){d()}}}),angular.module("app.main").factory("securityRestService",["$http","currentContextPath",function(a,b){"use strict";var c=b.get()+"services/rest";return{getCurrentUser:function(){return a.get(c+"/security/currentuser")},getCsrfToken:function(){return a.get(c+"/security/csrftoken/")},login:function(b){return a.post(c+"/login",b)},logout:function(){return a.get(c+"/logout")}}}]),angular.module("app.main").factory("authenticator",["$modal",function(a){"use strict";return{execute:function(){return a.open({templateUrl:"html/main/sign-in-modal.html",backdrop:"static",keyboard:!1,controller:"SignInModalCntl",size:"sm"}).result}}}]),angular.module("oasp-ui").directive("oaspGrid",["$sce",function(a){"use strict";return{restrict:"A",replace:!0,templateUrl:"html/main/oasp-grid.html",scope:{title:"@?",rows:"=",columnDefs:"=",buttonDefs:"=?",dblclickCallback:"&?"},link:function(b){b.rowSelection=function(){var a=null;return{select:function(b){a=b},isSelected:function(b){return a===b},getSelected:function(){return a}}}(),b.noTitleDefined=function(){return!b.title},b.onButtonClick=function(a){a&&angular.isFunction(a.onClick)&&a.onClick(b.rowSelection.getSelected())},b.isButtonDisabled=function(a){return a&&angular.isFunction(a.isActive)?!a.isActive(b.rowSelection.getSelected()):a&&angular.isFunction(a.isNotActive)?a.isNotActive(b.rowSelection.getSelected()):!0},b.onRowDblClick=function(a){b.dblclickCallback({row:a})},b.render=function(b,c){var d;return d=angular.isFunction(c.renderer)?c.renderer(b,c):"<span>"+(b[c.field]||"")+"</span>",a.trustAsHtml(d)}}}}]),angular.module("oasp-ui").directive("spinner",function(){"use strict";return{restrict:"A",replace:!0,templateUrl:"html/main/spinner.html",scope:{spinnerVisible:"=spinner"},link:function(a){a.spinnerOptions={lines:13,length:20,width:4,radius:16,corners:1,rotate:0,color:"#ffffff",speed:1.2,trail:54,shadow:!1,hwaccel:!1,zIndex:2e9}}}}),angular.module("oasp-ui").config(["$provide",function(a){"use strict";var b=["$delegate","globalSpinner",function(a,b){return{open:function(c){b.show();var d=a.open(c);return d.opened.then(function(){b.hide()},function(){b.hide()}),d}}}];a.decorator("$modal",b)}]),angular.module("oasp-ui").factory("globalSpinner",["$rootScope","$q",function(a,b){"use strict";var c={};return c.show=function(){a.globalSpinner=!0},c.hide=function(){a.globalSpinner=!1},c.showOnRouteChangeStartAndHideWhenComplete=function(){a.$on("$routeChangeStart",function(a,b){b.resolve&&c.show()}),a.$on("$routeChangeSuccess",function(){c.hide()}),a.$on("$routeChangeError",function(){c.hide()})},c.decorateCallOfFunctionReturningPromise=function(a){return c.show(),a().then(function(a){return c.hide(),a},function(a){return c.hide(),b.reject(a)})},c}]),angular.module("oasp-security",[]).config(["$httpProvider",function(a){"use strict";a.interceptors.push("securityInterceptor")}]),angular.module("oasp-security").provider("security",function(){"use strict";var a={securityRestServiceName:"securityRestService",appContextServiceName:"appContext"};return{setSecurityRestServiceName:function(b){a.securityRestServiceName=b||a.securityRestServiceName},setAppContextServiceName:function(b){a.appContextServiceName=b||a.appContextServiceName},$get:["$injector","$http","$q",function(b,c,d){var e=function(){return b.get(a.securityRestServiceName)},f=function(){return b.get(a.appContextServiceName)},g=function(){return e().getCsrfToken().then(function(a){var b=a.data;return c.defaults.headers.common[b.headerName]=b.token,b},function(){return"Requesting a CSRF token failed"})};return{logIn:function(a){var b=d.defer();return e().login(a).then(function(){d.all([e().getCurrentUser(),g()]).then(function(a){f().onLoggingIn(a[0].data),b.resolve(a[1])},function(a){b.reject(a)})},function(){b.reject("Authentication failed")}),b.promise},logOff:function(){return e().logout().then(function(){f().onLoggingOff()})}}}]}}),angular.module("oasp-security").factory("securityInterceptor",["$q","requestResendingQueue",function(a,b){"use strict";return{responseError:function(c){var d;return 403===c.status?(d=c.config,b.addRequest(d)):a.reject(c)}}}]),angular.module("oasp-security").provider("requestResendingQueue",function(){"use strict";var a={authenticatorServiceName:"authenticator"};return{setAuthenticatorServiceName:function(b){a.authenticatorServiceName=b||a.authenticatorServiceName},$get:["$q","$injector",function(b,c){var d={},e=[],f=!0;return d.push=function(a){e.push(a),d.onItemAdded()},d.retryAll=function(a){for(;e.length;)e.shift().retry(a)},d.cancelAll=function(){for(;e.length;)e.shift().cancel()},d.onItemAdded=function(){var b;f&&(b=c.get(a.authenticatorServiceName),b.execute().then(function(a){d.retryAll(a),f=!0},function(){d.cancelAll(),f=!0}),f=!1)},{addRequest:function(a){var e=b.defer(),f={retry:function(b){var d=function(a,b){var d=c.get("$http");return a.headers[b.headerName]=b.token,d(a)};d(a,b).then(function(a){e.resolve(a)},function(a){e.reject(a)})},cancel:function(){e.reject()}};return d.push(f),e.promise}}}]}}),angular.module("app.tableMgmt",["ngRoute","app.offerMgmt","app.salesMgmt","app.main"],["$routeProvider",function(a){"use strict";a.when("/table-mgmt/table-search",{templateUrl:"html/table-mgmt/table-search.html",controller:"TableSearchCntl",resolve:{initialTableList:["tables",function(a){return a.getAllTables()}]}})}]),angular.module("app.tableMgmt").controller("TableSearchCntl",["$scope","tables","initialTableList","$modal","globalSpinner","offers","sales",function(a,b,c,d,e,f,g){"use strict";a.tables=c,a.openEditDialog=function(a){d.open({templateUrl:"html/table-mgmt/table-details.html",backdrop:"static",keyboard:!1,controller:"TableDetailsCntl",resolve:{tableDetails:function(){return b.loadTable(a.id)},allOffers:function(){return f.loadAllOffers()},currentOrder:function(){return g.loadOrderForTable(a.id)}}})},a.columnDefs=[{field:"id",label:"Table number"},{field:"state",label:"State"},{field:"waiter",label:"Waiter"}],a.buttonDefs=[{label:"Edit...",onClick:function(b){a.openEditDialog(b)},isNotActive:function(a){return null===a}},{label:"Reserve",onClick:function(a){a&&e.decorateCallOfFunctionReturningPromise(function(){return b.reserve(a)})},isActive:function(a){return a&&"FREE"===a.state}},{label:"Cancel Reservation",onClick:function(a){a&&e.decorateCallOfFunctionReturningPromise(function(){return b.cancelReservation(a)})},isActive:function(a){return a&&"RESERVED"===a.state}},{label:"Occupy",onClick:function(a){a&&e.decorateCallOfFunctionReturningPromise(function(){return b.occupy(a)})},isActive:function(a){return a&&("RESERVED"===a.state||"FREE"===a.state)}},{label:"Free",onClick:function(a){a&&e.decorateCallOfFunctionReturningPromise(function(){return b.free(a)})},isActive:function(a){return a&&"OCCUPIED"===a.state}}]}]),angular.module("app.tableMgmt").controller("TableDetailsCntl",["$scope","$sce","tableDetails","allOffers","currentOrder","sales","globalSpinner",function(a,b,c,d,e,f,g){"use strict";a.table=c,a.allOffers=d,a.model={},a.model.order=e,a.model.selected=d.length?d[0]:void 0,a.trustAsHtml=function(a){return b.trustAsHtml(a)},a.noOrderAssigned=function(){return!a.model.order},a.orderAssigned=function(){return!a.noOrderAssigned()},a.assignNewOrder=function(){a.model.order={order:{tableId:a.table.id,state:"OPEN"},positions:[]}},a.columnDefs=[{field:"id",label:"Number"},{field:"offerName",label:"Title"},{field:"state",label:"Status"},{field:"price",label:"Price",renderer:function(a){return a.price?"<span>"+a.price+" EUR</span>":""}},{field:"comment",label:"Comment"}],a.forms={},a.submit=function(){g.decorateCallOfFunctionReturningPromise(function(){return f.saveOrUpdateOrder(a.model.order)}).then(function(){a.$close()})},a.addPosition=function(b){a.model.order.positions.push({revision:null,orderId:a.model.order.order.id,offerId:null,offerName:b.description,state:"ORDERED",price:b.currentPrice,comment:""})},a.buttonDefs=[{label:"Remove",onClick:function(b){a.model.order.positions.splice(a.model.order.positions.indexOf(b),1)},isNotActive:function(a){return null===a}}]}]),angular.module("app.tableMgmt").factory("tables",["tableManagementRestService",function(a){"use strict";var b=[];return{getAllTables:function(){return a.getAllTables().then(function(a){return angular.copy(a.data,b),b})},loadTable:function(b){return a.getTable(b).then(function(a){return a.data})},reserve:function(c){return a.markTableAs(c.id,"RESERVED").then(function(){var a=b.indexOf(c);a>=0&&(b[a].state="RESERVED")})},free:function(c){return a.markTableAs(c.id,"FREE").then(function(){var a=b.indexOf(c);a>=0&&(b[a].state="FREE")})},occupy:function(c){return a.markTableAs(c.id,"OCCUPIED").then(function(){var a=b.indexOf(c);a>=0&&(b[a].state="OCCUPIED")})},cancelReservation:function(c){return a.markTableAs(c.id,"FREE").then(function(){var a=b.indexOf(c);a>=0&&(b[a].state="FREE")})}}}]),angular.module("app.tableMgmt").factory("tableManagementRestService",["$http","currentContextPath",function(a,b){"use strict";var c=b.get()+"services/rest/tablemanagement";return{getTable:function(b){return a.get(c+"/table/"+b)},getAllTables:function(){return a.get(c+"/table/")},createTable:function(b,d){return a.put(c+"/table/"+b,d)},deleteTable:function(b){return a.delete(c+"/table/"+b)},markTableAs:function(b,d){return a.post(c+"/table/"+b+"/markTableAs"+d)},isTableReleasable:function(b){return a.get(c+"/table/"+b+"/isTableReleasable/")}}}]),angular.module("app.offerMgmt",["app.main"]),angular.module("app.offerMgmt").factory("offers",["offerManagementRestService",function(a){"use strict";return{loadAllOffers:function(){return a.getAllOffers().then(function(a){return a.data})}}}]),angular.module("app.offerMgmt").factory("offerManagementRestService",["$http","currentContextPath",function(a,b){"use strict";var c=b.get()+"services/rest/offermanagement";return{getAllOffers:function(){return a.get(c+"/offer")}}}]),angular.module("app.salesMgmt",["app.main"]),angular.module("app.salesMgmt").factory("sales",["salesManagementRestService",function(a){"use strict";return{loadOrderForTable:function(b){return a.findOrders({tableId:b,state:"OPEN"}).then(function(a){return a.data&&a.data.length?a.data[0]:void 0})},saveOrUpdateOrder:function(b){var c;return c=b.order.id?a.updateOrder(b,b.order.id).then(function(a){return a.data}):a.createOrder(b).then(function(a){return a.data})}}}]),angular.module("app.salesMgmt").factory("salesManagementRestService",["$http","currentContextPath",function(a,b){"use strict";var c=b.get()+"services/rest/salesmanagement";return{findOrders:function(b){return a.get(c+"/order",{params:b})},updateOrder:function(b,d){return a.put(c+"/order/"+d,b)},createOrder:function(b){return a.post(c+"/order",b)}}}]);