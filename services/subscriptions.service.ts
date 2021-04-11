import SubscriptionsDao from '../dao/subscribe.dao';
import { CRUD } from '../interfaces/crud.interface';
import { CreateSubscriptionDto } from '../dto/create.subscribe.dto';

class SubscriptionsService implements CRUD {


    async create(resource: CreateSubscriptionDto){

        return SubscriptionsDao.addSubscription(resource)
    }

    async deleteById(id: string) {
        return SubscriptionsDao.removeSubscriptionById(id);
    }


    async readAll() {
        return SubscriptionsDao.getSubscriptions();
    }


    async readByIdAll(id: string) {
        return SubscriptionsDao.getSubscriptionByIdAll(id);
    }

    async readById(id: string) {
        return SubscriptionsDao.getSubscriptionById(id);
    }

    async readByIdAndUrl(id: string, url: string) {
        return SubscriptionsDao.getTopicWhereUrlexist(id, url);
    }
  
}

export default  new SubscriptionsService();
