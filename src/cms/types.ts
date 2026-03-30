/**
 * local types for Payload CMS blocks to avoid missing dependency errors
 * when Payload is not installed in the front-end environment.
 */

export interface Block {
  slug: string;
  labels?: {
    singular: string;
    plural: string;
  };
  fields: any[];
  graphQL?: {
    singularName?: string;
  };
  custom?: Record<string, any>;
  dbName?: string;
  interfaceName?: string;
}
