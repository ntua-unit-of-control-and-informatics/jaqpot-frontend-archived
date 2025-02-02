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

import { MetaInfo } from './metaInfo';

export interface BibTeX {
  meta?: MetaInfo;

  ontologicalClasses?: Array<string>;

  visible?: boolean;

  temporary?: boolean;

  featured?: boolean;

  author?: string;

  title?: string;

  bookTitle?: string;

  school?: string;

  chapter?: string;

  copyright?: string;

  edition?: string;

  editor?: string;

  crossref?: string;

  address?: string;

  year?: string;

  pages?: string;

  volume?: string;

  number?: string;

  journal?: string;

  isbn?: string;

  issn?: string;

  keywords?: string;

  key?: string;

  annotation?: string;

  series?: string;

  url?: string;

  bibType?: BibTeX.BibTypeEnum;

  publisher?: string;

  id?: string;

  abstract?: string;
}
export namespace BibTeX {
  export enum BibTypeEnum {
    Article = <any>'Article',
    Book = <any>'Book',
    Conference = <any>'Conference',
    Phdthesis = <any>'Phdthesis',
    Booklet = <any>'Booklet',
    Inbook = <any>'Inbook',
    Incollection = <any>'Incollection',
    Inproceedings = <any>'Inproceedings',
    Manual = <any>'Manual',
    Mastersthesis = <any>'Mastersthesis',
    Misc = <any>'Misc',
    Proceedings = <any>'Proceedings',
    TechReport = <any>'TechReport',
    Unpublished = <any>'Unpublished',
    Entry = <any>'Entry',
  }
}
