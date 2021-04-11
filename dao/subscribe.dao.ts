import {CreateSubscriptionDto} from '../dto/create.subscribe.dto'
import shortid from 'shortid';
import debug from 'debug';



 class SubscriptionsDao {

    subscriptions: Array<CreateSubscriptionDto> = [];
    log: debug.IDebugger = debug('app:in-memory-dao');

     async addSubscription(subscription: CreateSubscriptionDto){
        subscription.id = shortid.generate();
        this.subscriptions.push(subscription);
        return {
            url: subscription.url,
            topic: subscription.topic
        };
    };

    async getSubscriptions() {
        return this.subscriptions;
    }

    async getSubscriptionById(subId: string) {
        return this.subscriptions.find((subscription: { topic: string }) => subscription.topic === subId);
    }

    async getSubscriptionByIdAll(subId: string) {
        return this.subscriptions.filter((subscription: { topic: string }) => subscription.topic === subId);
    }

    async getTopicWhereUrlexist(subId: string, url: string)
    {
        return this.subscriptions.find((subscription: { topic: string, url: string}) => subscription.topic === subId && subscription.url === url);
    }

    async removeSubscriptionById(subId: string) {
        const objIndex = this.subscriptions.findIndex(
            (obj: { topic: string }) => obj.topic === subId
        );
        this.subscriptions.splice(objIndex, 1);
        return {
            status: `${subId} removed`
        };
    }
}

export default new SubscriptionsDao();