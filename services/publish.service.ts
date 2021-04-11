import PublishDao from '../dao/publish.dao';
import { CRUD } from '../interfaces/crud.interface';
import { CreatePublishDto } from '../dto/create.publish.dto';

class PublishService implements CRUD {


    async create(resource: CreatePublishDto){

        return PublishDao.publishContent(resource)
    }

    async deleteById(id: string) {
        return PublishDao.removePublishedContentById(id);
    }


    async readAll() {
        return PublishDao.getPublishedContents();
    }


    async readByIdAll(id: string) {
        return PublishDao.getSubPublishContentByIdAll(id);
    }

    async readById(id: string) {
        return PublishDao.getPublishedContentById(id);
    }

  
}

export default  new PublishService();
