import ApplicationSerializer from './application';


export default class ReferenceSerializer extends ApplicationSerializer {
  normalize(type, hash) {
    hash.id = hash.metadata.name;
    hash.name = hash.metadata.name;
    hash.organism = hash.metadata.organism;
    hash.common_name = hash.metadata.common_name;
    hash.description = hash.metadata.description;
    hash.downloader = hash.metadata.downloader;
    hash.organization = hash.metadata.organization;
    hash.taxon_id = hash.metadata.ncbi_taxon_id;
    hash.ensembl_release = hash.metadata.ensembl_release_number;
    hash.custom = hash.metadata.custom;
    return super.normalize(type, hash);
  }
}
