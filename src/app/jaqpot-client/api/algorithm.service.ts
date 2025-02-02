// /**
//  * Jaqpot API
//  * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
//  *
//  * OpenAPI spec version: 4.0.3
//  * Contact: hampos@me.com
//  *
//  * NOTE: This class is auto generated by the swagger code generator program.
//  * https://github.com/swagger-api/swagger-codegen.git
//  * Do not edit the class manually.
//  */

/* eslint-disable @typescript-eslint/member-ordering */

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import '../rxjs-operators';

import { Algorithm } from '../model/algorithm';
import { ErrorReport } from '../model/errorReport';

// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { SessionService } from '../../session/session.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlgorithmService {
  private _basePath: string;
  private _defaultHeaders: Headers = new Headers();

  private _getAlgorithmsEndpoint: string;
  private _postAlgorithmEndpoint: string;
  private _getAlgorithmById: string;
  private _deleteAlgorithmEndpoint: string;
  private _getAlgorithmByIdEndpoint: string;
  private _modifyAlgorithmEndpoint: string;
  private _createModelEndpoint: string;
  private _errorReportEndpoint: ErrorReport;

  private _subjectId: string;

  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private dialogsService: DialogsService,
    public oidcSecurityService: OidcSecurityService,
  ) {
    this._basePath = environment.jaqpotApi;

    this._getAlgorithmsEndpoint = this._basePath + '/algorithm';
    this._getAlgorithmById = this._basePath + '/algorithm/';
    this._postAlgorithmEndpoint = this._basePath + '/algorithm';
    this._deleteAlgorithmEndpoint = this._basePath + '/algorithm';
    this._getAlgorithmByIdEndpoint = this._basePath + '/algotithm';
    this._modifyAlgorithmEndpoint = this._basePath + '/algorithm';
    this._createModelEndpoint = this._basePath + '/algorithm';
  }

  public getAlgorithms(
    _class?: string,
    start?: number,
    max?: number,
  ): Observable<Array<Algorithm>> {
    let params = new HttpParams();
    params.set('class', _class);
    params.set('start', start.toString());
    params.set('max', max.toString());
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.set('subjectid', this._subjectId);
    const token = this.oidcSecurityService.getAccessToken();
    const tokenValue = 'Bearer ' + token;
    headers.set('Authorization', tokenValue);
    return this.http
      .get(this._getAlgorithmsEndpoint, { headers: headers, params: params })
      .pipe(
        tap((res: Response) => {
          return res.json();
        }),
        catchError(this.dialogsService.onError),
      );
  }

  public getAlgorithmsCount(
    _class?: string,
    start?: number,
    max?: number,
  ): Observable<Response> {
    let params = new HttpParams();
    params.set('class', _class);
    params.set('start', '0');
    params.set('max', '1');

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = this.oidcSecurityService.getAccessToken();
    const tokenValue = 'Bearer ' + token;
    headers.set('Authorization', tokenValue);

    return this.http
      .get(this._getAlgorithmsEndpoint, { headers: headers, params: params })
      .pipe(
        map((res: Response) => {
          var total = res.headers.get('total');
          return res;
        }),
        catchError(this.dialogsService.onError),
      );
  }

  public getAlgorithmById(id: string): Observable<Algorithm> {
    let params = new HttpParams();
    const token = this.oidcSecurityService.getAccessToken();
    const tokenValue = 'Bearer ' + token;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set(
      'Authorization',
      tokenValue,
    );
    return this.http
      .get(this._getAlgorithmById + id, { headers: headers, params: params })
      .pipe(
        tap((res: Response) => {
          return res;
        }),
        catchError((err) => this.dialogsService.onError(err)),
      );
  }
}
//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();

//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }

//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }

