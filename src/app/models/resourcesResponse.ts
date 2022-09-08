import { IResource } from './resource';

export interface IResourcesResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IResource[];
  support: {
    url: string;
    text: string;
  };
}
