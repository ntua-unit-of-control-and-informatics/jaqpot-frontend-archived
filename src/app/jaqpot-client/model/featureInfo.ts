/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface FeatureInfo {
  key?: string;

  name?: string;

  units?: string;

  conditions?: { [key: string]: any };

  category?: FeatureInfo.CategoryEnum;

  uri?: string;
}
export namespace FeatureInfo {
  export enum CategoryEnum {
    EXPERIMENTAL = <any>'EXPERIMENTAL',
    IMAGE = <any>'IMAGE',
    GO = <any>'GO',
    MOPAC = <any>'MOPAC',
    CDK = <any>'CDK',
    PREDICTED = <any>'PREDICTED',
  }
}