//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     /**
//      * Creates Algorithm
//      * Registers a new JPDI-compliant algorithm service. When registering a new JPDI-compliant algorithm web service it is crucial to propertly annotate your algorithm with appropriate ontological classes following the &lt;a href&#x3D;\&quot;http://opentox.org/dev/apis/api-1.1/Algorithms\&quot;&gt;OpenTox algorithms ontology&lt;/a&gt;. For instance, a Clustering algorithm must be annotated with &lt;code&gt;ot:Clustering&lt;/code&gt;. It is also important for discoverability to add tags to your algorithm using the &lt;code&gt;meta.subjects&lt;/code&gt; field. An example is provided below.
//      * @param body Algorithm in JSON
//      * @param subjectid Authorization token
//      * @param title Title of your algorithm
//      * @param description Short description of your algorithm
//      * @param tags Tags for your algorithm (in a comma separated list) to facilitate look-up
//      */
//     public createAlgorithm(body: Algorithm, subjectid?: string, title?: string, description?: string, tags?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.createAlgorithmWithHttpInfo(body, subjectid, title, description, tags, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Unregisters an algorithm of given ID
//      * Deletes an algorithm of given ID. The application of this method requires authentication and assumes certain priviledges.
//      * @param id ID of the algorithm which is to be deleted.
//      * @param subjectid
//      */
//     public deleteAlgorithm(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<{}> {
//         return this.deleteAlgorithmWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Finds Algorithm
//      * Finds Algorithm with provided name
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getAlgorithm(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.getAlgorithmWithHttpInfo(id, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Finds all Algorithms
//      * Finds all Algorithms JaqpotQuattro supports
//      * @param subjectid Authorization token
//      * @param _class class
//      * @param start start
//      * @param max max
//      */
//     public getAlgorithms(subjectid?: string, _class?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Array<Algorithm>> {
//         return this.getAlgorithmsWithHttpInfo(subjectid, _class, start, max, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Modifies a particular Algorithm resource
//      * Modifies (applies a patch on) an Algorithm resource of a given ID. This implementation of PATCH follows the RFC 6902 proposed standard. See https://tools.ietf.org/rfc/rfc6902.txt for details.
//      * @param id ID of an existing BibTeX.
//      * @param body The patch in JSON according to the RFC 6902 specs
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public modifyAlgorithm(id: string, body: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Algorithm> {
//         return this.modifyAlgorithmWithHttpInfo(id, body, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Creates Model
//      * Applies Dataset and Parameters on Algorithm and creates Model.
//      * @param title
//      * @param description
//      * @param id
//      * @param datasetUri
//      * @param predictionFeature
//      * @param parameters
//      * @param transformations
//      * @param scaling
//      * @param doa
//      * @param subjectid
//      */
//     public trainModel(title: string, description: string, id: string, datasetUri?: string, predictionFeature?: string, parameters?: string, transformations?: string, scaling?: string, doa?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.trainModelWithHttpInfo(title, description, id, datasetUri, predictionFeature, parameters, transformations, scaling, doa, subjectid, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Creates Algorithm
//      * Registers a new JPDI-compliant algorithm service. When registering a new JPDI-compliant algorithm web service it is crucial to propertly annotate your algorithm with appropriate ontological classes following the &lt;a href&#x3D;\&quot;http://opentox.org/dev/apis/api-1.1/Algorithms\&quot;&gt;OpenTox algorithms ontology&lt;/a&gt;. For instance, a Clustering algorithm must be annotated with &lt;code&gt;ot:Clustering&lt;/code&gt;. It is also important for discoverability to add tags to your algorithm using the &lt;code&gt;meta.subjects&lt;/code&gt; field. An example is provided below.
//      * @param body Algorithm in JSON
//      * @param subjectid Authorization token
//      * @param title Title of your algorithm
//      * @param description Short description of your algorithm
//      * @param tags Tags for your algorithm (in a comma separated list) to facilitate look-up
//      */
//     public createAlgorithmWithHttpInfo(body: Algorithm, subjectid?: string, title?: string, description?: string, tags?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm';

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'body' is not null or undefined
//         if (body === null || body === undefined) {
//             throw new Error('Required parameter body was null or undefined when calling createAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         if (title !== undefined && title !== null) {
//             headers.set('title', String(title));
//         }

//         if (description !== undefined && description !== null) {
//             headers.set('description', String(description));
//         }

//         if (tags !== undefined && tags !== null) {
//             headers.set('tags', String(tags));
//         }

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];

//         headers.set('Content-Type', 'application/json');

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Unregisters an algorithm of given ID
//      * Deletes an algorithm of given ID. The application of this method requires authentication and assumes certain priviledges.
//      * @param id ID of the algorithm which is to be deleted.
//      * @param subjectid
//      */
//     public deleteAlgorithmWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling deleteAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Delete,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Finds Algorithm
//      * Finds Algorithm with provided name
//      * @param id
//      * @param subjectid Authorization token
//      */
//     public getAlgorithmWithHttpInfo(id: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling getAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list',
//             'application/ld+json'
//         ];

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Finds all Algorithms
//      * Finds all Algorithms JaqpotQuattro supports
//      * @param subjectid Authorization token
//      * @param _class class
//      * @param start start
//      * @param max max
//      */
//     public getAlgorithmsWithHttpInfo(subjectid?: string, _class?: string, start?: number, max?: number, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm';

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         if (_class !== undefined) {
//             queryParameters.set('class', <any>_class);
//         }

//         if (start !== undefined) {
//             queryParameters.set('start', <any>start);
//         }

//         if (max !== undefined) {
//             queryParameters.set('max', <any>max);
//         }

//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Get,
//             headers: headers,
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Modifies a particular Algorithm resource
//      * Modifies (applies a patch on) an Algorithm resource of a given ID. This implementation of PATCH follows the RFC 6902 proposed standard. See https://tools.ietf.org/rfc/rfc6902.txt for details.
//      * @param id ID of an existing BibTeX.
//      * @param body The patch in JSON according to the RFC 6902 specs
//      * @param subjectid Clients need to authenticate in order to create resources on the server
//      */
//     public modifyAlgorithmWithHttpInfo(id: string, body: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling modifyAlgorithm.');
//         }
//         // verify required parameter 'body' is not null or undefined
//         if (body === null || body === undefined) {
//             throw new Error('Required parameter body was null or undefined when calling modifyAlgorithm.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Patch,
//             headers: headers,
//             body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Creates Model
//      * Applies Dataset and Parameters on Algorithm and creates Model.
//      * @param title
//      * @param description
//      * @param id
//      * @param datasetUri
//      * @param predictionFeature
//      * @param parameters
//      * @param transformations
//      * @param scaling
//      * @param doa
//      * @param subjectid
//      */
//     public trainModelWithHttpInfo(title: string, description: string, id: string, datasetUri?: string, predictionFeature?: string, parameters?: string, transformations?: string, scaling?: string, doa?: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/algorithm/${id}'
//                     .replace('${' + 'id' + '}', String(id));
//         console.log(title, description, id, datasetUri, predictionFeature, subjectid);

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'title' is not null or undefined
//         if (title === null || title === undefined) {
//             throw new Error('Required parameter title was null or undefined when calling trainModel.');
//         }
//         // verify required parameter 'description' is not null or undefined
//         if (description === null || description === undefined) {
//             throw new Error('Required parameter description was null or undefined when calling trainModel.');
//         }
//         // verify required parameter 'id' is not null or undefined
//         if (id === null || id === undefined) {
//             throw new Error('Required parameter id was null or undefined when calling trainModel.');
//         }
//         if (subjectid !== undefined && subjectid !== null) {
//             headers.set('subjectid', String(subjectid));
//         }

//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };

//         headers.set('Content-Type', 'application/x-www-form-urlencoded');

//       // to determine the Accept header
//         let produces: string[] = [
//             'application/json',
//             'text/uri-list'
//         ];

//         if (title !== undefined) {
//             formParams.set('title', <any>title);
//         }

//         if (description !== undefined) {
//             formParams.set('description', <any>description);
//         }

//         if (datasetUri !== undefined) {
//             formParams.set('dataset_uri', <any>datasetUri);
//         }

//         if (predictionFeature !== undefined) {
//             formParams.set('prediction_feature', <any>predictionFeature);
//         }

//         if (parameters !== undefined) {
//             formParams.set('parameters', <any>parameters);
//         }

//         if (transformations !== undefined) {
//             formParams.set('transformations', <any>transformations);
//         }

//         if (scaling !== undefined) {
//             formParams.set('scaling', <any>scaling);
//         }

//         if (doa !== undefined) {
//             formParams.set('doa', <any>doa);
//         }

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }
// }
